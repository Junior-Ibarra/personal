CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    profile_pic VARCHAR(200)
);

CREATE TABLE movies (
    id SERIAL PRIMARY KEY,
    title VARCHAR(45) NOT NULL,
    trailer TEXT,
    poster TEXT,
    date_create TIMESTAMP
);
CREATE TABLE usersMovies (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) NOT NULL,
    movies_id INT REFERENCES movies(id) NOT NULL,
    status VARCHAR(20)
)