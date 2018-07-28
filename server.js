const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const workoutsController = require("./controllers/workoutsController")
const app = express();
const PORT = process.env.PORT || 3001;


process.env.MONGODB_URI || "..."


// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve up static assets
// app.use(express.static("client/build"));
// Add routes, both API and view
app.use(workoutsController);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workouts",
  {
    useMongoClient: true
  }
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
