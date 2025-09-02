-- Exercice 1 : DVD Rental

-- 1. Get a list of all the languages, from the language table.
SELECT * FROM language;

-- 2. Get a list of all films joined with their languages – film title, description, and language name.
SELECT f.title, f.description, l.name
FROM film f
JOIN language l ON f.language_id = l.language_id;

-- 3. Get all languages, even if there are no films in those languages – film title, description, and language name.
SELECT f.title, f.description, l.name
FROM language l
LEFT JOIN film f ON f.language_id = l.language_id;

-- 4. Create a new table called new_film with columns : id, name. Add some new films.
CREATE TABLE new_film (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

INSERT INTO new_film (name) VALUES 
('Inception'),
('The Matrix');

-- 5. Create a new table called customer_review with the given columns and DELETE CASCADE.
CREATE TABLE customer_review (
  review_id SERIAL PRIMARY KEY,
  film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
  language_id INT REFERENCES language(language_id),
  title VARCHAR(100),
  score INT CHECK (score BETWEEN 1 AND 10),
  review_text TEXT,
  last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Add 2 movie reviews linked with valid objects.
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES 
(1, 1, 'Excellent film', 9, 'Amazing story and visuals'),
(2, 2, 'Très bon film', 8, 'Un classique de science-fiction');

-- 7. Delete a film that has a review from the new_film table. 
-- Thanks to ON DELETE CASCADE, all reviews linked to that film will be automatically deleted.
DELETE FROM new_film WHERE id = 1;

