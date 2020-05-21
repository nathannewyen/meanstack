var path = require("path");


module.exports = (app) => {
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./tree/dist/tree/index.html"))
    });
}