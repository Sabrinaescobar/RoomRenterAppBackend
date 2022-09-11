const express = require("express");
// allows us to merge our appartments router w/ appointments router
const appointments = express.Router({ mergeParams: true});
const {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  deleteAppointment
} = require("../queries/appointments.js");

appointments.get("/", async (req, res) => {
  const { apartmentId } = req.params;
  const allAppointments = await getAllAppointments(apartmentId);
  if (allAppointments[0]) {
    res.status(200).json(allAppointments);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

appointments.get("/:id", async (req, res) => {
  const { id } = req.params;
  const appointment = await getAppointment(id);
  if (appointment.id) {
    
    res.json(appointment);
  } else {
    res.status(404).json({ error: "appointment not found" });
  }
});

appointments.post("/", async (req, res) => {
    try {
      
        const createdAppointment = await createAppointment(req.body);
        res.json(createdAppointment);
    } catch (err) {
        res.status(422).json({error: "ERROR not good entity"});
    }
});

appointments.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedAppointment = await deleteAppointment(id);
    if (deletedAppointment.id) {
        res.status(200).json(deletedAppointment)
    } else {
        res.status(404).json({error: "Appointment not found at that ID"})
    }
});

appointments.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedAppointment = await updateAppointment(id, req.body);
    if (updatedAppointment.id) {
        res.status(200).json(updatedAppointment)
    } else {
        res.status(404).json({error: "no appointment found to update"})
    }
})

module.exports = appointments;