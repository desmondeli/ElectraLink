from flask import Blueprint, request, jsonify, render_template, redirect, url_for
from flask_login import login_user, logout_user, login_required, current_user
from werkzeug.security import generate_password_hash, check_password_hash
from models import db, User, Order, OrderItem, Favourite
import uuid

routes = Blueprint('routes', __name__)

# ── PAGES ──────────────────────────────────────────────

@routes.route('/')
def login_page():
    if current_user.is_authenticated:
        return redirect(url_for('routes.store'))
    return render_template('index.html')

@routes.route('/store')
@login_required
def store():
    return render_template('store.html', username=current_user.username)

@routes.route('/api/me')
@login_required
def me():
    return jsonify({
      'ok':       True,
      'username': current_user.username,
      'email':    current_user.email
    })
@routes.route('/checkout')
@login_required
def checkout():
    return render_template('checkout.html')

@routes.route('/profile')
@login_required
def profile():
    favourites = Favourite.query.filter_by(user_id=current_user.id).all()
    orders     = Order.query.filter_by(user_id=current_user.id).order_by(Order.created_at.desc()).all()
    return render_template('profile.html',
                           user=current_user,
                           favourites=favourites,
                           orders=orders)

@routes.route('/about')
def about():
    return render_template('about.html')

@routes.route('/bulk')
def bulk():
    return render_template('bulk.html')

@routes.route('/warranty')
def warranty():
    return render_template('warranty.html')

@routes.route('/returns')
def returns():
    return render_template('returns.html')

@routes.route('/privacy')
def privacy():
    return render_template('privacy.html')

@routes.route('/terms')
def terms():
    return render_template('terms.html')

@routes.route('/cookies')
def cookies():
    return render_template('cookies.html')

# ── AUTH API ───────────────────────────────────────────

@routes.route('/api/register', methods=['POST'])
def register():
    data     = request.get_json()
    username = data.get('username', '').strip()
    email    = data.get('email', '').strip()
    password = data.get('password', '')

    if not username or not email or not password:
        return jsonify({'ok': False, 'msg': 'All fields are required.'}), 400

    if User.query.filter_by(username=username).first():
        return jsonify({'ok': False, 'msg': 'Username already taken.'}), 400


    hashed = generate_password_hash(password)
    user   = User(username=username, email=email, password=hashed)
    db.session.add(user)
    db.session.commit()
    login_user(user)
    return jsonify({'ok': True})

@routes.route('/api/login', methods=['POST'])
def login():
    data     = request.get_json()
    username = data.get('username', '').strip()
    password = data.get('password', '')

    user = User.query.filter(User.username.ilike(username)).first()
    if not user or not check_password_hash(user.password, password):
        return jsonify({'ok': False, 'msg': 'Incorrect username or password.'}), 401

    login_user(user)
    return jsonify({'ok': True})

@routes.route('/api/logout', methods=['POST'])
@login_required
def logout():
    logout_user()
    return jsonify({'ok': True})

@routes.route('/api/change-password', methods=['POST'])
@login_required
def change_password():
    data         = request.get_json()
    current_pw   = data.get('current_password', '')
    new_pw       = data.get('new_password', '')

    if not check_password_hash(current_user.password, current_pw):
        return jsonify({'ok': False, 'msg': 'Current password is incorrect.'}), 401

    if len(new_pw) < 6:
        return jsonify({'ok': False, 'msg': 'New password must be at least 6 characters.'}), 400

    current_user.password = generate_password_hash(new_pw)
    db.session.commit()
    return jsonify({'ok': True})

# ── FAVOURITES API ─────────────────────────────────────

@routes.route('/api/favourites', methods=['GET'])
@login_required
def get_favourites():
    favs = Favourite.query.filter_by(user_id=current_user.id).all()
    return jsonify([f.product_id for f in favs])

@routes.route('/api/favourites', methods=['POST'])
@login_required
def toggle_favourite():
    product_id = request.get_json().get('product_id')
    existing   = Favourite.query.filter_by(
                   user_id=current_user.id,
                   product_id=product_id
                 ).first()
    if existing:
        db.session.delete(existing)
        db.session.commit()
        return jsonify({'ok': True, 'action': 'removed'})
    fav = Favourite(user_id=current_user.id, product_id=product_id)
    db.session.add(fav)
    db.session.commit()
    return jsonify({'ok': True, 'action': 'added'})

# ── ORDERS API ─────────────────────────────────────────

@routes.route('/api/orders', methods=['POST'])
@login_required
def place_order():
    data  = request.get_json()
    items = data.get('items', [])
    total = data.get('total', 0)

    if not items:
        return jsonify({'ok': False, 'msg': 'No items in order.'}), 400

    order_number = 'SAM-' + uuid.uuid4().hex[:8].upper()
    order = Order(
        user_id      = current_user.id,
        order_number = order_number,
        total        = total,
        status       = 'confirmed'
    )
    db.session.add(order)
    db.session.flush()

    for item in items:
        order_item = OrderItem(
            order_id     = order.id,
            product_id   = item['id'],
            product_name = item['name'],
            price        = item['price'],
            quantity     = item['qty']
        )
        db.session.add(order_item)

    db.session.commit()
    return jsonify({'ok': True, 'order_number': order_number})

@routes.route('/api/orders', methods=['GET'])
@login_required
def get_orders():
    orders = Order.query.filter_by(
               user_id=current_user.id
             ).order_by(Order.created_at.desc()).all()
    result = []
    for o in orders:
        result.append({
            'order_number': o.order_number,
            'total':        o.total,
            'status':       o.status,
            'date':         o.created_at.strftime('%d %b %Y'),
            'items': [{
                'product_id':   i.product_id,
                'product_name': i.product_name,
                'price':        i.price,
                'quantity':     i.quantity
            } for i in o.items]
        })
    return jsonify(result)