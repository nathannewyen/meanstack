  const {
      Author
  } = require('../models/authors_model.js')


  module.exports = {
      show: (req, res) => {
          Author.find()
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
          Author.create({
              name: req.body.name,
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


      author_info: (req, res) => {
          Author.find({
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
          Author.findById(id, function (err, author_data) {
              if (err) {
                  res.json({
                      message: "Error!",
                      error: err
                  });
              } else {
                  if (req.body.name) {
                      author_data.name = req.body.name;
                  }
                  author_data.save(function (err) {
                      if (err) {
                          res.json({
                              message: "Error!",
                              error: err
                          });
                      } else {
                          res.json({
                              message: "Success!",
                              author_data: author_data
                          })
                      }
                  })
              }
          })
      },

      delete: (req, res) => {
          Author.remove({
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