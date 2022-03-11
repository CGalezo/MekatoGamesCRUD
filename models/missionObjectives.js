//Get All Users
app.get('/usuarios',async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({message: 'Success', dataU})

});

//Create a User
app.post('/usuarios',async (req, res) => {
    //New user
    const { name, username } = req.body
    const id = idGenerator();

    if(name != undefined && price != undefined) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    dataU.users.push({
        id: id,
        username: username,
        name: name
    });

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Success', id});

});

//Update a Product
app.put('/productos',async (req, res) => {
    const { name, price, id } = req.body;

    if(id != undefined && name != undefined && price != undefined) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    dataU.users.forEach(element => {
        if(element.id == id) {
            element.name = name,
            element.price = price
        }   
    }); 

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Update Successfull', id});

});

//Delete a User
app.delete('/usuarios',async (req, res) => {
    const { id } = req.body;

    if(id != undefined ) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    dataU.users = arrayRemove(dataU.users, id) 

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Delete Successfull', id});
});

