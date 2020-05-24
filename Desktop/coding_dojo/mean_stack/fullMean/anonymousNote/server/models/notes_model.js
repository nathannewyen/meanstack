  const mongoose = require("mongoose");


  const NoteSchema = new mongoose.Schema({
      note: {
          type: String,
          required: [true, "Note is Required"],
          minlength: [3, "Must be longer than 3 characters"]
      }
  }, {
      timestamps: true
  })


  module.exports = {
      Note: mongoose.model('Note', NoteSchema)
  }