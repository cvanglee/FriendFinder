// Dependencies
var path = require("path");

// Routing

module.exports = function(app){
    // sends you to the survey
    app.get("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // sends you to the home page
    app.get("*", function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};