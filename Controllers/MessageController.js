class MessageController {
    
    hello(){
        return { hello: 'world' };
    }

    goodbye(){
        function getWorld(){
            return 'Mars';
        }
        var world = getWorld();
        return { goodbye : world}
    }
    
    response(data){
        console.log(data);
    }
    
}

module.exports = new MessageController();
