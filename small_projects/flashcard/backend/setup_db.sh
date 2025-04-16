#!/bin/bash

# Load environment variables from .env
source .env

# Create the database
echo "Creating database: $DB_NAME"
psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -c "CREATE DATABASE $DB_NAME;"

# Create the table and seed data
echo "Setting up schema and inserting initial data..."
psql -U "$DB_USER" -h "$DB_HOST" -p "$DB_PORT" -d "$DB_NAME" <<EOF
CREATE TABLE IF NOT EXISTS words (
  id SERIAL PRIMARY KEY,
  english TEXT NOT NULL,
  russian TEXT NOT NULL
);

INSERT INTO words (english, russian) VALUES 
  ('apple', 'яблоко'),
  ('book', 'книга'),
  ('sun', 'солнце');
EOF

echo "Database setup complete!"
