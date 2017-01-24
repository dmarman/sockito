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

module.exports = new MessageController();
