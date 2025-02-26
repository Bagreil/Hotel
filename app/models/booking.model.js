import { connection } from "../database.js";

const bookingModel = {
    all: async () => {
        const [results] = await connection.query("SELECT * FROM booking");
    
        return results;
    },
    one: async (id) => {
        const [results] = await connection.query(
            "SELECT * FROM booking WHERE id = ?",
            [id]
        );

        return results;
    },
    create: async (data) => {
        const [results] = await connection.query(
            'INSERT INTO booking (lastname, firstname, room_id, email, phone, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [req.lastname, req.firstname, req.room_id, req.email, req.phone, req.start_date, req.end_date]
        );

        return results;
    },
    update: async (id, data) => {
        const [results] = await connection.query(
            'UPDATE booking SET lastname = ?, firstname = ?, room_id = ?, email = ?, phone = ?, start_date = ?, end_date = ? WHERE id = ?',
            [req.lastname, req.firstname, req.room_id, req.email, req.phone, req.start_date, req.end_date, req.params.id]
        );

        return results;
    },
    delete: async (id) => {
        const [results] = await connection.query(
            "DELETE FROM booking WHERE id = ?",
            [id]
        );

        return results;
    }
};

export default bookingModel;
