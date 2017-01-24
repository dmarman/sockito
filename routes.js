var MessageController = require('./Controllers/MessageController');

var routes = function(socket){

    socket.emit('news', MessageController.hello());
    
    socket.emit('news', MessageController.goodbye());
    
    socket.on('my other event', function(data){
            MessageController.response(data);
        });
    
}

module.exports = routes;