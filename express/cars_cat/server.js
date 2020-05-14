const express = require('express')
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/static'))
app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.get('/cats', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/cats.html'));
});
app.get('/cars', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/cars.html'));
});
app.get('/form', function (req, res) {
    res.sendFile(path.join(__dirname + '/views/form.html'));
});

app.listen(8000, () => {
    console.log('Started server on port 8000')
})