import AppointmentForm from "./AppointmentForm";
import { useState } from "react"
export default function Appointment ({ appointment, handleDelete, handleSubmit  }) {
  const [viewEditForm, toggleEditForm] = useState(false);
  // THIS FILE WILL HOLD OUR SECOND FORM - we need a toggle to display the form or hide it
  //  How can we use our state to toggle this form
  const toggleView = () => {
    toggleEditForm(!viewEditForm)
  };

  return (
    <div className="Appointment">
      <button className="btn" onClick={toggleView}>Edit</button>
      
      { viewEditForm ? (
        <AppointmentForm 
          handleSubmit={handleSubmit}
          appointmentDetails={appointment}
          toggleView={toggleView}
        >
          <h2>This is the edit form</h2>
        </AppointmentForm>
      ) : ( 
        <div>
          <h4>{appointment.full_name} </h4>
          <h5>{appointment.appointment_date}</h5>
          <h5>{appointment.appointment_time}</h5>
          <button className="btn" onClick={() => handleDelete(appointment.id)} >Delete</button>
        </div>
      )}
    </div>
  );

}

