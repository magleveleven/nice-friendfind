var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var PORT = process.env.PORT || 8080


app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())


//Pulls in the module.export from the routing files
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);


app.use(bodyParser.text({ type: 'text/html'}))

//Connects and confirms connection 
app.listen(PORT, function() {
    console.log("Listening on port" + PORT);
}); 