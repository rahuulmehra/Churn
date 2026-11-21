@echo off
title Churnio Local Web Server
echo ========================================================
echo   Starting Churnio Local Web Server on Port 8000
echo ========================================================
echo.
echo Opening http://localhost:8000 in your browser...
start "" "http://localhost:8000"
echo.
python -m http.server 8000
pause
