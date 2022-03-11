const express = require('express');
const {Router, Require, Response } = require('express') ;
const data = require('../resources/data');
const {idGenerator, arrayRemove} = require('../util/functions');

app = express.Router();
app.use(express.json());


//Get All Items
app.get('/',async (req, res) => {
    const items = data["items"];
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({message: 'Success', items})
});

//Create a Items
app.post('/',async (req, res) => {
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
app.put('/',async (req, res) => {
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
app.delete('/',async (req, res) => {
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