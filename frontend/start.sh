#!/bin/bash
echo "Installing dependencies..."
npm install || { echo "Dependency installation failed."; exit 1; }
echo "Starting the project..."
npm start
