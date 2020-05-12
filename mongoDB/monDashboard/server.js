// Import
const express = require("express");
const mongoose = require("mongoose");
var moment = require('moment');

const app = express();

mongoose.connect("mongodb://localhost/name_of_your_DB", {
    useNewUrlParser: true,
});

const MonSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
}, {
    timestamps: true
});


// Create an object that contains methods for mongoose to interface with MongoDB
const Mon = mongoose.model("Mon", MonSchema);

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
    Mon.find({}, (err, data) => {
        var context = {
            data: data,
        };
        if (err) {
            console.log("Something went wrong");
        }
        res.render("index", context);
    });
});

app.post("/mongooses", (req, res) => {
    const mon = new Mon();
    mon.name = req.body.name;
    mon.age = req.body.age;
    mon.save().catch((err) => {
        console.log("Error saving mon", err);
    });
    res.redirect("/");
});


app.get("/mongooses/new", (req, res) => {
    res.render("add_mon");
});


app.get("/mongooses/:id", (req, res) => {
    Mon.find({
        _id: req.params.id
    }, (err, data) => {
        var context = {
            data: data,
            moment: moment
        }
        if (err) {
            console.log('Something went wrong mon info page', err);
        }
        res.render('moninfo', context)
    })
})

app.get("/mongooses/edit/:id", (req, res) => {
    Mon.find({
        _id: req.params.id
    }, (err, data) => {
        var context = {
            data: data,
        }
        if (err) {
            console.log("Something wrong with edit page", err)
        }
        res.render("edit_mon", context)
    })
})


app.post("/mongooses/:id", (req, res) => {
    Mon.update({
        _id: req.params.id
    }, {
        name: req.body.name,
        age: req.body.age

    }, err => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect("/");
        };
    })
})

app.post("/mongooses/destroy/:id", (req, res) => {
    Mon.remove({
        _id: req.params.id
    }, err => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect('/')
        }
    })
})

app.listen(8000, () => {
    console.log("Started server on port 8000");
});