BEGIN TRANSACTION;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name VARCHAR(100),
    email text UNIQUE NOT NULL,
    entries BIGINT DEFAULT 0,
    age INT NULL,
    pet VARCHAR(100) NULL,
    joined TIMESTAMP NOT NULL
);

COMMIT;