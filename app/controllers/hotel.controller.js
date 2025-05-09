import hotelModel from "../models/hotel.model.js";

const hotelController = {
    getAll: async (req, res) => {
        try {
            const results = await hotelModel.all();
    
            res.json({
                hotels: results,
                total: results.length
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const results = await hotelModel.one(req.params.id);
    
            res.json({
                hotels: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const results = await hotelModel.create(req.body);
    
            res.json({
                hotels: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const results = await hotelModel.update(req.params.id, req.body);
    
            res.json({
                hotels: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const results = await hotelModel.delete(req.params.id);
    
            res.json({
                hotels: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    }
};

export default hotelController;
