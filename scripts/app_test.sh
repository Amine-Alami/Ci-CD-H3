#!/bin/bash

# Set the base URL for your application
base_url="http://localhost"

# Test the frontend
frontend_response=$(curl -s -o /dev/null -w "%{http_code}" "${base_url}:3000")
if [ "$frontend_response" == "200" ]; then
    echo "Frontend is working."
else
    echo "Frontend is not working. HTTP Status Code: ${frontend_response}"
fi

# Test the server
backend_response=$(curl -s -o /dev/null -w "%{http_code}" "${base_url}:3002")
if [ "$backend_response" == "200" ]; then
    echo "Server is working."
else
    echo "Server is not working. HTTP Status Code: ${backend_response}"
fi
