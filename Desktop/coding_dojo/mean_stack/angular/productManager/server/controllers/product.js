  const {
      Product
  } = require('../models/product_model.js')

  module.exports = {
      showProducts: (req, res) => {
          Product.find()
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

      createProduct: (req, res) => {
          Product.create({
                  title: req.body.title,
                  price: req.body.price,
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

      oneProduct: (req, res) => {
          Product.find({
                  _id: req.params.id,
              })
              .then(product_data => {
                  res.json(product_data)
              })
              .catch(err => {
                  res.json(err)
              })
      },


      editProduct: (req, res) => {
          let id = req.params.id;
          Product.findById(id, function (err, product_data) {
              if (err) {
                  res.json({
                      message: "Error!",
                      error: err
                  });
              } else {
                  if (req.body.title) {
                      product_data.title = req.body.title;
                  }
                  if (req.body.price) {
                      product_data.price = req.body.price;
                  }
                  if (req.body.url) {
                      product_data.url = req.body.url;
                  }
                  product_data.save(function (err) {
                      if (err) {
                          res.json({
                              message: "Error when saving!",
                              error: err
                          });
                      } else {
                          res.json({
                              message: "Success!",
                              product_data: product_data
                          })
                      }
                  })
              }
          })
      },
  }