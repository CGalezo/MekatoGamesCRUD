const express = require('express');
const {Router, Require, Response } = require('express') ;
const {data} = require('../data.js');
const items = data['items']

app = express.Router();

//Get All Items
app.get('/items',async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({message: 'Success', items})
});

//Create a Items
app.post('/items',async (req, res) => {
    //New Items
    const { name, level, description, image, sellPrice } = req.body
    const id = idGenerator('items');

    if(name == undefined || level == undefined || description == undefined || image == undefined || sellPrice == undefined ) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR CREATE'});
        return;
    }

    items.push({
        id: id,
        level: level,
        description: description,
        image: image,
        sellPrice: sellPrice
    });

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Create Success', id});

});

//Update a items
app.put('/items',async (req, res) => {
    const { name, level, description, image, sellPrice, id } = req.body

    if(name == undefined || level == undefined || description == undefined || image == undefined || sellPrice == undefined || id == undefined ) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR CREATE'});
        return;
    }

    items.forEach(element => {
        if(element.id == id) {
            element.name = name,
            element.level = level,
            element.description = description,
            element.image = image,
            element.sellPrice = sellPrice
        }   
    }); 

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Update Successfull', id});

});

//Delete a Item
app.delete('/items',async (req, res) => {
    const { id } = req.body;

    if(id != undefined ) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    items = arrayRemove(items, id) 

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Delete Successfull', id});
});

module.exports = app;