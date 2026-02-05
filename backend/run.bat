@echo off
echo Starting AuraWall Backend...
cd /d %~dp0
call venv\Scripts\activate
uvicorn app.main:app --reload --host 0.0.0.0 --port 8005
pause
