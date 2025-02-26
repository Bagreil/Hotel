import bookingModel from "../models/booking.model.js";

const bookingController = {
    getAll: async (req, res) => {
        try {
            const results = await bookingModel.all();
    
            res.json({
                booking: results,
                total: results.length
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const results = await bookingModel.one(req.params.id);
    
            res.json({
                booking: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const results = await bookingModel.create(req.body);
    
            res.json({
                booking: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const results = await bookingModel.update(req.params.id, req.body);
    
            res.json({
                booking: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const results = await bookingModel.delete(req.params.id);
    
            res.json({
                booking: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    }
};

export default bookingController;
