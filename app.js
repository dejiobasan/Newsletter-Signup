//jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const https = require("node:https");
const client = require("@mailchimp/mailchimp_marketing");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
    const firstName = req.body.fname;
    const lastName = req.body.lname;
    const Email = req.body.email;
    const Data = {
        members: [{
            email_address: Email,
            status: "subcribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: lastName,
            }
        }],
    };
    const jsonData = JSON.stringify(Data);

    const url = "https://us12.api.mailchimp.com/3.0/lists/2f574a0095&appid=3a1cf7819649872056fa1ab7440b8389-us12";

    const options = {
        method: "POST",
        auth: "Dejiobasan:3a1cf7819649872056fa1ab7440b8389-us12"
    };

    const request = https.request(url, options, function(response) {
        response.on("Data", function (Data) {
            console.log(JSON.parse(Data));
        });
    });

    request.write(jsonData);
    request.end();
});

// apiKey = 3a1cf7819649872056fa1ab7440b8389-us12
// listID = 2f574a0095

app.listen(port, function () {
    console.log("server started at port 3000.");
});
