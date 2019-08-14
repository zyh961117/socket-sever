var express = require('express'); 
var app = express();

var server = require('http').createServer(app);
var io = require('socket.io')(server);

rooms = new Array();

app.use('/', express.static(__dirname + '/public')); 

server.listen(3000);

//socket部分
io.on('connection', function(socket) {
    console.log(socket.id + '加入连接');
});