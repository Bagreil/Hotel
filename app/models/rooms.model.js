import { connection } from "../database.js";

const roomsModel = {
    all: async () => {
        const [results] = await connection.query("SELECT * FROM hotel.rooms");
    
        return results;
    },
    one: async (id) => {
        const [results] = await connection.query(
            "SELECT * FROM rooms WHERE id = ?",
            [id]
        );

        return results;
    },
    create: async (data) => {
        const [results] = await connection.query(
            'INSERT INTO rooms (hotel_id, number, room_type_id, floor) VALUES (?, ?, ?, ?)',
            [req.hotel_id, req.number, req.room_type_id, req.floor]
        );

        return results;
    },
    update: async (id, data) => {
        const [results] = await connection.query(
            'UPDATE rooms SET hotel_id = ?, number = ?, room_type_id = ?, floor = ? WHERE id = ?',
            [req.hotel_id, req.number, req.room_type_id, req.floor, req.params.id]
        );

        return results;
    },
    delete: async (id) => {
        const [results] = await connection.query(
            "DELETE FROM rooms WHERE id = ?",
            [id]
        );

        return results;
    }
};

export default roomsModel;
