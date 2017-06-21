var socket =io();

socket.on('connect',function(){
    console.log('Connected to server');
    
    socket.emit('createMessage',{
        from:"Usay",
        text:"sending new Message from client"
    });
});

socket.on('disconnect',function(){
    console.log('DisConnected to server');
});


socket.on('newMessage',function(message){
    console.log('New Message from server',message);
});