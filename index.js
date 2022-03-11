const Server = require('./src/config/server');
const { images_2d } = require('./src/resources/data');
const characters = require('./src/models/characters')
const characterStats = require('./src/models/characterStats')
const images2d = require('./src/models/images2d')
const items = require('./src/models/items')
const missionObjectives = require('./src/models/missionObjectives')
const missions = require('./src/models/missions')
const models3d = require('./src/models/models3d')
const playerCharacter = require('./src/models/playerCharacter')
const players = require('./src/models/players')


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