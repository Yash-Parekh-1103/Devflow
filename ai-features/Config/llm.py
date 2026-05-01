from langchain_ollama import ChatOllama

llm = ChatOllama(
    base_url="https://ollama.com",
    # langchain_ollama expects request headers in client_kwargs
    client_kwargs={
        "headers": {
            "Authorization": "Bearer 480b45f19348411889380d738a82ab90.t5zdsoPgeXi15jNkb4j3BfmY"
        }
    },
    model="deepseek-v3.2"
)