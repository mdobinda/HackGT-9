from fastapi import FastAPI, APIRouter, Request
from dotenv import load_dotenv
from functions import connectToDB
from bson.objectid import ObjectId

router = APIRouter()
load_dotenv()
app = FastAPI()
fs = connectToDB(app)


@app.on_event("startup")
def startup_db_client():    
    for doc in app.database['fs.files'].find():
        print(doc)
    print("Connected to the MongoDB database!") 

@app.on_event("shutdown")
def shutdown_db_client():
    app.mongodb_client.close()

@app.get("/list", response_description="List all sounds")
def list_books(request: Request):
    sounds = {}
    for doc in app.database['fs.files'].find():
        print(doc["filename"])
        sounds[sanitize(doc["filename"])] = str(doc["_id"])     
    return sounds

@app.get("/retrieve", response_description="Get a single sound by id")
def find_sound(id: str, request: Request):
    print(id)
    out = fs.get(ObjectId(id)).read()
    print(out)

    return {'mp3', str(out)}

def sanitize(path):
    arr = path.split('/')
    return arr[len(arr) - 1].split('.')[0]
