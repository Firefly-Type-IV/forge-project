import db from '../db/index.js';

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
};

export default User;