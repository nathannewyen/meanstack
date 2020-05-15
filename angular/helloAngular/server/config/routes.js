module.exports = (app) => {
    app.get('/', (req, res) => {
        console.log('new connection')
        // res.send('hello from new route')
    })
}