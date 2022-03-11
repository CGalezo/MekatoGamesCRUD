
//Get All Models3d
app.get('/',async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({message: 'Success', data})

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
    const {address} = req.body;

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

//Delete a Models3d
app.delete('/',async (req, res) => {
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