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
var io = require('socket.io').listen(server);
io.sockets.on('connection', function (socket) {
    console.log("WE ARE USING SOCKETS!");
    console.log(socket.id);
    socket.on("submitted", function (data){
        console.log('Name:' + data.name);
        socket.emit('server_response', {response: "You emitted the following informaton to the server: {name: '"+data.name+"', location: '"+data.location+"', language: '"+data.language+"', comment: '"+data.comment+"'}", lucky_number: Math.floor(Math.random()*1000 + 1)});
    })
})