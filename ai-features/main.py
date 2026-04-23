from fastapi import FastAPI
from langchain_ollama import ChatOllama

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.post("/items")
def create_item(item_id: int):
    return {"item_id": item_id}

llm = ChatOllama(
    base_url="https://ollama.com",  # or whatever they provide
    headers={
        "Authorization": "Bearer 480b45f19348411889380d738a82ab90.t5zdsoPgeXi15jNkb4j3BfmY"
    },
    model="kimi-k2-thinking"
)
messages = [
    (
        "system",
        "",
    ),
    ("human", "I love programming."),
]
@app.get("/project")
def get_proj():
    llm.invoke(messages)
    return {"msg":"hyy"}

@app.post("/project")
def get_proj(name:str):

    return {"msg":age,"name":name}


# llm = ChatOllama(
#     base_url="https://ollama.com",
#     headers={
#         "Authorization": "Bearer 35104f2609704d9f89aca9777db7e22a.p8znlegG3FILF4efcJcwBGCi"
#     },
#     model="kimi-k2:1t"
# )

