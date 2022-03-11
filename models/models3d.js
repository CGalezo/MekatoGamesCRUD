const express = require('express');
const {Router, Require, Response } = require('express') ;
const data = require('../data.js');

app = express.Router();
const models3d = data["models_3d"];

//Get All Models3d
app.get('/',async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({message: 'Success', models3d})

});

//Create a Models3d
app.post('/',async (req, res) => {
    //New Models3d
    const { address} = req.body

    if(address == undefined) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    data.models_3d.push({
        address: address
    });

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Success'});

});

//Update a Models3d
app.put('/',async (req, res) => {
    const {id, address} = req.body;

    if(id == undefined || address == undefined ) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    data.models_3d.forEach(element => {
        if(element.id == id) {
            element.address = address
            res.setHeader("Content-Type", "application/json");
            res.status(201).json({message: 'Update Successfull', id});
            return;
        }   
    }); 

    res.setHeader("Content-Type", "application/json");
    res.status(404).json({message: 'id not founded: ', id});
    

});

//Delete a Models3d
app.delete('/',async (req, res) => {
    const { id } = req.body;

    if(id == undefined) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }
    if (models3d.findIndex(id))
    data.users = arrayRemove(data.users, id) 

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Delete Successfull', id});
});

module.exports = app;