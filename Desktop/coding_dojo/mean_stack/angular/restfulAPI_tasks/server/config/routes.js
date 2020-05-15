const users = require('../controllers/users.js')


module.exports = (app) => {
    app.get("/", (req, res) => {
        console.log("hello world")
    });

    app.get("/tasks", users.show);

    app.get("/tasks/new/:first_name", users.add_user);

    app.get("/tasks/:first_name", users.user_info);



}