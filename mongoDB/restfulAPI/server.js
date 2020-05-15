const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");
const session = require('express-session')
const bcrypt = require('bcrypt')


const app = express();

mongoose.connect("mongodb://localhost/log_reg", {
  useNewUrlParser: true,
});
app.use(session({
  secret: 'I love coding and gaming',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 50000
  }
}))


// Setting
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);



require('./server/config/route.js')(app)

// Localhost 
app.listen(8000, () => {
  console.log("Started server on port 8000");
});