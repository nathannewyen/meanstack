const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");

const app = express();

mongoose.connect("mongodb://localhost/log_reg", {
  useNewUrlParser: true,
});

// Create an object that contains methods for mongoose to interface with MongoDB

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

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard");
})

app.get("/user", (req, res) => {
  res.render("user");
})

app.listen(8000, () => {
  console.log("Started server on port 8000");
});