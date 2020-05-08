const express = require('express')

const app = express();
app.use(express.static(__dirname + '/static'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

app.get('/', function (req, res) {
    res.render('index.ejs')
})

app.listen(8000, () => {
    console.log('Started server on port 8000')
})