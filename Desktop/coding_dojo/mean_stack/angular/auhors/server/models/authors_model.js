  const mongoose = require("mongoose");


  const AuthorSchema = new mongoose.Schema({
      name: String,
  })


  module.exports = {
      Author: mongoose.model('Author', AuthorSchema)
  }