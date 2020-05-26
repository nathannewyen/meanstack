  const mongoose = require("mongoose");


  const PlayerSchema = new mongoose.Schema({
      name: {
          type: String,
          required: [true, "Player name is required!"],
          minlength: [2, "Name must be a minimum of 2 characters!"]
      },
      position: String,
      actions: String,
  })


  module.exports = {
      Player: mongoose.model('Player', PlayerSchema)
  }