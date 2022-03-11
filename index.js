const Server = require('./config/server');
const { images_2d } = require('./data');
const characters = require('./models/characters')

const server = new Server();

//Server Routes
server.app.use('/characters', characters);
server.app.use('/characterStats', characterStats);
server.app.use('/images2d', images_2d);
server.app.use('/item', item);
server.app.use('/missionObjectives', missionObjectives);
server.app.use('/missions', missions);
server.app.use('/models3d', models3d);
server.app.use('/playerCharacter', playerCharacter);
server.app.use('/player', player);


//Server Start
server.start(() => {
    let port = 3000;
    console.log(`Running on ${port}`);
});