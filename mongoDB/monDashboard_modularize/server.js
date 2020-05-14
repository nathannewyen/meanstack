// Import
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/name_of_your_DB", {
    useNewUrlParser: true,
});


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


app.listen(8000, () => {
    console.log("Started server on port 8000");
});