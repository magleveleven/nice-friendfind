var friendData = require('../data/friends.js');

module.exports = function (app) {

    //Retrieves the individuals data from api friends list in JSON format  
    app.get('/api/friends', function(req, res) {
        res.json(friendData);
    }); 
    //Posts the new user survey info to api friends list
    app.post('/api/friends', function (req, res) {
        
        //Create an object template to receive in new user data input from the survey
        var winner = {
            name: "Corey Taylor",
            photo: "https://ksassets.timeincuk.net/wp/uploads/sites/55/2019/06/slipknot-620x394.jpg",
        };

        //console.log(req.body);
        //Assigns the "posted" user data from the body of the post to a new variable
        var userData = req.body;

        //Add the new user data to api friends list
        friendData.push(userData);

        //Add new user data variable to response
        res.json(winner);
    });

}