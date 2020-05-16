//Imports
var express = require("express");
var app = express();

//Config
app.use(express.static(__dirname + "/pokemon/dist/pokemon"));

//Port
app.listen(8000)