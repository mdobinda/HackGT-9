from json import JSONEncoder
from fastapi import FastAPI, APIRouter, Request
from dotenv import load_dotenv
from pymongo import MongoClient
from functions import connectToDB
from models import Sounds
from typing import List

router = APIRouter()
load_dotenv()
app = FastAPI()


@app.on_event("startup")
def startup_db_client():    
    fs = connectToDB(app)
    for doc in app.database['fs.files'].find():
        print(doc)
    print("Connected to the MongoDB database!") 

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/", response_description="List all sounds")
def list_books(request: Request):
    sounds = {}
    for doc in app.database['fs.files'].find():
        print(doc["filename"])
        sounds[sanitize(doc["filename"])] = str(doc["_id"])     
    return sounds

def sanitize(path):
    arr = path.split('/')
    return arr[len(arr) - 1].split('.')[0]