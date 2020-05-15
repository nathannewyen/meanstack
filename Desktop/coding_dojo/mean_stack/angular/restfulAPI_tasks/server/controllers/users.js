  const {
      User
  } = require('../models/users_model.js')


  module.exports = {
      show: (req, res) => {
          User.find()
              .then(data => {
                  res.json({
                      message: "Success!",
                  })
                  console.log(data)
              })
              .catch(err => {
                  res.json({
                      message: "Error!",
                      err
                  })
              })
      },

      add_user: (req, res) => {
          const user = new User();
          user.first_name = req.params.first_name;
          user
              .save()
              .then((newUser) => {
                  res.json({
                      message: "Success!",
                  })
                  console.log(newUser)
              })
              .catch((err) => {
                  res.json({
                      message: "Error!",
                      err
                  });
              });
      },

      user_info: (req, res) => {
          User.findOne({
                  first_name: req.params.first_name
              })
              .then(data = data => {
                  res.json({
                      message: "Success find user!",
                  })
                  console.log(data)
              })
              .catch(err => {
                  res.json({
                      message: "Error!",
                      err
                  })
              })
      }
  }