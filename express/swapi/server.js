// Import
const express = require("express");
const app = express();


// Setting
app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({
    extended: true
}));


app.set('view engine', 'ejs');

app.set('views', __dirname + '/views');


// Route
app.get('/', (req, res) => {
    res.render('index')
});



// Error 404 handler
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = res.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    // render the error page
    res.send("We don't have this page ");
});



app.listen(8000, () => console.log("listening on port 8000"));