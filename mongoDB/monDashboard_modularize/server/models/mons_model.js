const mongoose = require("mongoose");

const MonSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
}, {
    timestamps: true
});


module.exports = {
    Mon: mongoose.model("Mon", MonSchema),
}