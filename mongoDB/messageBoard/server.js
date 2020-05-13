const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");

const app = express();

mongoose.connect('mongodb://localhost/messageDashboard', {
    useNewUrlParser: true
});

const CommentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    created_at: {
        type: Date,
        default: moment()
    },
}, {
    timestamps: true
})

const MessageSchema = new mongoose.Schema({
    name: String,
    message: String,
    created_at: {
        type: Date,
        default: moment()
    },
    comments: [CommentSchema]
}, {
    timestamps: true
})




// Create an object that contains methods for mongoose to interface with MongoDB
const Message = mongoose.model("Messages", MessageSchema);
const Comment = mongoose.model("Comments", CommentSchema)



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
    Message.find()
        .then(messages => {
            res.render("index", {
                messages: messages,
                moment: moment
            });
        })
        .catch(err => {
            console.log('Error saving user:', err)
        })
});

app.post("/postmessage", (req, res) => {
    const message = new Message({
        name: req.body.name,
        message: req.body.message
    })
    message.save().catch(err => {
        console.log("Error at saving message", err);
    })
    res.redirect("/")

})

app.post('/:id/postcomment', (req, res) => {
    Message.findOne({
            _id: req.params.id
        },
        (err, message) => { // After find message id => run function create comment
            const comment = new Comment({
                name: req.body.name,
                comment: req.body.comment
            });
            message.comments.push(comment); // push comment to message id 
            comment.save(function (err) {
                message.save((err) => {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        res.redirect("/");
                    };
                });
            });
        });
})


app.get("/remove", (req, res) => {
    Message.remove({}, err => {
        if (err) {
            console.log(err);
            res.send(err);
        } else {
            res.redirect('/')
        }
    })
})

app.get('/show', (req, res) => {
    Message.find()
        .then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
})

app.listen(8000, () => {
    console.log("Started server on port 8000");
});