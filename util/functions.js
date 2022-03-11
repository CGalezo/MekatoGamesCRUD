const data = require('../resources/data.js');

function idGenerator(model){

    if(data[model].length < 9) {
        return '0000'+ (data[model].length  + 1);
    }else if(data[model].length  < 99) {
        return '000'+ (data.users.length + 1);
    }else if(data[model].length  < 999) {
        return '00'+ (data[model].length  + 1);
    }else if(data[model].length  < 9999) {
        return '0'+ (data[model].length  + 1);
    }else if(data[model].length  < 99999) {
        return (data[model].length + 1);
    }
}

function arrayRemove(arr, value) { 
    
    return arr.filter(function(ele){ 
        return ele != value; 
    });

}

module.exports = {arrayRemove, idGenerator};