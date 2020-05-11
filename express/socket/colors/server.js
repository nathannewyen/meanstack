const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
const server = app.listen(8000);
const io = require('socket.io')(server);
var color = "";

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");


io.on("connection", function (socket) {
    console.log("Connected!");
    socket.emit("launch", {
        bgc: color
    });
    socket.broadcast.emit("launch", {
        bgc: color
    });

    socket.on("green_push", function () {
        socket.emit("green_bg");
        socket.broadcast.emit("green_bg");
        color = "green"
    });
    socket.on("blue_push", function () {
        socket.emit("blue_bg");
        socket.broadcast.emit("blue_bg");
        color = "blue"
    });
    socket.on("pink_push", function () {
        socket.emit("pink_bg");
        socket.broadcast.emit("pink_bg");
        color = "pink"
    });
});
app.get('/', (req, res) => {
    res.render('index')
})