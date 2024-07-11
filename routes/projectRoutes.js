import express from 'express';
import Project from '../models/project.js';
import auth from '../middleware/auth.js';

const router = express.Router();

// Get all items
router.get('/',auth, async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new item
router.post('/',auth, async (req, res) => {
    const project = new Project({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;