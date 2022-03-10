const express = require('express');
const app = express();

app.use(express.json())

let dataU = {
    users: [
        {
            id: '00001',
            username: 'vmendoza',
            name: 'Victor Manuel'
        },
        {
            id: '00002',
            username: 'avilezf',
            name: 'Luis Fernando'
        },
        {
            id: '00003',
            username: 'escalerad',
            name: 'Diego Alberto'
        }
    ]
}

let dataP = {
    products: [
        {
            id: '00001',
            price: '10',
            name: "bo'o o wa'er"
        },
        {
            id: '00002',
            price: '15',
            name: "Jaime's"
        },
        {
            id: '00003',
            price: '20',
            name: "MaxOS"
        }
    ]
}

let dataC = {
    shopping: [
        {
            id: '00001',
            idUser: '00001',
            idProduct: "00001"
        },
        { 
            id: '00002',
            idUser: '00001',
            idProduct: "00002"
        },
        {
            id: '00003',
            idUser: '00001',
            idProduct: "00003"
        }
    ]
}


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



//Get All Products
app.get('/productos',async (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).json({message: 'Success', dataP})

});

//Create a Products
app.post('/productos',async (req, res) => {
    //New Product
    const { name, price } = req.body
    const id = idGenerator();

    if(name != undefined && price != undefined ) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    dataP.products.push({
        id: id,
        price: price,
        name: name
    });

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Success', id})

});

//Update a Product
app.put('/productos',async (req, res) => {
    const { name, price, id } = req.body;

    if(id != undefined && name != undefined && price != undefined) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    dataP.products.forEach(element => {
        if(element.id == id) {
            element.name = name,
            element.price = price
        }   
    }); 

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Update Successfull', id})

});

//Delete a Product
app.delete('/productos',async (req, res) => {
    const { id } = req.body;
    if(id != undefined ) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    dataP.products = arrayRemove(dataP.products, id) 

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Update Successfull', id})

});

//Get All Cart
app.get('/compras',async (req, res) => {

    res.setHeader("Content-Type", "application/json");
    res.status(200).json({message: 'Success', dataC})

});


//Create a Cart
app.post('/compras',async (req, res) => {
    //New Cart
    const { idUser, idProduct } = req.body
    const id = idGenerator();

    if(idUser != undefined && idProduct != undefined ) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }
        
    dataC.shopping.push({
        id: id,
        idUser: idUser,
        idProduct: idProduct
    });

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Success', id})

});

//Delete a Cart
app.delete('/compras',async (req, res) => {

    const { id } = req.body;
    if(id != undefined ) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).json({message: 'ERROR'});
        return;
    }

    dataP.products = arrayRemove(dataC.shopping, id) 

    res.setHeader("Content-Type", "application/json");
    res.status(201).json({message: 'Delete Successfull', id});
});



function idGenerator(){

    if(dataU.users.length < 9) {
        return '0000'+ (data.users.length + 1);
    }else if(dataU.users.length < 99) {
        return '000'+ (data.users.length + 1);
    }else if(dataU.users.length < 999) {
        return '00'+ (dataU.users.length + 1);
    }else if(dataU.users.length < 9999) {
        return '0'+ (dataU.users.length + 1);
    }else if(dataU.users.length < 99999) {
        return (dataU.users.length + 1);
    }

    if(dataP.products.length < 9) {
        return '0000'+ (dataP.products.length + 1);
    }else if(dataP.products.length < 99) {
        return '000'+ (dataP.products.length + 1);
    }else if(dataP.products.length < 999) {
        return '00'+ (dataP.products.length + 1);
    }else if(dataP.products.length < 9999) {
        return '0'+ (dataP.products.length + 1);
    }else if(dataP.products.length < 99999) {
        return (dataP.products.length + 1);
    }

    if(dataC.shopping.length < 9) {
        return '0000'+ (dataC.shopping.length + 1);
    }else if(dataC.shopping.length < 99) {
        return '000'+ (dataC.shopping.length + 1);
    }else if(dataC.shopping.length < 999) {
        return '00'+ (dataC.shopping.length + 1);
    }else if(dataC.shopping.length < 9999) {
        return '0'+ (dataC.shopping.length + 1);
    }else if(dataC.shopping.length < 99999) {
        return (dataC.shopping.length + 1);
    }
}

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

app.listen(9000);