var path = require("path");

const authors = require('../controllers/authors.js')


module.exports = (app) => {
    app.get("/tasks", authors.show);

    app.get("/tasks/:id", authors.author_info)

    app.post("/tasks", authors.createAuthor)

    app.post("/tasks/add/:id", authors.addQuote)

    app.post('/votes/:id/:quoteid', authors.upVote)

    app.post('/votesdown/:id/:quoteid', authors.downVote)

    app.put("/tasks/:id", authors.edit)

    app.delete("/tasks/:id/:quoteid/delete", authors.deleteQuote)

    app.delete("/delete/:id", authors.delete)


    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./quote/dist/quote/index.html"))
    });
}