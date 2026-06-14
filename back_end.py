from fastapi import FastAPI

from pydantic import BaseModel

from my_rag import response
class Scheme(BaseModel):
    prompt:str


app=FastAPI()




@app.post("/model")

def rag_model(user_prompt:Scheme):
    user_prompt=dict(user_prompt)
    replying=response(user_prompt["prompt"])
    return {"response":replying}


    