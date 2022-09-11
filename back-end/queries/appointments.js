const db = require("../db/dbConfig.js");

const getAllAppointments = async (apartment_id) => {
  try {
    const allAppointments = await db.any("SELECT * FROM appointments WHERE apartment_id=$1", apartment_id);
    return allAppointments;
  } catch (err) {
    return err;
  }
};

const getAppointment = async (id) => {
  try {
    const appointment = await db.one("SELECT * FROM appointments WHERE id=$1", id);
    return appointment;
  } catch (err) {
    return err;
  }
};

const createAppointment = async (appointment) => {
  const { apartment_id, full_name, phone_number, email, appointment_date, appointment_time } = appointment;
  try {
    const createdAppointment = await db.one(
      "INSERT INTO appointments (apartment_id, full_name, phone_number, email, appointment_date, appointment_time) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [apartment_id, full_name, phone_number, email, appointment_date, appointment_time]);
      return createdAppointment
  } catch (err) {
    return err;
  }
};

const deleteAppointment = async (id) => {
    try {
        const deletedAppointment = await db.one("DELETE FROM appointments WHERE id = $1 RETURNING *", 
        id)
        return deletedAppointment;
    } catch(err) {
        return err
    }
};

const updateAppointment = async (id, appointment) => {
    const { apartment_id, full_name, phone_number, email, appointment_date, appointment_time } = appointment;

    try {
        const updatedAppointment = await db.one("UPDATE appointments SET apartment_id=$1, full_name=$2, phone_number=$3, email=$4, appointment_date=$5, appointment_time=$6 WHERE id=$7 RETURNING *", [apartment_id, full_name, phone_number, email, appointment_date, appointment_time, id])
        return updatedAppointment;
    } catch (err) {
        return err
    }
}

module.exports = { getAllAppointments, getAppointment, createAppointment, updateAppointment, deleteAppointment };