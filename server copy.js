const app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var i = 0;
var sc = false
var project = {
    "dhb": "120",
    "name": "Projeto 1",
    "ano": 2012
}

io.on('connection', socket => {
    console.log("Usuario conectou");
    if(!sc){
        sc = socket;
        goEmit();
    }
})

function goEmit(){
    setInterval(() => {
        project.ano++;
        sc.broadcast.emit('test event', project);
    }, 2500);
};


server.listen(4010, ()=>{
    console.log("Ouvindo na porta 4010!");
    
})