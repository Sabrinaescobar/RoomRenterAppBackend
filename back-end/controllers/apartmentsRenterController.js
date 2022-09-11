const express = require("express");
const apartments = express.Router();
const { getAllApartments, getApartment, createApartment, deleteApartment, updateApartment } = require("../queries/apartments");
const { checkTypeOfPlace, checkLocation} = require("../validations/checkApartment.js");
const appointmentsController = require("./appointmentsController.js");
apartments.use("/:apartmentId/appointments", appointmentsController);
// INDEX
apartments.get("/", async (req, res) => {
  const allApartments = await getAllApartments();
  if (allApartments[0]) {
    res.status(200).json({ payload: allApartments, success: true });
  } else {
    res.status(500).json({ error: "server error" });
  }
});

apartments.get("/:id", async (req, res) => {
  const { id } = req.params;
  const apartment = await getApartment(id);
  if (apartment.id) {
    res.json({ payload: apartment, success: true });
  } else {
    res.status(404).json({ payload: "not found", success: false });
  }
});

apartments.post("/", checkTypeOfPlace, checkLocation, async (req, res) => {
  
  try {
    const apartment = await createApartment(
      req.body
    );
    res.json({ payload: apartment, success: true });
  } catch (error) {
    res.status(400).json({error: error });
  }
});

apartments.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedApartment = await deleteApartment(id);
  if (deletedApartment.id) {
    res.status(200).json({ payload: deletedApartment, success: true });
  } else {
    res.status(404).json({ payload: "Apartment not found", success: false });
  }
});

apartments.put("/:id", checkTypeOfPlace, checkLocation,  async (req, res) => {
  const { id } = req.params;
  const updatedApartment = await updateApartment( req.body, id);
  if (updatedApartment.id) {
    res.status(200).json({ payload: updatedApartment, success: true });
  } else {
    res.status(422).json({ payload: "Unable to update the apartment", success: false });
  }
});

module.exports = apartments;