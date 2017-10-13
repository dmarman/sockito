# Sockito Concept
Sockito is a real-time framework based on Socket.io and Express. The goal is to keep all the logic of the 
messages separated in routes, models, controllers and middleware.

#Installation

Download this repository and

`node app.js`

##App.js

```javascript
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
```

##Controllers
Add your message logic on the controller.

```javascript
class MessageController {

    create(req, res)
    {
        console.log('message created: ');
        console.log(req.input);
        res.emit('news', { hello: 'world' });
    }

    destroy(req, res)
    {
        console.log('message was destroyed');
        console.log(req.input);
    }

}

module.exports = new MessageController();
```

##Client Example

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js"></script>
<script>
    var socket = io.connect('http://localhost');
    socket.on('news', function (data) {
        console.log(data);
    });

    socket.emit('message/create', { data: 'message saved'});
    socket.emit('message/destroy', { data: 'message destroyed'});
    socket.emit('message/update', { data: 'updated payload'});
</script>
```

