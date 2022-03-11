const express = require('express');

class Server {
    constructor() {
        this.port = 3000;
        this.app = express();
    }
    start(callback) {
        this.app.listen(3000, callback);
    }
}
module.exports = Server;