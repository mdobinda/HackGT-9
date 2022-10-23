import uuid
from typing import Optional
from pydantic import BaseModel, Field
"""


"""
class Sounds(BaseModel):
    id: str = Field(default_factory=uuid.uuid4, alias="_id")
    length: int = Field(...)
    chunkSize: int = Field(...)
    uploadDate: str = Field(...)
    filename: str = Field(...) 
    metadata: str = Field()

    class Config:
        allow_population_by_field_name = True
        schema_extra = {
            "example": {
                "id": "63544832a813904ab5e69b84",
                "length": 865060,
                "chunkSize": 261120,
                "uploadDate": "2022-10-22T19:44:58.290+00:00",
                "filename": "/Users/brandon/Documents/projects/fastapi-mongo-demo/env/sounds/Beach_…",
                "metadata": object
            }
        }