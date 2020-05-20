const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost/log_reg", {
    useNewUrlParser: true,
});

// Setting
app.use(express.static(__dirname + "/cake/dist/cake"));


app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

require("./server/config/routes.js")(app);

// Localhost
app.listen(8000, () => {
    console.log("Started server on port 8000");
});