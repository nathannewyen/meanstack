const express = require("express");
const app = express();
app.use(express.static(__dirname + "/static"));
const server = app.listen(8000);
const io = require("socket.io")(server);
var counter = 0;

const session = require("express-session");

app.use(
    session({
        secret: "keyboardkitteh",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000,
        },
    })
);

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on("connection", function (socket) {
    socket.on("count", function (data) {
        counter++;
        io.emit("send_count", {
            counter: counter
        });
    });
    socket.on("reset_count", function (data) {
        counter = 0;
        io.emit("send_reset_count", {
            reset_counter: counter
        });
    });
});

app.get("/", (req, res) => {
    res.render("index");
});