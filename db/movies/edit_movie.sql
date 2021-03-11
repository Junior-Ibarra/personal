UPDATE movies
SET 
    title = $1,
    trailer = $2,
    poster = $3
WHERE id = $4;

SELECT m.title, m.trailer, m.poster
FROM movies m
WHERE m.id = $4;