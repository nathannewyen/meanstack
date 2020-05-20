  const {
      Cake,
      Rate
  } = require('../models/cakes_model.js')

  module.exports = {
      showCakes: (req, res) => {
          Cake.find()
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

      createCake: (req, res) => {
          Cake.create({
                  name: req.body.name,
                  url: req.body.url
              })
              .then(data => res.json({
                  message: "Successfully ",
                  data
              }))
              .catch(
                  err => res.json({
                      message: "Error here",
                      err
                  })
              )
      },


      showRates: (req, res) => {
          Rate.find()
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

      addRating: function (req, res) {
          console.log(req.body)
          Rate.create({
              rating: req.body.rating,
              comment: req.body.comment
          }, function (err, newRate) {
              console.log(req.body)
              if (err) {
                  res.json({
                      message: "Error!",
                      error: err
                  });
              } else {
                  Cake.findOneAndUpdate({
                      _id: req.params.cakeId
                  }, {
                      $push: {
                          ratings: newRate
                      }
                  }, function (err, data) {
                      if (err) {
                          res.json({
                              message: "Error!",
                              error: err
                          });
                      } else {
                          res.json({
                              message: "Success!",
                              added: true
                          });
                      }
                  })
              }
          })
      }

  }