from .food import bp as food_bp
from .type_food import bp as type_food_bp

def register_blueprints(app):
    app.register_blueprint(food_bp)
    app.register_blueprint(type_food_bp)