var path = require("path");

const authors = require('../controllers/authors.js')


module.exports = (app) => {
    app.get("/tasks", authors.show);

    app.get("/tasks/:id", authors.author_info)

    app.post("/tasks", authors.create)

    app.put("/tasks/:id", authors.edit)

    app.delete("/delete/:id", authors.delete)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./project/dist/project/index.html"))
    });
}