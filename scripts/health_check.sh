#!/bin/bash

containers=("frontend" "server" "mongo")

for container in "${containers[@]}"; do
    status=$(docker inspect -f '{{.State.Health.Status}}' "${container}")
    if [ "$status" == "healthy" ]; then
        echo "Container ${container} is healthy."
    else
        echo "Container ${container} is not healthy."
    fi
done