import todoModel from "../models/todo.model.js";

const todoController = {
    getAll: async (req, res) => {
        try {
            const results = await todoModel.all();
    
            res.json({
                todos: results,
                total: results.length
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    getOne: async (req, res) => {
        try {
            const results = await todoModel.one(req.params.id);
    
            res.json({
                todos: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    create: async (req, res) => {
        try {
            const results = await todoModel.create(req.body);
    
            res.json({
                todos: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    update: async (req, res) => {
        try {
            const results = await todoModel.update(req.params.id, req.body);
    
            res.json({
                todos: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const results = await todoModel.delete(req.params.id);
    
            res.json({
                todos: results
            })
        } catch (error) {
            console.error(error);
    
            res.status(500).json(error);
        }
    }
};

export default todoController;
