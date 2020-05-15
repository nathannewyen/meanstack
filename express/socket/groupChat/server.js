const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
const server = app.listen(8000);
const io = require('socket.io')(server);
var id = 0;
var messages = {};
var users = {};

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


io.on('connection', function (socket) {
    console.log('Connected')
    socket.on('new_user', function (data) {
        users[socket.id] = {
            name: data.name
        };
        socket.emit('existing_message', messages)
        io.emit('display_new_user', {
            name: data.name
        })
    });

    socket.on("new_message", function (data) {
        messages[id] = {
            name: data.name,
            message: data.message
        };
        io.emit("update_messages", messages[id]);
        id++;
    })
});

app.get('/', (req, res) => {
    res.render('index')
})