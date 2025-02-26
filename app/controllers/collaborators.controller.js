import collaboratorsModel from "../models/collaborators.model.js";

const collaboratorsController = {
    getAll: async (req, res) => {
        try {
            const results = await collaboratorsModel.all();
    
            res.json({
                collaborators: results,
                total: results.length
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const results = await collaboratorsModel.one(req.params.id);
    
            res.json({
                collaborators: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const results = await collaboratorsModel.create(req.body);
    
            res.json({
                collaborators: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const results = await collaboratorsModel.update(req.params.id, req.body);
    
            res.json({
                collaborators: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const results = await collaboratorsModel.delete(req.params.id);
    
            res.json({
                collaborators: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    }
};

export default collaboratorsController;
