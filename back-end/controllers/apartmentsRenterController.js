const express = require("express");
const apartments = express.Router();


const express = require("express");
const apartments = express.Router();
const { getAllApartments } = require("../queries/apartments");

// INDEX
apartments.get("/", async (req, res) => {
  const allApartments = await getAllBookmarks();
  if (allApartments[0]) {
    res.status(200).json(allApatments);
  } else {
    res.status(500).json({ error: "server error" });
  }
});


module.exports = apartments;