from config import app, db
from api import register_blueprints
from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

load_dotenv()

# Enable CORS for your frontend (localhost:3000)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Register all blueprints
register_blueprints(app)

