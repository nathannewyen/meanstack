const { User } = require("../models/users_model.js");

module.exports = {
  index: (req, res) => {
    User.find()
      .then((data) => {
        res.json({
          message: "Success!",
          data,
        });
      })
      .catch((err) => {
        res.json({
          message: "Error!",
          err,
        });
      });
  },

  create: function (req, res) {
    User.create(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
      },
      function (err, task) {
        if (err) {
          res.json({
            message: "Error!",
            error: err,
          });
        } else {
          res.json({
            message: "Success!",
            added: true,
          });
        }
      }
    );
  },

  details: function (request, response) {
    User.findOne(
      {
        _id: request.params.id,
      },
      function (error, data) {
        if (error) {
          console.log(error);
          response.json({
            message: "Error",
            error: error,
          });
        } else {
          response.json({
            message: "Success",
            data: data,
          });
        }
      }
    );
  },

  delete: (req, res) => {
    User.remove(
      {
        _id: req.params.id,
      },
      (err) => {
        if (err) {
          res.json({
            message: "Error!",
            error: err,
          });
        } else {
          res.json({
            message: "Delete Success!",
            added: true,
          });
        }
      }
    );
  },
};
