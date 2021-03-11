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
    date_created TIMESTAMP,
    user_id INT REFERENCES users(id) NOT NULL,
    is_watched BOOLEAN DEFAULT TRUE,
    rating INT
);
-- CREATE TABLE usersMovies (
--     id SERIAL PRIMARY KEY,
--     movies_id INT REFERENCES movies(id) NOT NULL,
    
-- )
-- -- add watched vs watchlist...reference user id