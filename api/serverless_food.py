import json
import os
import sys
project_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, project_root)
from controllers.food_controller import FoodController

def handler(request):
    return {
        "statusCode": 200,
        "body": "SERVERLESS OK",
        "request": request
    }
    # if request.method == "GET":
    #     return {
    #         "statusCode": 200,
    #         "headers": {"Content-Type": "application/json"},
    #         "body": json.dumps(FoodController.get_all_items())
    #     }

    # if request.method == "POST":
    #     data = request.json()
    #     return {
    #         "statusCode": 201,
    #         "headers": {"Content-Type": "application/json"},
    #         "body": json.dumps(
    #             FoodController.create_new_item(data)
    #         )
    #     }

    # return {
    #     "statusCode": 405,
    #     "body": "Method Not Allowed"
    # }

class MockRequest:
    method = "GET"

    def json(self):
        return {}  

print(handler(MockRequest()))