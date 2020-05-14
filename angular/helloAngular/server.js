const express = require("express");

const app = express();


// Setting
app.use(express.static(__dirname + "/public/dist/public"));

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