FROM python:3.11-slim

WORKDIR /app

# Copy backend and frontend
COPY backend/ backend/
COPY app/frontend/ frontend/

# Install dependencies
RUN pip install --no-cache-dir -r backend/requirements.txt

# Expose port
EXPOSE 5000

# Start app
CMD ["python", "backend/app.py"]
