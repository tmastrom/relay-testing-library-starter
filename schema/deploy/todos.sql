-- Deploy todo_app:todos to pg
-- requires: todo_appschema

BEGIN;

SET client_min_messages = 'warning';

CREATE TABLE todo_app.todos (
    id   integer primary key generated always as identity,
    task  TEXT        NOT NULL,
    completed BOOLEAN   NOT NULL DEFAULT FALSE,
    date_created    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    date_updated    TIMESTAMPTZ NOT NULL
);

COMMIT;
