from config import db

class TypeFood(db.Model):
    __tablename__ = "type_food"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)


    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }
