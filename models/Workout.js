import db from '../db/index.js';

class Workout {
    static async getAll() {
        const query = `
            SELECT
                wt.id,
                wt.title,
                wt.description,
                u.username AS author_username,
                GROUP_CONCAT(DISTINCT et.name) AS exercises,
                GROUP_CONCAT(DISTINCT c.name) AS categories,
                r.score,
                r.review_text,
                ru.username AS reviewer_username
            FROM workout_template AS wt
            INNER JOIN user AS u ON wt.user_id = u.id
            INNER JOIN workout_exercise AS we ON wt.id = we.workout_id
            INNER JOIN exercise_type AS et ON we.exercise_type_id = et.id
            INNER JOIN workout_category AS wc ON wt.id = wc.workout_id
            INNER JOIN category AS c ON wc.category_id = c.id
            LEFT JOIN rating AS r ON wt.id = r.workout_id
            LEFT JOIN user AS ru ON r.user_id = ru.id
            GROUP BY wt.id
            ORDER BY wt.created_at DESC;
        `;
        const rows = await db.raw(query);
        return rows;
        
    };

    static async simpleGetAll() {
        const query = `
            SELECT
                wt.id,
                wt.title,
                wt.description,
                u.username AS author_username
            FROM workout_template AS wt
            INNER JOIN user AS u ON wt.user_id = u.id
            ORDER BY wt.created_at DESC;
        `
        const rows = await db.raw(query);
        return rows;

    };

    static async getById(id) {
        const query = `
            SELECT * FROM workouts
            WHERE id = ?
        `
        const rows = await db.raw(query, [id]);
        return rows[0]
    }
}

export default Workout;