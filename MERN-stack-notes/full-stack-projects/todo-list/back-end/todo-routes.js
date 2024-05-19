// ----------------------------------------------------------------------------------------------
// 🔖 :  means that should not be missed.  
// ----------------------------------------------------------------------------------------------
// 🔖 imports 
const express = require('express');
const mongoose = require('mongoose');

// ----------------------------------------------------------------------------------------------
//           YOUR MONGOOSE SCHEMA AND MODEL CODE
// ----------------------------------------------------------------------------------------------

// 🔖 Schema code
const todoSchema = new mongoose.Schema({
    content: { type: String, required: true },
    userId: { type: String, require: true }
});
// 🔖 create model out of Schema above.

const TodoModel = mongoose.model("todo", todoSchema);

// ----------------------------------------------------------------------------------------------
//           YOUR ROUTER CODE
// ----------------------------------------------------------------------------------------------
// 🔖 create your router as shown below.
// 🔖 your router goes here 👇
const todoRouter = express.Router();

// 🪵 below code is to get all todo list of particular userId
todoRouter.get('/:id', async (req, res) => {
    const condition = { userId: req.params.id };
    const result = await TodoModel.find(condition);
    res.json({
        status: true,
        msg: 'items',
        data: result
    });
});

// 🪵 add item
todoRouter.post('/', async (req, res) => {
    const payload = req.body;
    const newObj = { content: payload.content, userId: payload.userId };
    const result = await TodoModel.create(newObj);
    res.json({
        status: true,
        msg: 'created',
        data: result
    });
});

// 🪵 edit item
todoRouter.put('/', async (req, res) => {
    const payload = req.body;
    const condition = { _id: payload._id };
    const newObj = { content: payload.content };
    const result = await TodoModel.updateOne(condition, newObj);
    res.json({
        status: true,
        msg: 'updated',
        data: result
    });
});

// 🪵 edit item
todoRouter.delete('/', async (req, res) => {
    const payload = req.body;
    const condition = { _id: payload._id };
    const result = await TodoModel.deleteOne(condition);
    res.json({
        status: true,
        msg: 'deleted',
        data: result
    });
});

// 🔖 in like-route.js always export todoRouter alone.
module.exports = todoRouter;