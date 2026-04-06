import db from '../db/index.js';
// User class for interacting with user table
class User {
    static async getAll() {
        const rows = db.raw(`
            SELECT id, username, email, joined_at
            FROM user;
            `);
        return rows;
    };

    static async getById(id) {
        const query = `
            SELECT * 
            FROM user
            WHERE id = ?;
            `;
        const rows = db.raw(query, [id]);
        return rows[0];
    };
// Request only what you need i.e. username, email, pass
    static async setUser({full_name, username, email, password_hash}) {
        const query =  `
        INSERT INTO user
        (full_name, username, email, password_hash)
        VALUES (?, ?, ?, ?)
        RETURNING*`;

        const rows = await db.raw(query, [full_name, username, email, password_hash]);
        return rows[0];
    }
};

export default User;