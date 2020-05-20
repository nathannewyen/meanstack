const express = require("express");
const mongoose = require("mongoose");

const app = express();
mongoose.connect("mongodb://localhost/weatherAPI", {
    useNewUrlParser: true,
});

// Setting
app.use(express.static(__dirname + "/weather/dist/weather"));


app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);



app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./weather/dist/weather/index.html"));
});

//Port
app.listen(8000);