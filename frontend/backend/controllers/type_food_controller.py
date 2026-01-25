# import json
# from flask import jsonify, request
# from typing import Tuple
# from services import type_food_service

# class TypeFoodController:
#     @staticmethod
#     def get_all() -> Tuple:
#         """Get all food"""
#         food, status, message = type_food_service.list_type_food()
#         return jsonify({"message": message, "type_food": food}), status
    
#     @staticmethod
#     def create_type_food() -> Tuple:
#          # Parse json data
#         data = request.json
        
#         try:
#             type_food, status, message = type_food_service.create_type_food(
#                 name=data.get("name")
#             )
#             return jsonify({"message": message, "type_food": type_food.to_json()}), status
#         except ValueError as ve:
#             return jsonify({"message": str(ve)}), 400
#         except Exception as e:
#             return jsonify({"message": str(e)}), 400
