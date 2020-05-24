 const {
     Note
 } = require('../models/notes_model.js')


 module.exports = {
     showNotes: (req, res) => {
         Note.find()
             .then(data => {
                 res.json({
                     message: "Success!",
                     data
                 })
             })
             .catch(err => {
                 res.json({
                     message: "Error!",
                     err
                 })
             })
     },

     createNotes: function (req, res) {
         Note.create({
             note: req.body.note,
         }, function (err, note_data) {
             if (err) {
                 res.json({
                     message: "Error!",
                     error: err
                 });
             } else {
                 res.json({
                     message: "Success!",
                     note_data: note_data
                 });
             }
         })
     },
 }