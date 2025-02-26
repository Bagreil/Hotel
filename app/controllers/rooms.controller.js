import roomsModel from "../models/rooms.model.js";

const roomsController = {
    getAll: async (req, res) => {
        try {
            const results = await roomsModel.all();
    
            res.json({
                rooms: results,
                total: results.length
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const results = await roomsModel.one(req.params.id);
    
            res.json({
                rooms: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const results = await roomsModel.create(req.body);
    
            res.json({
                rooms: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const results = await roomsModel.update(req.params.id, req.body);
    
            res.json({
                rooms: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const results = await roomsModel.delete(req.params.id);
    
            res.json({
                rooms: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    }
};

export default roomsController;
