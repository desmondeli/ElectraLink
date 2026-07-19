from flask import Flask
from flask_login import LoginManager
from models import db, User
from routes import routes

app = Flask(__name__)

app.config['SECRET_KEY']                  = 'electralink-secret-2025'
app.config['SQLALCHEMY_DATABASE_URI']     = 'sqlite:///database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

login_manager = LoginManager(app)
login_manager.login_view = 'routes.login_page'

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

app.register_blueprint(routes)

with app.app_context():
    db.create_all()

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)