var express = require("express");
var path = require("path");
var app = express();
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
 res.render("index");
})
var server = app.listen(8000, function() {
 console.log("listening on port 8000");
})
var count = 0;
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("WE ARE USING SOCKETS!");
    socket.emit('initialize', {count: count});
    console.log(socket.id);
    socket.on("button_clicked", function (data){
        count++;
        console.log('Someone clicked a button!  Count: ' + count);
        socket.emit('server_response', {count: count});
        socket.broadcast.emit('server_response', {count: count});
    })
    socket.on("reset", function (data){
        count = 0;
        console.log('Someone reset the count!  Count: ' + count);
        socket.emit('server_response', {count: count});
        socket.broadcast.emit('server_response', {count: count});
    })
})