var app = require('express')();
var server = require('http').Server(app);
server.listen(80);

var io = require('socket.io')(server);
var Router = require('./router.js');

var router = new Router(io);
var MessageController = require('./Controllers/MessageController');

app.get('/', function (req, res) {
    res.sendfile(__dirname + '/index.html');
});

router.on('message/create', MessageController.create);
router.on('message/destroy', MessageController.destroy);
router.on('message/update', () => {
    console.log('cannot update message');
});
