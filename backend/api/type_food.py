from flask import Blueprint
from controllers.type_food_controller import TypeFoodController

bp = Blueprint("type_food", __name__, url_prefix="/type_food")

@bp.get("/")
def get_list_type_food():
    return TypeFoodController.get_all()

@bp.post("/")
def create_type_food():
    return TypeFoodController.create_type_food()