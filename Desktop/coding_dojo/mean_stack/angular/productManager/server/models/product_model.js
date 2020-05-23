const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product title is required!"],
        minlength: [4, "Title must be a minimum of 4 characters!"]
    },
    price: {
        type: Number,
        required: [true, "Product price is required!"]
    },
    url: String,
})

module.exports = {
    Product: mongoose.model('Product', ProductSchema),
}