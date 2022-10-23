from dotenv import load_dotenv
from pymongo import MongoClient
import gridfs
import os

def connectToDB(app):
    app.mongodb_client = MongoClient(os.getenv("ATLAS_URI"))
    app.database = app.mongodb_client[os.getenv("DB_NAME")]
    fs = gridfs.GridFS(app.database)
    
    return fs

load_dotenv()
