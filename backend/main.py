from config import app, db
from api import register_blueprints
from flask_cors import CORS

# Enable CORS for your frontend (localhost:3000)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Register all blueprints
register_blueprints(app)

if __name__ == "__main__":
    with app.app_context():
        db.create_all()

    app.run(debug=True)