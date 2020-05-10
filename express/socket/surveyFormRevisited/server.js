const express = require('express');
const app = express();
app.use(express.static(__dirname + "/static"));
const server = app.listen(8000);
const io = require('socket.io')(server);
var counter = 0;

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on('connection', (socket) => {
  socket.on("posting_form", (data) => {
    var num = Math.floor(Math.random() * 1000);
    var object = JSON.stringify(data);
    socket.emit('updated_message', {
      info: `You emitted the following information to the server: ${object}.`
    });
    socket.emit('random_number', {
      message: `Your lucky emitted number by the server is: ${num}!`
    });
  });
});

// Get 
app.get("/", function (req, res) {
  res.render("survey.ejs");
})