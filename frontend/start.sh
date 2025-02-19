#!/bin/bash
echo "Instalacja zaleznosci..."
npm install || { echo "Wystapil blad podczas instalacji zaleznosci."; exit 1; }
echo "Uruchamianie projektu..."
npm start
