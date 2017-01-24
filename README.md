# Sockito
Sockito is a real-time framework based on Socket.io and Express. 

##Installation
Download this repository and 

`node app.js`

##Routing
Add your messages in the `routes.js` function.

```
var routes = function(socket){
    
    socket.emit('news', MessageController.hello());
          
    socket.on('my other event', function(data){
        MessageController.whatsThis(data);
    });
 }
```

##Controllers
Add your message logic on the controller.

```
class MessageController {
    
    hello(){
        function getWorld(){
            return 'Mars';
        }
    
        var world = getWorld();
        
        return { hello : world}
    }
    
    whatsThis(data){
        console.log(data);
    }
    
}
```

##Client Example

```
<script src="https://cdn.socket.io/socket.io-1.4.5.js"></script>
<script>
  var socket = io.connect('http://localhost:3000');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
</script>
```

