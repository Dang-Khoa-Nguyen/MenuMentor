from flask import Blueprint, request
from controllers.food_controller import FoodController
bp = Blueprint("food", __name__, url_prefix="/food")


@bp.get("/")
def get_items():
    return FoodController.get_all_items()

@bp.post("/create")
def create_food():
    return FoodController.create_new_item()

