INSERT INTO user (full_name, username, email, password_hash) VALUES
('alice', 'alice', 'alice@email.com', 'pass'),
('steve', 'steve2', 'steve@email.com', 'pass');

INSERT INTO exercise_type (name) VALUES
('Push-up'),
('Squat'),
('Pull-up'),
('Lunge'),
('Plank');

INSERT INTO workout_template (user_id, title, description, created_at) VALUES
(1, 'Overheat', 'A high-intensity workout to get your heart pumping.', '2024-01-10 08:00:00'),
(1, 'Strength Builder', 'Focus on building muscle strength with these exercises.', '2024-02-15 09:30:00');

INSERT INTO category (name) VALUES
('Strength'),
('Cardio'),
('Flexibility'),
('Resistance'),
('Endurance');

INSERT INTO workout_template_category (workout_id, category_id) VALUES
(1, 2),
(1, 5),
(2, 1),
(2, 4);

INSERT INTO workout_exercise (exercise_type_id, workout_id, target_reps, target_sets) VALUES
(1, 1, '10', '3'),
(2, 1, '15', '3'),
(3, 1, '10', '3'),
(1, 2, '6 - 8', '4'),
(5, 2, 'Hold for 60 seconds', '2');

INSERT INTO rating (workout_id, user_id, score, review_text, created_at) VALUES
(1, 1, 5, 'Amazing workout! Really pushed my limits.', '2024-03-01 10:00:00'),
(1, 2, 4, 'Great intensity, but a bit too challenging for beginners.', '2024-03-02 11:15:00'),
(2, 1, 4, 'Good strength training routine.', '2024-03-03 12:30:00');