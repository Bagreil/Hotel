import { connection } from "../database.js";

const collaboratorsModel = {
    all: async () => {
        const [results] = await connection.query("SELECT * FROM collaborators");
    
        return results;
    },
    one: async (id) => {
        const [results] = await connection.query(
            "SELECT * FROM collaborators WHERE id = ?",
            [id]
        );

        return results;
    },
    create: async (data) => {
        const [results] = await connection.query(
            'INSERT INTO collaborators (code, city, address, reference) VALUES (?, ?, ?, ?)',
            [req.code, req.city, req.address, req.reference]
        );

        return results;
    },
    update: async (id, data) => {
        const [results] = await connection.query(
            'UPDATE collaborators SET code = ?, city = ?, address = ?, reference = ? WHERE id = ?',
            [req.code, req.city, req.address, req.reference, req.params.id]
        );

        return results;
    },
    delete: async (id) => {
        const [results] = await connection.query(
            "DELETE FROM collaborators WHERE id = ?",
            [id]
        );

        return results;
    }
};

export default collaboratorsModel;
