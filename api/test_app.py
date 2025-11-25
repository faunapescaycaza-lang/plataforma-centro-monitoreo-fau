from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "Root"}

@app.get("/api/drive-files")
def read_api():
    return {"Hello": "API"}
