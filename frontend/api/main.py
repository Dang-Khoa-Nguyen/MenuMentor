from api.server_api import register_blueprints
from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder="static")
CORS(app)

# Enable CORS for your frontend (localhost:3000)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Register all blueprints
register_blueprints(app)

if __name__ == "__main__":
    app.run(debug=True)