-- =========================
-- Part I : Customer & Profile (One to One)
-- =========================

-- 1. Create the tables
CREATE TABLE Customer (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(50),
  last_name VARCHAR(50) NOT NULL
);

CREATE TABLE Customer_profile (
  id SERIAL PRIMARY KEY,
  isLoggedIn BOOLEAN DEFAULT FALSE,
  customer_id INT UNIQUE REFERENCES Customer(id)
);

-- 2. Insert customers
INSERT INTO Customer (first_name, last_name) VALUES
('John', 'Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');

-- 3. Insert profiles with subqueries
INSERT INTO Customer_profile (isLoggedIn, customer_id)
VALUES (TRUE, (SELECT id FROM Customer WHERE first_name = 'John'));

INSERT INTO Customer_profile (isLoggedIn, customer_id)
VALUES (FALSE, (SELECT id FROM Customer WHERE first_name = 'Jerome'));

-- 4. Queries
-- 4.1 First name of LoggedIn customers
SELECT c.first_name
FROM Customer c
JOIN Customer_profile cp ON c.id = cp.customer_id
WHERE cp.isLoggedIn = TRUE;

-- 4.2 All customers with their isLoggedIn status (even those without profile)
SELECT c.first_name, c.last_name, cp.isLoggedIn
FROM Customer c
LEFT JOIN Customer_profile cp ON c.id = cp.customer_id;

-- 4.3 Number of customers that are not LoggedIn
SELECT COUNT(*) AS not_logged_in
FROM Customer_profile
WHERE isLoggedIn = FALSE;


-- =========================
-- Part II : Library (Many to Many)
-- =========================

-- 1. Create Book table
CREATE TABLE Book (
  book_id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL
);

-- 2. Insert books
INSERT INTO Book (title, author) VALUES
('Alice In Wonderland', 'Lewis Carroll'),
('Harry Potter', 'J.K Rowling'),
('To Kill a Mockingbird', 'Harper Lee');

-- 3. Create Student table
CREATE TABLE Student (
  student_id SERIAL PRIMARY KEY,
  name VARCHAR(50) NOT NULL UNIQUE,
  age INT CHECK (age <= 15)
);

-- 4. Insert students
INSERT INTO Student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);

-- 5. Create Library (junction table)
CREATE TABLE Library (
  book_fk_id INT REFERENCES Book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
  student_fk_id INT REFERENCES Student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
  borrowed_date DATE,
  PRIMARY KEY (book_fk_id, student_fk_id)
);

-- 6. Insert borrow records (using subqueries)
INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
 (SELECT student_id FROM Student WHERE name = 'John'),
 '2022-02-15');

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
((SELECT book_id FROM Book WHERE title = 'To Kill a Mockingbird'),
 (SELECT student_id FROM Student WHERE name = 'Bob'),
 '2021-03-03');

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
((SELECT book_id FROM Book WHERE title = 'Alice In Wonderland'),
 (SELECT student_id FROM Student WHERE name = 'Lera'),
 '2021-05-23');

INSERT INTO Library (book_fk_id, student_fk_id, borrowed_date) VALUES
((SELECT book_id FROM Book WHERE title = 'Harry Potter'),
 (SELECT student_id FROM Student WHERE name = 'Bob'),
 '2021-08-12');

-- 7. Queries
-- 7.1 Select all columns from junction table
SELECT * FROM Library;

-- 7.2 Select the name of the student and the title of borrowed books
SELECT s.name, b.title
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id;

-- 7.3 Average age of children who borrowed "Alice In Wonderland"
SELECT AVG(s.age) AS avg_age
FROM Library l
JOIN Student s ON l.student_fk_id = s.student_id
JOIN Book b ON l.book_fk_id = b.book_id
WHERE b.title = 'Alice In Wonderland';

-- 7.4 Delete a student and check cascade in junction table
DELETE FROM Student WHERE name = 'John';

