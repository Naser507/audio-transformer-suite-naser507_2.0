# Audio Transformer Suite

**Project:** audio-transformer-suite  
**Author:** Naser Abdullah (Naser507)  

## Description
Audio Transformer Suite is a Flask-based web application containerized with Docker. 
It provides modules for audio analysis, conversion, and article management. 

## Features
- Modular multi-page webapp
- Flask backend with Jinja2 templates
- Dockerized for easy deployment
- Frontend with static assets (CSS, JS, images)

## Folder Structure
- `backend/` → Flask backend + Python/C++ scripts
- `app/frontend/` → Templates & static files
- `docs/` → Documentation
- `uploads/` → User audio uploads

## Running the App
```bash
docker build -t ats-flask .
docker run -d --name audio-transformer-container --network ats-network -p 5000:5000 ats-flask




Open in browser: http://localhost:5000


After saving, we’ll **add this file to Git**, commit, and push it.  

Do you want me to give the exact Git commands for **just adding this README.md**?
