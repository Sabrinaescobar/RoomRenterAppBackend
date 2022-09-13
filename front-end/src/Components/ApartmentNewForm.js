import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ApartmentNewForm() {

  let navigate = useNavigate();

  const addApartment = (newApartment) => {
    axios
        .post(`${API}/apartments`, newApartment)
        .then(
            () => {
                navigate(`/apartments`);
            },
            (error) => console.error(error)
        )
        .catch((c) => console.warn("catch", c));
  };

  const [apartment, setApartment] = useState({
    typeof_place: "",
    image: "",
    price: 0,
    location: "",
    phone_number: 0,
    amenities: "",
    children_allow: false,
    pets_allow: false,
  });

  const handleTextChange = (event) => {
    setApartment({ ...apartment, [event.target.id]: event.target.value });
  };
  const handleNumberChange = (event) => {
    setApartment({ ...apartment, [event.target.id]: event.target.value });
  };

  const handleSelectChange = (event) => {
    setApartment({ ...apartment, [event.target.id]: event.target.value }); 
  };

  const handleCheckboxChange = () => {
    setApartment({ ...apartment, children_allow: !apartment.children_allow });
  };

  const handleCheckboxChange2 = () => {
    setApartment({ ...apartment, pets_allow: !apartment.pets_allow });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (apartment.typeof_place === ""){
      alert("Please select the type of place that you are renting")
    } else{
    addApartment(apartment)
    }
  };
  return (
    <div className="mb-3">
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="typeof_place">Select Type of Place:</label>
        <select id="typeof_place" onChange={handleSelectChange}>
          <option value=""></option>
          <option value="1 bedroom apartment">1 bedroom apartment</option>
          <option value="2 bedroom apartment">2 bedroom apartment</option>
          <option value="3 bedroom apartment">3 bedroom apartment</option>
          <option value="4 bedroom apartment">4 bedroom Apartment</option>
          <option value="Studio">Studio</option>
          <option value="Room">Room</option>
        </select>
        <br/>
        <label className="form-label" htmlFor="image">Image URL:</label>
        <input
        className="form-control"
          id="image"
          type="text"
          pattern="http[s]*://.+"
          value={apartment.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        <br/>
        <label className="form-label" htmlFor="price">Price per month:</label>
        <input
        className="form-control"
          id="price"
          type="number"
          name="price"
          value={apartment.price}
          onChange={handleNumberChange}
        />
        <br/>
         <label className="form-label" htmlFor="location">Location:</label>
        <input
        className="form-control"
          id="location"
          type="text"
          name="location"
          value={apartment.location}
          onChange={handleTextChange}
        />
        <br/>
         <label className="form-label" htmlFor="phoneNumber">Phone Number:</label>
        <input
        className="form-control"
          id="phone_number"
          type="number"
          name="phoneNumber"
          value={apartment.phone_number}
          onChange={handleNumberChange}
        />
        <br />
        <label className="form-label" htmlFor="amenities">Amenities:</label>
        <input
        className="form-control"
          id="amenities"
          type="text"
          name="amenities"
          value={apartment.amenities}
          onChange={handleTextChange}
        />
        <br />
        <label className="form-label" htmlFor="children">Are children allow?</label>
        <input
          id="children"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={apartment.children_allow}
        />
        <br />
        <label className="form-label" htmlFor="pets">Are pets allow?</label>
        <input
          id="pets"
          type="checkbox"
          onChange={handleCheckboxChange2}
          checked={apartment.pets_allow}
        />
        <br />
        <input className="btn" type="submit" />
      </form>
    </div>
  );
}

export default ApartmentNewForm;