DROP DATABASE IF EXISTS apartments_dev;
CREATE DATABASE apartments_dev;

\c apartments_dev;

CREATE TABLE apartments (
    id SERIAL PRIMARY KEY,
    typeOfPlace TEXT NOT NULL,
    price NUMERIC,
    location TEXT,
    phoneNumber NUMERIC,
    amenities TEXT,
    children_Allow BOOLEAN,
    pets_Allow BOOLEAN
);
