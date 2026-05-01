from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from config.llm import llm

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ProjectInput(BaseModel):
    text: str

@app.post("/refine")
def refineProject(body: ProjectInput):
    messages = [
        (
            "system",
            """You are a project name corrector.

Fix any spelling, grammar, or sentence errors in the project name the user provides.

Rules:
- Return ONLY the corrected project name — nothing else
- Do not add, remove, or change any meaning
- Use Title Case
- If the name is already correct, return it as-is"""
        ),
        ("human", body.text)
    ]
    result = llm.invoke(messages)
    return JSONResponse(content={"refined": result.content})
