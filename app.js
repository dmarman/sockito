var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var Router = require('./router.js');
router = new Router(io);

var MessageController = require('./Controllers/MessageController');


server.listen(80);

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

router.on('message/create', MessageController.create);
router.on('message/destroy', MessageController.destroy);
router.on('message/update', () => {
    console.log('cannot update message');
});
