@echo off
setlocal enabledelayedexpansion

set /p newIP="Enter the new IP address: "

REM Check if the dist folder exists in the client directory and delete it if it does
echo Checking if the dist folder exists...
if exist ".\client\dist\" (
    echo Deleting the dist folder...
    rmdir /s /q ".\client\dist\"
    if exist ".\client\dist\" (
        echo Failed to delete the dist folder.
        pause
        exit /b
    ) else (
        echo Dist folder deleted successfully.
    )
) else (
    echo Dist folder does not exist.
)

:: Update config.jsx
echo Updating config.jsx...
powershell -Command "(gc .\client\src\config.jsx) -replace 'export const BASE_URL = \".*?.ngrok-free.app\"', 'export const BASE_URL = \"https://%newIP%.ngrok-free.app\"' | Out-File -encoding ASCII .\client\src\config.jsx"
echo Config.jsx updated successfully.

:: Update CORS
echo Updating CORS...
powershell -Command "(gc .\server\app.js) -replace 'const NGROK_IP = \".*?.ngrok-\"', 'const NGROK_IP = \"%newIP%.ngrok-\"' | Out-File -encoding ASCII .\server\app.js"
echo NGROK updated successfully.

:: Move to Root
echo Moving to client directory...
cd ".\client\"
echo Building the project...
npm run build

echo IP address updated successfully.
echo Done.
pause
