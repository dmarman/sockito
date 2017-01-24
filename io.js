class Io {
    constructor(server){
        this.io = require('socket.io')(server);
    }
    
    start(){
        this.io.on('connection', function(socket){
            var routes = require('./routes.js')(socket);
        });
    }
}

module.exports = Io;