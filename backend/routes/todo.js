const express = require('express');
const Todo = require('../models/Todo'); 
const router = express.Router();

// Create a new Todo
router.post('/', async (req, res) => {
    const todo = new Todo({
        task: req.body.task,
    });
    await todo.save();
    res.status(201).send(todo);
});

// Get all Todos
router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.send(todos);
});

// Update a Todo
router.put('/:id', async (req, res) => {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(todo);
});

// Delete a Todo
router.delete('/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router; 