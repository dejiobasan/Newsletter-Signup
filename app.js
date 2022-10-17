//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var Email = req.body.email;
    console.log(firstName, lastName, Email);
});

app.listen(port, function () {
    console.log("server started at port 3000.");
});
