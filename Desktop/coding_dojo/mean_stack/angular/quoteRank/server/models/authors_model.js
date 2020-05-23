  const mongoose = require("mongoose");


  const AuthorSchema = new mongoose.Schema({
      name: {
          type: String,
          required: [true, "Name is Required"],
          minlength: [3, "Must be longer than 3 characters"]
      },
      author_quote: [{
          quote: {
              type: String,
              minlength: [3, "Must be longer than 3 characters"]
          },
          vote: {
              type: Number,
              default: 0
          }
      }]
  })


  module.exports = {
      Author: mongoose.model('Author', AuthorSchema)
  }