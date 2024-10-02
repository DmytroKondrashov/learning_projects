#!/bin/bash

# Database configuration
DB_NAME="nest_postgraphile"
DB_USER="your_username"
DB_PASSWORD="your_password"

# Check if psql is available
if ! command -v psql &> /dev/null; then
    echo "Error: psql could not be found. Please ensure PostgreSQL is installed and in your PATH."
    exit 1
fi

# Create the database
echo "Creating database: $DB_NAME"
createdb -U "$DB_USER" "$DB_NAME"

if [ $? -eq 0 ]; then
    echo "Database $DB_NAME created successfully."
else
    echo "Error: Failed to create database $DB_NAME."
    exit 1
fi

echo "Script completed."