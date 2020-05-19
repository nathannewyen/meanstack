  const {
      User
  } = require('../models/users_model.js')


  module.exports = {
      show: (req, res) => {
          User.find()
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

      create: function (req, res) {
          User.create({
              first_name: req.body.first_name,
              last_name: req.body.last_name
          }, function (err, task) {
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
      },


      user_info: (req, res) => {
          User.find({
                  _id: req.params.id,
              })
              .then(user_data => {
                  res.json(user_data)
              })
              .catch(err => {
                  res.json(err)
              })
      },

      edit: (req, res) => {
          let id = req.params.id;
          User.findById(id, function (err, user_data) {
              if (err) {
                  res.json({
                      message: "Error!",
                      error: err
                  });
              } else {
                  if (req.body.first_name) {
                      user_data.first_name = req.body.first_name;
                  }
                  if (req.body.last_name) {
                      user_data.last_name = req.body.last_name;
                  }
                  user_data.save(function (err) {
                      if (err) {
                          res.json({
                              message: "Error!",
                              error: err
                          });
                      } else {
                          res.json({
                              message: "Success!",
                              user_data: user_data
                          })
                      }
                  })
              }
          })
      },

      delete: (req, res) => {
          User.remove({
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