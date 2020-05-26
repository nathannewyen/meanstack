var path = require("path");
const player = require('../controllers/players.js')

module.exports = (app) => {
    app.get("/show", player.showPlayers)

    app.get("/show/:id", player.showOnePlayer)

    app.post("/add", player.createPlayer)

    app.delete("/delete/:id", player.deletePlayer)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./project/dist/project/index.html"))
    });
}