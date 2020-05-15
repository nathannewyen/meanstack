const express = require('express')

const app = express();
app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
    res.render('cats.ejs')
})
app.get('/cat', function (req, res) {
    cat = {
        fav_food: 'Spaghetti',
        age: 3,
        sleeping_spots: ['under the bed', 'in a sunbeam']
    }
    res.render('cat.ejs', cat)
})
app.get('/cat1', function (req, res) {
    cat_one = {
        fav_food: 'Ramen',
        age: 5,
        sleeping_spots: ['somewhere', 'in the house']
    }
    res.render('cat1.ejs', cat_one)
})
app.get('/cat2', function (req, res) {
    cat_two = {
        fav_food: 'Rice',
        age: 1,
        sleeping_spots: ['window', 'under the sunshine']
    }
    res.render('cat2.ejs', cat_two)
})

app.listen(8000, () => {
    console.log('Started server on port 8000')
})