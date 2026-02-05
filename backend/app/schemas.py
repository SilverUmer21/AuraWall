from pydantic import BaseModel

class WallpaperBase(BaseModel):
    title: str
    url: str
    category: str
    author: str
    likes: int
    width: int
    height: int

class WallpaperCreate(WallpaperBase):
    pass

class Wallpaper(WallpaperBase):
    id: int

    class Config:
        from_attributes = True
