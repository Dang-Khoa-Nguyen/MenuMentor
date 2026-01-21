# This file contains ALL functions that have READ, INSERT, UPDATE operations to the remote database SUPABASE
# This file is to be used in junction with supabase_client.py

# Imports for specifying the return types
from typing import List, Dict, Any
from flask import jsonify
import uuid
from .supabase_client import get_supabase_anon

supabase = get_supabase_anon()
ALLOWED_TYPES = {"image/png", "image/jpeg", "image/jpg"}
                 
def upload_image_item(file):
    
    try:
        # Validate
        if not file or not file.filename:
            raise ValueError("Invalid file")
        
        image_path = f"menu/{uuid.uuid4()}-{file.filename}"
        file_bytes = file.read()
        
        supabase.storage.from_("images").upload(
            image_path,
            file_bytes, 
            {
                "content-type": file.mimetype
            }
        )
        return image_path
    except Exception as e:
        raise e

def create_menu_item(name,price,description,image_path):
    
    res = supabase.table("DiningItems").insert({
        "name": name,
        "description": description,
        "price": price,
        "image_path": image_path
    }).execute()
    
    if res.data is None:
        raise Exception("Insert failed")
    
    return res.data[0]

def create_item(file, name, description,price):
    if file.mimetype not in ALLOWED_TYPES:
        return None
    
    image_path = upload_image_item(file)

    food = create_menu_item(
        name=name,
        price=price,
        description=description,
        image_path=image_path
    )

    return food

def get_items():
    res = supabase.table("DiningItems").select("*").execute()
    
    return res.data