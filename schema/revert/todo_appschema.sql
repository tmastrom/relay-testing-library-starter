-- Revert todo_app:todo_appschema from pg

BEGIN;

DROP SCHEMA todo_app;

COMMIT;
