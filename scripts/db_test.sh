#!/bin/bash

# Run a sample MongoDB command (e.g., check if the 'test' database exists)
db_exists=$(docker exec mongo mongo --quiet --eval "db.getSiblingDB('test').getCollectionNames().length")
if [ "$db_exists" -gt 0 ]; then
    echo "Database is working."
else
    echo "Database is not working."
fi
