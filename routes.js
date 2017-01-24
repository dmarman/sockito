var MessageController = require('./Controllers/MessageController');

var routes = function(socket){

    socket.emit('news', MessageController.hello());

    socket.on('my other event', function(data){
            MessageController.whatsThis(data);
        });
    
}

module.exports = routes;