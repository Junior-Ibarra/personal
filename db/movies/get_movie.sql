SELECT m.id, m.title, m.trailer, m.poster
FROM movies m
WHERE m.id = $1;