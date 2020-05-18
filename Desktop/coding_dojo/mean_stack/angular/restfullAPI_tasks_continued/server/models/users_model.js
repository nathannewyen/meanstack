const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    birthday: Date,
    password: String,
}, {
    timestamps: true
})


module.exports = {
    User: mongoose.model('User', UserSchema),
}