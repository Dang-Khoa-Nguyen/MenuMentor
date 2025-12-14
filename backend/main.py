from config import app, db
from api import register_blueprints
from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Enable CORS for your frontend (localhost:3000)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

# Register all blueprints
# register_blueprints(app)

EMAIL_ADDRESS = os.environ.get("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.environ.get("EMAIL_PASSWORD")

@app.route("/send-email", methods=["POST"])
def send_email():
    data = request.json
    html_content = f"""
        <!DOCTYPE html>
        <html>
        <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f4f4;">
            <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
                <td align="center" style="padding:20px;">
                <table width="600" cellpadding="0" cellspacing="0" 
                        style="background:#ffffff; border-radius:10px; overflow:hidden;">

                    <!-- Header -->
                    <tr>
                    <td style="background:#166534; color:white; padding:20px; text-align:center;">
                        <h1 style="margin:0;">MenuMentor</h1>
                        <p style="margin:5px 0 0;">New Contact Message</p>
                    </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                    <td style="padding:30px;">
                        <p style="font-size:16px; color:#333;">You have received a new message:</p>

                        <p><strong>Name:</strong> {data['name']}</p>
                        <p><strong>Email:</strong> {data['email']}</p>

                        <div style="margin-top:20px; padding:15px; background:#f9fafb; 
                                    border-left:4px solid #22c55e;">
                        <p style="margin:0; color:#333;">
                            {data['message']}
                        </p>
                        </div>
                    </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                    <td style="background:#f3f4f6; padding:15px; text-align:center; font-size:12px; color:#555;">
                        © {2025} MenuMentor · Restaurant AI System
                    </td>
                    </tr>

                </table>
                </td>
            </tr>
            </table>
        </body>
        </html>
        """
    msg = EmailMessage()
    msg["Subject"] = f"Contact Form: {data['name']}"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = EMAIL_ADDRESS
    msg.set_content("This email requires an HTML-compatible email client.")
    msg.add_alternative(html_content, subtype="html")

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        smtp.send_message(msg)

    return jsonify({"success": True})

if __name__ == "__main__":
    # with app.app_context():
      #  db.create_all()

    app.run(debug=True)