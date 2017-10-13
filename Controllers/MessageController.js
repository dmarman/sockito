class MessageController {

    create(req, res)
    {
        console.log('message created: ');
        console.log(req.input);
        res.emit('news', { hello: 'world' });
    }
    
    destroy(req)
    {
        console.log('message was destroyed');
        console.log(req.input);
    }
    
}

module.exports = new MessageController();
