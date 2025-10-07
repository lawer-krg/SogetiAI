# SogetiAI
SogetiAI Monorepo

This project contains a full-stack AI chatbot application with the following structure:

- `backend/`: Python FastAPI backend with a sample chat endpoint (integrates with an LLM, REST API for chat)
- `frontend-react/`: React app with chat UI (connects to backend API)
- `frontend-angular/`: Angular app with chat UI (connects to backend API)

## Getting Started

### Backend (FastAPI)
1. Navigate to `backend/`
2. Install dependencies: `pip install -r requirements.txt`
3. Run the server: `uvicorn main:app --reload`

### Frontend (React)
1. Navigate to `frontend-react/`
2. Install dependencies: `npm install`
3. Start the app: `npm start`

### Frontend (Angular)
1. Navigate to `frontend-angular/`
2. Install dependencies: `npm install`
3. Start the app: `ng serve`

---

Each frontend connects to the backend API at `http://localhost:8000` by default.
