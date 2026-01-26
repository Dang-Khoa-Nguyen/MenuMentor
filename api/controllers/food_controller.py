import json
from flask import jsonify, request
from typing import Tuple
from database.supabase_functions import create_item, get_items

class FoodController:
    @staticmethod
    def create_new_item() -> Tuple:
        """Create a menu item"""
        image = request.files.get("image_path")
        name = request.form.get("name")
        description = request.form.get("description")
        price = request.form.get("price")

        if not image:
            return {"error": "Image required"}, 400

        food = create_item(
            file=image,
            name=name,
            description=description,
            price=float(price),
        )

        return jsonify(food)

    @staticmethod
    def get_all_items():
        return get_items()