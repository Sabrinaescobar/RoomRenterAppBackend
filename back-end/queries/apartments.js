const apartments = require("../controllers/apartmentsRenterController.js");
const db = require("../db/dbConfig.js");

const getAllApartments = async () => {
    try {
      const allApartments = await db.any("SELECT * FROM apartments");
      return allApartments;
    } catch (error) {
      return error;
    }
  };

  const getApartment = async (id) => {
    try {
      const oneApartment = await db.one("SELECT * FROM apartments WHERE id=$1", id);
      return oneApartment;
    } catch (error) {
      return error;
    }
  };
  
  const createApartment = async (apartment) => {
  const {typeof_place, image, price, location, phone_number, amenities, children_allow, pets_allow} = apartment;
    try {
      const newApartment = await db.one(
        "INSERT INTO apartments (typeof_place, image, price, location, phone_number, amenities, children_allow, pets_allow) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
        [
          typeof_place,
          image,
          price,
          location,
          phone_number,
          amenities,
          children_allow,
          pets_allow,
        ]
      );
      return newApartment;
    } catch (error) {
      return error;
    }
  };

  const deleteApartment = async (id) => {
    try {
      const deletedApartment = await db.one(
        "DELETE FROM apartments WHERE id = $1 RETURNING *",
        id
      );
      return deletedApartment;
    } catch (error) {
      return error;
    }
  };

  const updateApartment = async (apartment, id) => {
    const {typeof_place, image, price, location, phone_number, amenities, children_allow, pets_allow} = apartment;
    try {
      const updatedApartment = await db.one(
        "UPDATE apartments SET typeof_place=$1, image=$2, price=$3, location=$4, phone_number=$5, amenities=$6, children_allow=$7, pets_allow=$8 WHERE id=$9 RETURNING *",
        [
          typeof_place,
          image,
          price,
          location,
          phone_number,
          amenities,
          children_allow,
          pets_allow,
          id
        ]);
      return updatedApartment;
    } catch (error) {
      return error;
    }
  };


module.exports = { getAllApartments, getApartment, createApartment, deleteApartment, updateApartment };