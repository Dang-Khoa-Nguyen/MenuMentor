from flask import Blueprint
from controllers.food_controller import FoodController

bp = Blueprint("food", __name__, url_prefix="/food")

@bp.get("/")
def get_food():
    return FoodController.get_all()