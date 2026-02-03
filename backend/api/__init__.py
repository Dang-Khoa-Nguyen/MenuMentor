from .food import bp as food_bp

def register_blueprints(app):
    app.register_blueprint(food_bp)