import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

function AppointmentForm( props ) {
  let { id } = useParams();
  const { appointmentDetails } = props;
  const [dateState] = useState(new Date())
  const [appointment, setAppointment] = useState({
    full_name: "",
    phone_number:"",
    email:"",
    appointment_date: "",
    appointment_time: "",
    apartment_id: id,
  });

  const handleTextChange = (event) => {
    setAppointment({ ...appointment, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setAppointment({ ...appointment, [event.target.id]: event.target.value });
  };

  const changeDate = (e) => {
    console.log(e);
   setAppointment ({ ...appointment, appointment_date: moment(e).format('MMMM Do YYYY')});

  }


  useEffect(() => {
    if (appointmentDetails) {
      setAppointment(appointmentDetails);
    }
  }, [id, appointmentDetails, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    props.handleSubmit(appointment, id);
    if (appointmentDetails) {
      props.toggleView();
    }
    setAppointment({
    full_name: "",
    phone_number:"",
    email:"",
    appointment_date: "",
    appointment_time: "",
    apartment_id: id,
    });
  };
  return (
    <div className="Edit">
      {/* this is our placeholder for our sandwiched text from parent */}
      { props.children }
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="full_name">Name:</label>
        <input
          id="full_name"
          value={appointment.full_name}
          type="text"
          onChange={handleTextChange}
          placeholder="Your full name"
          required
        />
        <br/>
        <label className="form-label" htmlFor="phone_number">Phone Number:</label>
        <input
          id="phone_number"
          type="number"
          required
          value={appointment.phone_number}
          onChange={handleTextChange}
          placeholder="Your phone number"
        />
        <br/>
        <label className="form-label" htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={appointment.email}
          onChange={handleTextChange}
          placeholder="Your email"
        />
        <br/>
        <label className="form-label" htmlFor="apoinment_date">Select the appointment Date:</label>
        <Calendar 
        className={"Calendar"}
        value={dateState}
        onChange={changeDate}
        />
        <input
          id="appointment_date"
          type="text"
          name="appoinment_date"
          value={appointment.appointment_date}
          placeholder="mm/dd/yyyy"
          onChange={changeDate}
        />
        <br/>
        <label className="form-label" htmlFor="apoinment_time">Select the appointment time:</label>
        <select
        id="appointment_time" 
        onChange={handleSelectChange}
        >
          <option value="1:00 pm">1:00 pm</option>
          <option value="1:30 pm">1:30 pm</option>
          <option value="2:00 pm">2:00 pm</option>
          <option value="2:30 pm">2:30 pm</option>
          <option value="3:00 pm">3:00 pm</option>
          <option value="3:30 pm">3:30 pm</option>
          <option value="4:00 pm">4:00 pm</option>
          <option value="4:30 pm">4:30 pm</option>
          <option value="5:00 pm">5:00 pm</option>
          <option value="5:30 pm">5:30 pm</option>
          <option value="6:00 pm">6:00 pm</option>

        </select>

        <br />

        <input className="btn" type="submit" />
      </form>
    </div>
  );
}

export default AppointmentForm;