-- =========================
-- Exercise 1 : DVD Rentals (Children’s Movies)
-- =========================

-- 1. Retrieve all films with a rating of G or PG, which are not currently rented.
SELECT DISTINCT f.film_id, f.title, f.rating
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id AND r.return_date IS NULL
WHERE f.rating IN ('G', 'PG')
  AND r.rental_id IS NULL;

-- 2. Create a waiting list table for children’s movies.
CREATE TABLE waiting_list (
  waiting_id SERIAL PRIMARY KEY,
  film_id INT REFERENCES film(film_id),
  child_name VARCHAR(100) NOT NULL
);

-- 3. Retrieve the number of people waiting for each children’s DVD.
SELECT f.title, COUNT(w.waiting_id) AS waiting_count
FROM waiting_list w
JOIN film f ON w.film_id = f.film_id
GROUP BY f.title;

-- Example inserts for testing the waiting list
INSERT INTO waiting_list (film_id, child_name) VALUES
(1, 'Alice'),
(1, 'Bob'),
(2, 'Charlie');

