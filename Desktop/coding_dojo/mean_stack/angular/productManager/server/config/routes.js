var path = require("path");
const product = require('../controllers/product.js')


module.exports = (app) => {
    app.get("/show", product.showProducts)

    app.get("/show/:id", product.oneProduct)

    app.post("/add", product.createProduct)

    app.put("/edit/:id", product.editProduct)

    app.delete("/delete/:id", product.deleteProduct)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./product/dist/product/index.html"))
    });
}