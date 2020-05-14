const {
    User
} = require('../models/users_model.js')

const moment = require("moment");
const bcrypt = require('bcrypt')

module.exports = {
    reg_login: (req, res) => {
        res.render("index");
    },

    show: (req, res) => {
        User.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },

    reg_process: (req, res) => {
        const user = new User();
        user.first_name = req.body.fname;
        user.last_name = req.body.lname;
        user.email = req.body.reg_email;
        user.birthday = req.body.date;
        bcrypt.hash(req.body.reg_password, 10)
            .then(hashed_password => {
                user.password = hashed_password
                user.save()
                    .then(newUser => {
                        res.redirect(`/user/${newUser._id}`, {
                            currentUser: req.session.email
                        })
                    })
                    .catch(err => {
                        console.log(err);
                    });
            });
    },

    login_process: (req, res) => {
        User.findOne({
                email: req.body.login_email
            })
            .then(user => {
                bcrypt.compare(req.body.login_password, user.password)
                    .then(result => {
                        if (result) {
                            req.session.email = user.email
                            res.redirect(`/user/${user._id}`)
                        } else {
                            console.log('Failed login attempt')
                            res.redirect('/')
                        }
                    })
            })
    },

    dashboard: (req, res) => {
        User.find()
            .then(users => {
                res.render("dashboard", {
                    users: users,
                    moment: moment
                })
            })
            .catch(err => {
                console.log('Error find user:', err)
            })

    },

    logout: (req, res) => {
        req.session.destroy()
        res.redirect("/")
    },

    user_info: (req, res) => {
        User.find({
                _id: req.params.id,
            })
            .then(user_data => {
                res.render("user.ejs", {
                    user_data: user_data,
                    moment: moment,
                })
            })
            .catch(err => {
                res.json(err)
            })
    }
}