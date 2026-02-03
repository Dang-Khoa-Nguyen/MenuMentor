from api import register_blueprints
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder="static")

# Enable CORS for your frontend (localhost:3000)
CORS(app, origins=["http://localhost:3000"])

# Register all blueprints
register_blueprints(app)

if __name__ == "__main__":
    app.run(debug=True)