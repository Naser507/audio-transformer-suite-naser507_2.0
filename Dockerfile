# Use a slim Python image
FROM python:3.11-slim

# Set working directory inside container
WORKDIR /app

# Copy backend requirements and install
COPY backend/requirements.txt ./backend/
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy backend code
COPY backend/ ./backend

# Copy frontend code
COPY app/ ./app

# Expose Flask port
EXPOSE 5000

# Run Flask app
CMD ["python3", "backend/app.py"]

