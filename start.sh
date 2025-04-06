#!/bin/bash

echo "Building micro-apps..."

# Navigate to app1, build it, and then serve the built files
cd micro-apps/app1
npm run build
echo "Starting App1 in preview mode..."
npm run preview &
APP1_PID=$!
echo "Started App1 (PID: $APP1_PID)"

# Navigate to app2, build it, and then serve the built files
cd ../app2
npm run build
echo "Starting App2 in preview mode..."
npm run preview &
APP2_PID=$!
echo "Started App2 (PID: $APP2_PID)"

# Navigate back to container
cd ../../container

# Build the container app
npm run build

# Start the container in preview mode
echo "Starting container app in preview mode..."
npm run preview &
CONTAINER_PID=$!
echo "Started Container (PID: $CONTAINER_PID)"

echo "All applications are running!"
echo "- Container: http://localhost:5170"
echo "- App1: http://localhost:5171"
echo "- App2: http://localhost:5172"

# Wait for all background processes
wait 