from sqlalchemy import Column, Integer, String
from .database import Base

class Wallpaper(Base):
    __tablename__ = "wallpapers"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    url = Column(String)
    category = Column(String, index=True)
    author = Column(String)
    likes = Column(Integer, default=0)
    width = Column(Integer)
    height = Column(Integer)
