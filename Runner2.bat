@echo off

REM Run ngrok to expose the server running on port 8000
ngrok http 8000

REM Wait for user input before closing the window
pause
