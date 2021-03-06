const express = require('express');
const {Router, Require, Response } = require('express') ;
const data = require('../resources/data');
const {idGenerator, arrayRemove} = require('../util/functions');

app = express.Router();
app.use(express.json());

//Get All Users
app.get('/',async (req, res) => {
    const characters = data["characters"];
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({message: 'Success', characters});
});

//Create a User
app.post('/',async (req, res) => {
    //New user

    const characters = data["characters"];
    console.log( req.body);
    const {name, stats, level, title, model } = req.body;
    const id = idGenerator('characters');
    if(name === undefined || stats === undefined || level === undefined || title === undefined || model === undefined) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    data.characters.push({
        id: id,
        name: name,
        stats: stats,
        level: level,
        title: title,
        model: model
    });

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Success', id});

});

//Update a Product
app.put('/',async (req, res) => {
    const {id, name, stats, level, title, model } = req.body

    if(id === undefined || name === undefined || stats === undefined || level === undefined || title === undefined || model === undefined) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    data.characters.forEach(element => {
        if(element.id == id) {
            element.name = name,
            element.stats = stats
            element.level = level
            element.title = title
            element.model = model
        }   
    }); 

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Update Successfull', id});

});

//Delete a User
app.delete('/',async (req, res) => {
    const {id, name, stats, level, title, model } = req.body

    if(id === undefined || name === undefined || stats === undefined || level === undefined || title === undefined || model === undefined) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    data.characters = arrayRemove(data.characters, id) 

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Delete Successfull', id});
});

module.exports = app;