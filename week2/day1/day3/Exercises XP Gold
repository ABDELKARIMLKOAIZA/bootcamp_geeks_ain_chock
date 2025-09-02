-- =========================
-- Exercise 1 : DVD Rentals
-- =========================

-- 1. Get a list of all rentals which are out (not returned).
SELECT * 
FROM rental
WHERE return_date IS NULL;

-- 2. Get a list of all customers who have not returned their rentals (grouped).
SELECT c.customer_id, c.first_name, c.last_name, COUNT(*) AS outstanding_rentals
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
WHERE r.return_date IS NULL
GROUP BY c.customer_id, c.first_name, c.last_name;

-- 3. Get a list of all the Action films with Joe Swank.
SELECT f.title
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE c.name = 'Action'
  AND a.first_name = 'Joe' AND a.last_name = 'Swank';


-- =========================
-- Exercise 2 : Happy Halloween
-- =========================

-- 1. How many stores there are, and in which city and country they are located.
SELECT s.store_id, ci.city, co.country
FROM store s
JOIN address a ON s.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;

-- 2. How many hours of viewing time there are in total in each store.
SELECT s.store_id, SUM(f.length) / 60 AS total_hours
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
GROUP BY s.store_id;

-- 3. Exclude any inventory items which are not yet returned.
SELECT s.store_id, SUM(f.length) / 60 AS total_hours
FROM store s
JOIN inventory i ON s.store_id = i.store_id
JOIN film f ON i.film_id = f.film_id
JOIN rental r ON i.inventory_id = r.inventory_id
WHERE r.return_date IS NOT NULL
GROUP BY s.store_id;

-- 4. A list of all customers in the cities where the stores are located.
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, ci.city
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN store s ON ci.city_id = (SELECT city_id FROM address WHERE address_id = s.address_id);

-- 5. A list of all customers in the countries where the stores are located.
SELECT DISTINCT c.customer_id, c.first_name, c.last_name, co.country
FROM customer c
JOIN address a ON c.address_id = a.address_id
JOIN city ci ON a.city_id = ci.city_id
JOIN country co ON ci.country_id = co.country_id;

-- 6. Create a “safe list” of all movies not in Horror and not containing scary words.
SELECT f.title, f.length
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name <> 'Horror'
  AND f.title NOT ILIKE '%beast%'
  AND f.title NOT ILIKE '%monster%'
  AND f.title NOT ILIKE '%ghost%'
  AND f.title NOT ILIKE '%dead%'
  AND f.title NOT ILIKE '%zombie%'
  AND f.title NOT ILIKE '%undead%';

-- 7. For both the ‘general’ and the ‘safe’ lists above, also calculate the time in hours and days.
SELECT SUM(length) AS total_minutes,
       SUM(length)/60 AS total_hours,
       SUM(length)/1440 AS total_days
FROM film;

SELECT SUM(f.length) AS total_minutes,
       SUM(f.length)/60 AS total_hours,
       SUM(f.length)/1440 AS total_days
FROM film f
JOIN film_category fc ON f.film_id = fc.film_id
JOIN category c ON fc.category_id = c.category_id
WHERE c.name <> 'Horror'
  AND f.title NOT ILIKE '%beast%'
  AND f.title NOT ILIKE '%monster%'
  AND f.title NOT ILIKE '%ghost%'
  AND f.title NOT ILIKE '%dead%'
  AND f.title NOT ILIKE '%zombie%'
  AND f.title NOT ILIKE '%undead%';

