"""
AuraWall Backend - FastAPI Server
Basic setup for wallpaper management API
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List

# Initialize FastAPI app
app = FastAPI(
    title="AuraWall API",
    description="Backend API for AuraWall - High-performance wallpaper app",
    version="0.1.0"
)

# Configure CORS for React Native frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, specify exact origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Simple response model
class HealthResponse(BaseModel):
    status: str
    message: str


class WallpaperItem(BaseModel):
    id: int
    title: str
    image_url: str
    category: str


@app.get("/", response_model=HealthResponse)
async def root():
    """Root endpoint - API health check"""
    return {
        "status": "success",
        "message": "AuraWall API is running! 🎨"
    }


@app.get("/health", response_model=HealthResponse)
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "message": "Backend is operational"
    }


@app.get("/api/wallpapers", response_model=List[WallpaperItem])
async def get_wallpapers():
    """Get mock wallpapers - temporary endpoint for testing"""
    return [
        {
            "id": 1,
            "title": "Mountain Peak",
            "image_url": "https://picsum.photos/400/600?random=1",
            "category": "Nature"
        },
        {
            "id": 2,
            "title": "City Lights",
            "image_url": "https://picsum.photos/400/600?random=2",
            "category": "Urban"
        },
        {
            "id": 3,
            "title": "Ocean Waves",
            "image_url": "https://picsum.photos/400/600?random=3",
            "category": "Nature"
        }
    ]


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
