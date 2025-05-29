CREATE EXTENSION IF NOT EXISTS "pg_graphql";

CREATE TABLE todo_list (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE list_item (
    id SERIAL PRIMARY KEY,
    todo_list_id INTEGER NOT NULL REFERENCES todo_list(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    description TEXT,
    done BOOLEAN DEFAULT FALSE,
    due_date DATE
);
