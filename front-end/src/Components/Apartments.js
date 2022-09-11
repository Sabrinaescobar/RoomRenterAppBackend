import axios from "axios";
import { useState, useEffect } from "react";
import Apartment from "./Apartment";


const API = process.env.REACT_APP_API_URL;

function Apartments() {
  const [apartments, setApartments] = useState([])

  useEffect(() => {
    axios
      .get(`${API}/apartments`)
      .then((response) => setApartments(response.data.payload))
      .catch((c) => console.warn("catch", c));
  }, []);

  return (
    <div className="Apartments">
        <section className="item">
            {apartments.map((apartment) => {
              return <Apartment key={apartment.id} apartment={apartment} />;
            })}
        </section>
      </div>
  );
}

export default Apartments;