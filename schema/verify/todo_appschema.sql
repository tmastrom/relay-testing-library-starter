-- Verify todo_app:todo_appschema on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('todo_app', 'usage');

ROLLBACK;
