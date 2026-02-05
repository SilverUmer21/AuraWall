from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List
from .. import models, schemas, database

router = APIRouter(
    prefix="/wallpapers",
    tags=["wallpapers"],
)

# Dependency
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/", response_model=List[schemas.Wallpaper])
def read_wallpapers(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    wallpapers = db.query(models.Wallpaper).offset(skip).limit(limit).all()
    # Seed data if empty (Temporary for development)
    if not wallpapers:
        mock_data = [
            models.Wallpaper(
                title="Neon Pulse", 
                url="https://images.unsplash.com/photo-1550751827-4bd374c3f58b", 
                category="Cyberpunk", 
                author="CyberArtist", 
                likes=120, 
                width=1080, 
                height=1920
            ),
             models.Wallpaper(
                title="Misty Peaks", 
                url="https://images.unsplash.com/photo-1519681393784-d120267933ba", 
                category="Nature", 
                author="NatureLover", 
                likes=85, 
                width=1080, 
                height=1920
            ),
             models.Wallpaper(
                title="Violet Galaxy", 
                url="https://images.unsplash.com/photo-1462331940025-496dfbfc7564", 
                category="Space", 
                author="StarGazer", 
                likes=200, 
                width=1080, 
                height=1920
            ),
             models.Wallpaper(
                title="Carbon Dark", 
                url="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe", 
                category="Abstract", 
                author="Minimalist", 
                likes=45, 
                width=1080, 
                height=1920
            ),
        ]
        conn = database.engine.connect()
        # Simple check to avoid race conditions in loose script, but app lifecycle is better for seeding.
        # For now, just adding one by one if DB is truly empty at query time.
        for w in mock_data:
            db.add(w)
        db.commit()
        wallpapers = db.query(models.Wallpaper).offset(skip).limit(limit).all()
        
    return wallpapers
