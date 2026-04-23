from langchain_ollama import ChatOllama

llm = ChatOllama(
    base_url="https://ollama.com",
    # langchain_ollama expects request headers in client_kwargs
    client_kwargs={
        "headers": {
            "Authorization": "Bearer "
        }
    },
    model="deepseek-v3.2"
)