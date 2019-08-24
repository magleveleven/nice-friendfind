var path = require('path');

var express = require('express');
var app = express();

module.exports = function (app) {
    //To display the survey.html, write a function and instruction to send the file using path.join and __dirname to locate
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public//survey.html'));
    });

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));
    });
    //If user attempts to go to anyother page not specified above, route the user to the home page
    app.use( function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));

    });
}