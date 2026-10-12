from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin
from datetime import datetime

db = SQLAlchemy()

class User(UserMixin, db.Model):
    id         = db.Column(db.Integer, primary_key=True)
    username   = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=False, nullable=False)
    password   = db.Column(db.String(200), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    orders     = db.relationship('Order', backref='user', lazy=True)
    favourites = db.relationship('Favourite', backref='user', lazy=True)

class Order(db.Model):
    id           = db.Column(db.Integer, primary_key=True)
    user_id      = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    order_number = db.Column(db.String(20), unique=True, nullable=False)
    total        = db.Column(db.Float, nullable=False)
    status       = db.Column(db.String(20), default='pending')
    created_at   = db.Column(db.DateTime, default=datetime.utcnow)
    items        = db.relationship('OrderItem', backref='order', lazy=True)

class OrderItem(db.Model):
    id           = db.Column(db.Integer, primary_key=True)
    order_id     = db.Column(db.Integer, db.ForeignKey('order.id'), nullable=False)
    product_id   = db.Column(db.String(10), nullable=False)
    product_name = db.Column(db.String(120), nullable=False)
    price        = db.Column(db.Float, nullable=False)
    quantity     = db.Column(db.Integer, nullable=False)

class Favourite(db.Model):
    id         = db.Column(db.Integer, primary_key=True)
    user_id    = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    product_id = db.Column(db.String(10), nullable=False)