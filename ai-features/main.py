from fastapi import FastAPI
from Config.llm import llm
app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}



messages = [
    (
        "system",
        "You are a helpful assistant.",
    ),
    ("human", "I love programming."),
]
result=llm.invoke(messages)
print(result.content)