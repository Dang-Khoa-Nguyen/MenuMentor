from config import db
from backend.database.supabase_functions import Food

def list_food():
    """Return all food as list of dicts."""
    food = Food.query.order_by(Food.name.asc()).all()
    return [single_food.to_json() for single_food in food], 200, "Food fetched successfully"