import axios from "axios";
import Appointment from "./Appointment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AppointmentForm from "./AppointmentForm";

function Appointments(props) {
  const API = process.env.REACT_APP_API_URL;
  const [appointments, setAppointments] = useState([]);
  let { id } = useParams();
  // where do our CRUD functions need to be passed?
  
  const handleAdd = (newAppointment) => {
    axios
      .post(`${API}/apartments/${id}/appointments`, newAppointment)
      .then(
        (response) => {
          setAppointments([response.data, ...appointments]);
        },
        (err) => console.error(err)
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (appointmentId) => {
    axios
      .delete(`${API}/apartments/${id}/appointments/${appointmentId}`)
      .then(
        (response) => {
          const copyAppointmentArray = [...appointments];
          const indexDeletedAppointment = copyAppointmentArray.findIndex((appointment) => {
            return appointment.appointment_id === id;
          });
          copyAppointmentArray.splice(indexDeletedAppointment, 1);
          setAppointments(copyAppointmentArray);
        },
        (error) => console.log(error)
      )
      .catch((err) => console.log(err));
  };

  const handleEdit = (updatedAppointment) => {
    axios
      .put(`${API}/apartments/${id}/appointments/${updatedAppointment.id}`, updatedAppointment)
      .then((response) => {
        const copyAppointmentArray = [...appointments];
        const indexUpdatedAppointment = copyAppointmentArray.findIndex((appointment) => {
          return appointment.id === updatedAppointment.id;
        });
        copyAppointmentArray[indexUpdatedAppointment] = response.data;
        setAppointments(copyAppointmentArray);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(`${API}/apartments/${id}/appointments`).then((response) => {
      setAppointments(response.data);
    });
  }, [id, API]);
  return (
    <section className="Appointments">
      <AppointmentForm handleSubmit={handleAdd}>
        <h2>Make a new appointment</h2>
      </AppointmentForm>
      <h2>Appointments Made</h2>
      {appointments.map((appointment) => (
        <Appointment
          key={appointment.id}
          appointment={appointment}
          handleDelete={handleDelete}
          handleSubmit={handleEdit}
        />  
      ))}
    </section>
  );
}

export default Appointments;