var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require("./db/mongoose.js");
var {Todo} = require("./models/todo.js");
var {User} = require("./models/user.js");

var app = express();

app.use(bodyParser.json())      //parses the JSON string and attaches it to req of POST
//CRUD = Create, read, update and delete

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);          //sending the response back to client/ POSTMAN
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});