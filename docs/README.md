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






## Milestone: Dynamic Backgrounds & Docker Rebuild

- Implemented dynamic background images that change per page.
- Added smooth fade transitions for visual appeal.
- Completed Flask routes for main pages.
- Updated Dockerfile and container setup for lightweight deployment.
- Prepared project for next audio analysis modules.

## Latest Updates
- Added cycling background images with frosted glass overlay
- Updated header, menu, footer templates
- Vanilla JS used for background and sticky menu





# Audio Transformer Suite

Audio Transformer Suite (ATS) is a lightweight, dockerized web application for visualizing and analyzing audio signals. It features dynamic multi-layer backgrounds, audio playback controls, and visualization panels for harmonics, pitch, and noise components.



## Features

- Dockerized Flask backend for easy deployment
- Frontend with dynamic multi-layer background images
- Smooth transitions and responsive UI
- Shared image folder for background slideshows
- Audio visualization panels (FFT, spectrogram, etc.)



## Installation

1. Clone the repository:
   git clone <your-github-repo-url>
2. Build Docker image:
   docker build -t ats-flask .
3. Run container:
   docker run -d --name ats-container --network ats-network -p 5000:5000 ats-flask:latest
4. Access the webapp at http://localhost:5000



## Planned Features

- Multi-page backgrounds with page-specific image sequences
- Improved audio visualization (pitch, harmonics, noise)
- Interactive controls for background and audio display
- Optimized container size and performance
