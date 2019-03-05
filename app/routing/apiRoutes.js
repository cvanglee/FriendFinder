// Load Data

var friendData = require("../data/friends");

// Routing

module.exports = function(app){
// get the data from the friends file
app.get("/api/friends", function(req, res){
    res.json(friendData)
});

// adds data to the the friends file
app.post("/api/friends", function(req, res){
    var userData = req.body;
    var userScores = userData.scores;
    var matchName = '';
    var matchPic = '';
    var totDiff = 1000;

    for(var i=0; i<friendData.length; i++){
        //difference between the question
        var qdiff = 0;
        for (var j=0; j<userScores.length;j++){
            qdiff += Math.abs(friendData[i].scores[j]-userScores[j]);
        }

        if (qdiff < totDiff){
            totDiff = qdiff;
            matchName = friendData[i].name;
            matchPic = friendData[i].photo;
        }
    }
    friendData.push(req.body);
    res.json({status: 'OK', matchName: matchName, matchPic: matchPic});
});
};