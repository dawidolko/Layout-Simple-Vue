@echo off
echo Instalacja zaleznosci...
npm install
if errorlevel 1 (
  echo Wystapil blad podczas instalacji zaleznosci.
  pause
  exit /b 1
)
echo Uruchamianie projektu...
npm start
pause
