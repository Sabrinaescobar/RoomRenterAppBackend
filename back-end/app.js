// DEPENDENCIES
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Apartments and Rooms Renter App");
});

// Apartments ROUTES
const apartmentsController = require("./controllers/apartmentsRenterController.js");
app.use("/apartments", apartmentsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;