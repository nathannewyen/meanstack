const cakes = require('../controllers/cakes.js')


module.exports = (app) => {
    app.get("/cakes", cakes.showCakes)

    app.post("/addcake", cakes.createCake)

    app.get("/rates", cakes.showRates)

    app.post("/ratings/:cakeId", (req, res) => {
        cakes.addRating(req, res);
    });

}