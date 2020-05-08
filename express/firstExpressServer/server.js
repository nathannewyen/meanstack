// Import
const express = require('express');
const ejs = require('ejs')

// Settings
const app = express();
app.use(express.static(__dirname + '/static')) // Look for static folder and use static folder
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')




// Routing
app.get('/', (req, res) => {
    context = {
        luckyNums: [12, 1, 3]
    }
    res.render('index', context);
})

app.get('/home', (req, res) => {
    res.send('hello home');
})


// Starting Server
app.listen(8000, () => console.log('listening to port 8000'));