const users = require('../controllers/users.js')

module.exports = function (app) {
    app.get("/", (req, res) => {
        users.reg_login(req, res)
    });

    app.get("/show", (req, res) => {
        users.show(req, res)
    })

    app.post("/reg_process", (req, res) => {
        users.reg_process(req, res)
    })

    app.post('/login_process', (req, res) => {
        users.login_process(req, res)
    })

    app.get("/dashboard", (req, res) => {
        users.dashboard(req, res)
    })

    app.get('/logout', (req, res) => {
        users.logout(req, res)
    })

    app.get("/user/:id", (req, res) => {
        users.user_info(req, res)
    })
}