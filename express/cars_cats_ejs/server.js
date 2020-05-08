const express = require('express')

const app = express();
app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/cats', function (req, res) {
    res.render('cats.ejs')
})
app.get('/cars', function (req, res) {
    res.render('cars.ejs')
})
app.get('/cars/new', function (req, res) {
    res.render('form.ejs')
})

app.listen(8000, () => {
    console.log('Started server on port 8000')
})