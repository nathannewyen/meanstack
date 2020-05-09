const express = require("express");
const app = express();
const session = require("express-session");

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({
    extended: true
}));

app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');

app.get('/', (req, res) => {
    res.render('index.ejs')
});

app.post('/result', (req, res) => {
    context = {
        "name": req.body.name,
        "location": req.body.location,
        "fav_lang": req.body.fav_lang,
        "comment": req.body.comment
    }
    res.render('result.ejs', context)
})


app.listen(8000, () => console.log("listening on port 8000"));