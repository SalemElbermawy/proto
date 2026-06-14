from fastapi import FastAPI

from pydantic import BaseModel

from my_rag import response


from fastapi.middleware.cors import CORSMiddleware 

class Scheme(BaseModel):
    prompt:str


app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/model")

def rag_model(user_prompt:Scheme):
    user_prompt=dict(user_prompt)
    replying=response(user_prompt["prompt"])
    return {"response":replying}


    