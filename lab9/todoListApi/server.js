var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require("mongoose"),
  Task = require("./api/models/todoListModel"), // create model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.set("strictQuery", true); // removes a deprication error message
mongoose.connect("mongodb://localhost:27017/Tododb");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes'); // importing routes
routes(app); // registering the route

app.listen(port);

console.log("todo list RESTful API server started on: " + port);
