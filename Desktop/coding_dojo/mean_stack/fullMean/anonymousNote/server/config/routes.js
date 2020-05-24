var path = require("path");

const note = require('../controllers/notes.js')

module.exports = (app) => {

    app.get("/show", note.showNotes)

    app.post("/create", note.createNotes)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./project/dist/project/index.html"))
    });
}