//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, function () {
    console.log("server started at port 3000.");
});
