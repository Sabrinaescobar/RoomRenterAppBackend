// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();
const apartmentsController = require("./controllers/apartmentsRenterController.js");
// MIDDLEWARE
app.use(cors());
app.use(express.json());

// Apartments ROUTES
app.use("/apartments", apartmentsController);

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Apartments and Rooms Renter App");
});

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;