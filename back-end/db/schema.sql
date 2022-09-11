DROP DATABASE IF EXISTS apartments_dev;
CREATE DATABASE apartments_dev;

\c apartments_dev;

CREATE TABLE apartments (
    id SERIAL PRIMARY KEY,
    typeof_place TEXT NOT NULL,
    image TEXT,
    price NUMERIC,
    location TEXT NOT NULL,
    phone_number NUMERIC,
    amenities TEXT,
    children_allow BOOLEAN,
    pets_allow BOOLEAN
);

DROP TABLE IF EXISTS appointments;

CREATE TABLE appointments (
    id SERIAL PRIMARY KEY,
    full_name TEXT,
    phone_number NUMERIC,
    email TEXT,
    appointment_date TEXT,
    appointment_time TEXT,
    apartment_id INTEGER REFERENCES apartments (id)
    ON DELETE CASCADE
);



