// Dependencies

var express = require("express");

// Express configuration

var app = express();

// set initial port

var PORT = process.env.PORT || 8080;

// Sets up the express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Routing
// points our server to the routes files

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener - starts the server

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });