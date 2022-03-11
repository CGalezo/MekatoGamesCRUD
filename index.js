const Server = require('./config/server');
const characters = require('./models/characters')

const server = new Server();

//Server Routes
server.app.use('/characters', characters);


//Server Start
server.start(() => {
    let port = 3000;
    console.log(`Running on ${port}`);
});