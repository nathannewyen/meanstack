// Import
const express = require("express");
const mongoose = require("mongoose");

const app = express();
var moment = require("moment");

mongoose.connect("mongodb://localhost/name_of_your_DB", {
  useNewUrlParser: true,
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  quote: {
    type: String,
  },
  created_at: {
    type: Date,
    default: moment().format("llll"),
  },
});
// Create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model("User", UserSchema);

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

app.post("/process", (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.quote = req.body.quote;
  user.save().catch((err) => {
    console.log("Error saving user:", err);
  });
  res.redirect("/quotes");
});

app.get("/quotes", (req, res) => {
  User.find({}, (err, quotes) => {
    var context = {
      quotes: quotes,
      moment: moment
    };

    if (err) {
      console.log("Something went wrong");
    }

    res.render("quotes", context);
  });
});

app.get("/delete", (req, res) => {
  User.remove({}).then((data) => {
    res.json(data);
  });
  res.redirect("/quotes");
});

app.listen(8000);