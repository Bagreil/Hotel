import { connection } from "./database.js";

const hotelModel = {
    all: async () => {
        const [results] = await connection.query("SELECT * FROM hotels");
    
        return results;
    },
    one: async (id) => {
        const [results] = await connection.query(
            "SELECT * FROM hotels WHERE id = ?",
            [id]
        );

        return results;
    },
    create: async (data) => {
        const [results] = await connection.query(
            'INSERT INTO hotels (code, city, address, reference) VALUES (?, ?, ?, ?)',
            [req.code, req.city, req.address, req.reference]
        );

        return results;
    },
    update: async (id, data) => {
        const [results] = await connection.query(
            'UPDATE hotels SET code = ?, city = ?, address = ?, reference = ? WHERE id = ?',
            [req.code, req.city, req.address, req.reference, req.params.id]
        );

        return results;
    },
    delete: async (id) => {
        const [results] = await connection.query(
            "DELETE FROM hotels WHERE id = ?",
            [id]
        );

        return results;
    }
};

export default hotelModel;
