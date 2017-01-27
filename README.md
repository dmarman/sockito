# Sockito Concept
Sockito is a real-time framework based on Socket.io and Express. The goal is to keep all the logic of the 
messages separated in routes, models, controllers and middleware.

##Router Concept
This should be the implementation goal of the routes file.

```javascript
const Route = use('Route')  
    
Route.send('message', 'MessageController.methodOne');
        
Route.receive('message', 'MessageController.methodTwo').middleware('authentication');
    
//Recieve message from a webhook instead of a websocket
Route.webhook('message', 'MessageController.methodThree');

```

##Concept Controller

```javascript
const Message = use('App/Model/Message')
    
class MessageController {
    
    methodOne(){
        
        const message = yield Message.find(1)
        
        return { content : message.content}
    }
    
    methodTwo(data){
            
        const message = new Message;
            
        message = data;
            
        message.save();
            
    }
    
    methodThree(){
    
        Route.send('message', this.methodOne());
    
    }

}
```

#What we have now

##Installation
Download this repository and 

`node app.js`

##Routing
Add your messages in the `routes.js` function.

```javascript
var routes = function(socket){
    
    socket.emit('news', MessageController.hello());
          
    socket.on('my other event', function(data){
        MessageController.whatsThis(data);
    });
 }
```

##Controllers
Add your message logic on the controller.

```javascript
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

