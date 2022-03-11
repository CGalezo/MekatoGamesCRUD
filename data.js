const data = {
    message: "THE data",
    characters: [
        {
            name: 'Camilo',
            stats: 'Programming',
            level: 70,
            title: 'Mago de Programacion',
            model: '0001'
        }
    ],
    missions: [],
    models_3d: [],
    players: [],
    missions_objectives: [],
    images_2d: [],
    player_characters: [],
    character_stats: [],
    items: [
        {
            id: '00001',
            name: 'Spike',
            level: 5000,
            description: 'Big Bomb: Bom!',
            image: 'www.imageSpike.com',
            sellPrice: 100000
        },
        {
            id: '00002',
            name: 'Sword',
            level: 5,
            description: 'JuasJuas!',
            image: 'www.imageSword.com',
            sellPrice: 1
        },
        {
            id: '00003',
            name: 'Gun',
            level: 50,
            description: 'PAPAPAPA!',
            image: 'www.imageGun.com',
            sellPrice: 100
        },
        {
            id: '00004',
            name: 'Chancleta',
            level: 999999999,
            description: 'JuaPas!!',
            image: 'www.image.com',
            sellPrice: 999999999
        },
    ]
}

function idGenerator(model){

    if(data[model].length < 9) {
        return '0000'+ (data[model].length + 1);
    }else if(data[model].length < 99) {
        return '000'+ (data[model].length + 1);
    }else if(data[model].length < 999) {
        return '00'+ (data[model].length + 1);
    }else if(data[model].length < 9999) {
        return '0'+ (data[model].length + 1);
    }else if(data[model].length < 99999) {
        return (data[model].length + 1);
    }
}

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}

module.exports = {data, arrayRemove, idGenerator}