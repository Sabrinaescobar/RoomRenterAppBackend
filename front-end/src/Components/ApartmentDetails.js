import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Appointments from "./Appointments";

function ApartmentDetails() {
  const [apartment, setApartment] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.get(`${API}/apartments/${id}`).then((response) => {
      setApartment(response.data.payload);
    });
  }, [id, navigate, API]);
  const deleteApartment = () => {
    axios
      .delete(`${API}/apartments/${id}`)
      .then(() => {
        navigate(`/apartments`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteApartment();
  };
  return (
    <>
      <article>
        <h3>{apartment.typeof_place}</h3>
        <div>
          <img src={apartment.image} width="300px" height="300px" alt={apartment.typeof_place}/>
        <h5>Price per month: {apartment.price}</h5>
        <h5>Location: {apartment.location}</h5>
        <h5>Phone Number: {apartment.phone_number}</h5>
        <h5>Amenities: {apartment.amenities}</h5>
        <div>Are children allow? { apartment.children_allow ? <h5>Yes</h5> : <h5>No</h5>}</div>
        <div>Are Pets allow? { apartment.pets_allow ? <h5>Yes</h5> : <h5>No</h5>}</div>
        </div>
        
        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/apartments`}>
              <button className="btn">Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/apartments/${id}/edit`}>
              <button className="btn">Edit</button>
            </Link>
          </div>
          <div>
            <button className="btn" onClick={handleDelete}>Delete</button>
          </div>
        </div>
        <Appointments />
      </article>
    </>
  );
}

export default ApartmentDetails;