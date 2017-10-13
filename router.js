class Router
{
    constructor(io){
        this.routes = [];
        
        io.on(('connection'), (socket) => {
            this.attachRoutes(socket);
        });
    }

    attachRoutes(socket){
        this.routes.forEach((item) => {
            socket.on(item.name, (input) => {
                item.method({input, socket}, socket);
            });
        });
    };

    on(name, method){
        this.routes.push({name, method});
    };

}

module.exports = Router;