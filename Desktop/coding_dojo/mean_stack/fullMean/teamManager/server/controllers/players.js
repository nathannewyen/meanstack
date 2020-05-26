  const {
      Player
  } = require('../models/players_model.js')

  module.exports = {
      showPlayers: (req, res) => {
          Player.find()
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

      createPlayer: function (req, res) {
          Player.create({
              name: req.body.name,
              position: req.body.position
          }, function (err, data) {
              if (err) {
                  res.json({
                      message: "Error!",
                      error: err,
                  });
              } else {
                  res.json({
                      message: "Success!",
                      added: true,
                      data: data
                  });
              }
          })
      },

      showOnePlayer: (req, res) => {
          Player.find({
                  _id: req.params.id,
              })
              .then(player_data => {
                  res.json(player_data)
              })
              .catch(err => {
                  res.json(err)
              })
      },


      deletePlayer: (req, res) => {
          Player.remove({
              _id: req.params.id
          }, err => {
              if (err) {
                  res.json({
                      message: "Error!",
                      error: err
                  });
              } else {
                  res.json({
                      message: "Delete Success!",
                      added: true
                  });
              }
          })
      }
  }