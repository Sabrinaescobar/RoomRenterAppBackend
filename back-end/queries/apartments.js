const db = require("../db/dbConfig.js");

const getAllApartments = async () => {
    try {
      const allApartments = await db.any("SELECT * FROM apartments");
      return allApartments;
    } catch (error) {
      return error;
    }
  };

module.exports = { getAllApartments };