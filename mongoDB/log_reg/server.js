const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");
const session = require('express-session')
const bcrypt = require('bcrypt')


const app = express();

mongoose.connect("mongodb://localhost/log_reg", {
  useNewUrlParser: true,
});
app.use(session({
  secret: 'I love coding and gaming',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 50000
  }
}))




const UserSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: String,
  birthday: Date,
  password: String,
}, {
  timestamps: true
})

// Create an object that contains methods for mongoose to interface with MongoDB
const User = mongoose.model("User", UserSchema);



// Setting
app.use(express.static(__dirname + "/static"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Routes
app.get("/", (req, res) => {
  res.render("index");
});

app.get('/show', (req, res) => {
  User.find()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      res.json(err)
    })
})


app.post("/reg_process", (req, res) => {
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
})

app.post('/login_process', (req, res) => {
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
})

app.get("/dashboard", (req, res) => {
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

})

app.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect("/")
})

app.get("/user/:id", (req, res) => {
  User.find({
      _id: req.params.id,

    })
    .then(user_data => {
      res.render("user", {
        user_data: user_data,
        moment: moment,
      })
    })
    .catch(err => {
      res.json(err)
    })
})

app.listen(8000, () => {
  console.log("Started server on port 8000");
});