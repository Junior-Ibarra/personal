SELECT m.id, m.title, m.trailer, m.poster
FROM movies m
WHERE NOT m.is_watched AND m.user_id = $1;