const Server = require('./config/server');
const { images_2d } = require('./resources/data');
const characters = require('./models/characters')
const characterStats = require('./models/characterStats')
const images2d = require('./models/images2d')
const items = require('./models/items')
const missionObjectives = require('./models/missionObjectives')
const missions = require('./models/missions')
const models3d = require('./models/models3d')
const playerCharacter = require('./models/playerCharacter')
const players = require('./models/players')


const server = new Server();

//Server Routes
server.app.use('/characters', characters);
//server.app.use('/characterStats', characterStats);
//server.app.use('/images2d', images_2d);
server.app.use('/items', items);
//server.app.use('/missionObjectives', missionObjectives);
//server.app.use('/missions', missions);
server.app.use('/models3d', models3d);
server.app.use('/playerCharacter', playerCharacter);
server.app.use('/players', players);


//Server Start
server.start(() => {
    let port = 3000;
    console.log(`Running on ${port}`);
});