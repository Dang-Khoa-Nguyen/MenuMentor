from config import db

class Food(db.Model):
    __tablename__ = "food"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    image_url = db.Column(db.String(255))
    description = db.Column(db.Text)
    type_food_id = db.Column(
        db.Integer,
        db.ForeignKey("type_food.id")
    )
    is_available = db.Column(db.Boolean,nullable=False)

    def to_json(self):
        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "type_food_id": self.type_food_id,
            "type_food_name": self.type_food.name if self.type_food else None,
            "image_url": self.image_url,
        }
