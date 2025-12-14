import json
from flask import jsonify, request
from typing import Tuple
from services import food_service

class FoodController:
    @staticmethod
    def get_all() -> Tuple:
        """Get all food"""
        food, status, message = food_service.list_food()
        return jsonify({"message": message, "food": food}), status
