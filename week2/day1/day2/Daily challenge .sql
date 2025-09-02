-- Q1: SELECT COUNT(*)
--     FROM FirstTab AS ft 
--     WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );
-- Réponse: 3

-- Q2: SELECT COUNT(*)
--     FROM FirstTab AS ft 
--     WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
-- Réponse: 1

-- Q3: SELECT COUNT(*)
--     FROM FirstTab AS ft 
--     WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
-- Réponse: 0

-- Q4: SELECT COUNT(*)
--     FROM FirstTab AS ft 
--     WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
-- Réponse: 1
