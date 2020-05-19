const users = require('../controllers/users.js')


module.exports = (app) => {
    app.get("/tasks", users.show);

    app.get("/tasks/:id", users.user_info)

    app.post("/tasks", users.create)

    app.put("/tasks/:id", users.edit)

    app.delete("/tasks/:id", users.delete)

}