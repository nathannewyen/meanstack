const users = require('../controllers/users.js')

module.exports = function (app) {
    app.get("/", (req, res) => {
        users.index(req, res)
    })

    app.get("/home", (req, res) => {
        users.reg_login(req, res)
    });

    app.get("/new/:first_name", (req, res) => {
        users.add_user(req, res)
    })

    app.get("/show", (req, res) => {
        users.show(req, res)
    })

    app.post("/reg_process", (req, res) => {
        users.reg_process(req, res)
    })

    app.get("/remove/:first_name", (req, res) => {
        users.remove_user(req, res)
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

    app.get("/user/:first_name", (req, res) => {
        users.user_info(req, res)
    })
}