// Import
const express = require("express");
const app = express();
const session = require("express-session");

// Setting
app.use(
    session({
        secret: "keyboardkitteh",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000,
        },
    })
);

app.use(express.static(__dirname + "/static"));
app.use(
    express.urlencoded({
        extended: true,
    })
);

// Route
app.set("view engine", "ejs");

app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    context = {
        randomNum: Math.floor(Math.random() * 100),
        input: req.session,
    };


    res.render("index", context);
});

app.post("/random", (req, res) => {
    req.session.num = req.body.number;
    res.redirect("/");
});

app.get("/playagain", (req, res) => {
    req.session.num = null;
    res.redirect("/");
})

app.listen(8000, () => console.log("listening on port 8000"));