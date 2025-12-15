from config import db
from models import TypeFood

def list_type_food():
    """Return all type food as list of dicts."""
    food = TypeFood.query.order_by(TypeFood.name.asc()).all()
    return [single_food.to_json() for single_food in food], 200, "type food fetched successfully"

def create_type_food(name):
    """Create type food as list of dicts."""
    if not name:
        return None, 400, "You must include a name"

    new_type_food = TypeFood(
        name=name,
    )

    try:
        db.session.add(new_type_food)
        db.session.commit()
        return new_type_food, 201, "type food created successfully"
    except Exception as e:
        db.session.rollback()
        return None, 500, str(e)