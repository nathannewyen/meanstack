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
app.use(express.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.post('/process', (req, res) => {
    req.session.name = req.body.name
    req.session.location = req.body.location
    req.session.fav_lang = req.body.fav_lang
    req.session.comment = req.body.comment

    res.redirect("result")
})

app.get('/result', (req, res) => {
    context = {
        result: req.session
    }
    res.render('result.ejs', context)
})


app.listen(8000, () => console.log("listening on port 8000"));