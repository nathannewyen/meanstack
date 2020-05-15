const {
    Mon
} = require('../models/mons_model')

const moment = require("moment");

module.exports = {
    index: (req, res) => {
        Mon.find({}, (err, data) => {
            var context = {
                data: data,
            };
            if (err) {
                console.log("Something went wrong");
            }
            res.render("index", context);
        });
    },

    add_mon_process: (req, res) => {
        const mon = new Mon();
        mon.name = req.body.name;
        mon.age = req.body.age;
        mon.save().catch((err) => {
            console.log("Error saving mon", err);
        });
        res.redirect("/");
    },

    add_mon: (req, res) => {
        res.render("add_mon");
    },

    mon_info: (req, res) => {
        Mon.find({
            _id: req.params.id
        }, (err, data) => {
            var context = {
                data: data,
                moment: moment
            }
            if (err) {
                console.log('Something went wrong mon info page', err);
            }
            res.render('moninfo', context)
        })
    },

    mon_edit: (req, res) => {
        Mon.find({
            _id: req.params.id
        }, (err, data) => {
            var context = {
                data: data,
            }
            if (err) {
                console.log("Something wrong with edit page", err)
            }
            res.render("edit_mon", context)
        })
    },

    mon_edit_process: (req, res) => {
        Mon.update({
            _id: req.params.id
        }, {
            name: req.body.name,
            age: req.body.age

        }, err => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.redirect("/");
            };
        })
    },

    mon_remove: (req, res) => {
        Mon.remove({
            _id: req.params.id
        }, err => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.redirect('/')
            }
        })
    }
}