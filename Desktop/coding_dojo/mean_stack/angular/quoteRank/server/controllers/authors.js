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

      createAuthor: function (req, res) {
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
          Author.findOne({
              _id: req.params.id
          }, function (err, data) {
              if (err) {
                  res.json({
                      message: "Error",
                      error: err
                  });
              } else {
                  res.json({
                      data
                  });
              }
          })
      },

      addQuote: (req, res) => {
          Author.updateOne({
                  _id: req.params.id
              }, {
                  $push: {
                      'author_quote': {
                          'quote': req.body.quote
                      }
                  }
              }, {
                  runValidators: true
              })
              .then(data => res.json(data))
              .catch(err => res.json(err));
      },

      upVote: (req, res) => {
          Author.findOne({
                  _id: req.params.id
              })
              .then(author => {
                  for (let quote of author.author_quote) {
                      if (quote._id.toString() === req.params.quoteid) {
                          quote.vote += 1;
                      }
                  }
                  author.save()
                  res.json(author)
              })
      },

      downVote: (req, res) => {
          Author.findOne({
                  _id: req.params.id
              })
              .then(author => {
                  for (let quote of author.author_quote) {
                      if (quote._id.toString() === req.params.quoteid) {
                          quote.vote -= 1;
                      }
                  }
                  author.save()
                  res.json(author)
              })
      },

      deleteQuote: (req, res) => {
          Author.findOne({
                  _id: req.params.id
              })
              .then(author => {
                  for (let quote of author.author_quote) {
                      if (quote._id.toString() === req.params.quoteid) {
                          quote.remove()
                      }
                  }
                  author.save()
                  res.json(author)
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