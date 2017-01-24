var app = require('express')();
var server = require('http').Server(app);
var Io = require('./io');

const io = new Io(server);

io.start();

server.listen(3000);

