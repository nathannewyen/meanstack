const express = require("express");
const app = express();
const session = require("express-session");

app.use(
    session({
        secret: "keyboardkitteh",
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 60000
        },
    })
);

app.use(express.static(__dirname + "/static"));
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
    if (req.session.counter == null) {
        req.session.counter = 1;
    } else {
        req.session.counter++
    }
    context = {
        counter: req.session.counter
    }

    res.render("index.ejs", context);
});

app.get("/addtime", (req, res) => {
    req.session.counter++;
    res.redirect("/");
});

app.get("/reset", (req, res) => {
    req.session.counter = null;
    res.redirect("/");
});

app.listen(8000, () => console.log("listening on port 8000"));