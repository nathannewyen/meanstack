const mongoose = require("mongoose");

const RateSchema = new mongoose.Schema({
    rating: Number,
    comment: String,

})

const CakeSchema = new mongoose.Schema({
    name: String,
    url: String,
    ratings: [RateSchema]
})


module.exports = {
    Cake: mongoose.model('Cake', CakeSchema),
    Rate: mongoose.model('Rate', RateSchema)
}