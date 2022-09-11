import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = process.env.REACT_APP_API_URL;

function ApartmentEditForm() {
  let { id } = useParams();
  let navigate = useNavigate();

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

  const updateApartment = (updatedApartment) => {
    axios
      .put(`${API}/apartments/${id}`, updatedApartment)
      .then(
        () => {
          navigate(`/apartments`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

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


  useEffect(() => {
    axios.get(`${API}/apartments/${id}`).then(
      (response) => setApartment(response.data.payload),
      (error) => navigate(`/not-found`)
    );
  }, [id, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateApartment(apartment, id);
  };
  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label className="form-label" htmlFor="typeof_place">Type of Place:</label>
        <select 
        className="form"
        id="typeof_place" 
        value={apartment.typeof_place} 
        onChange={handleSelectChange}
        >
          <option value="Apartment">Apartment</option>
          <option value="Studio">Studio</option>
          <option value="Room">Room</option>
        </select>
        <br />
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
          id="phoneNumber"
          type="number"
          name="phone_Number"
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
       <br/>
        <label className="form-label" htmlFor="pets">Are pets allow?</label>
        <input
          id="pets"
          type="checkbox"
          onChange={handleCheckboxChange2}
          checked={apartment.pets_allow}
        />
        <br />
       
        <input className="btn " type="submit" />
      </form>
      <div >
      <Link to={`/apartments/${id}`}>
        <button className="btn">Nevermind!</button>
      </Link>
      </div>
      </div>
  );
}

export default ApartmentEditForm;