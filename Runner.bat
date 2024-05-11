@echo off

REM Move to the server directory
cd ".\server\"

REM Run the app.js file
node app.js

REM Move back to the main project directory
cd ..

REM Run ngrok to expose the server running on port 8000
ngrok http 8000

REM Wait for user input before closing the window
pause
