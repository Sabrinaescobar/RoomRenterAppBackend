import { Link } from "react-router-dom";

function Apartment({ apartment }) {
  return (
    <div className="Apartment">
      <Link to={`/apartments/${apartment.id}`}>
      <span>
        <img src={apartment.image} alt={apartment.typeof_place} width='200px' height='200px' />
      </span>
      <br></br>
      <span>
      <h4 className="type">
        {`${apartment.typeof_place}`}</h4>
        </span>
        <span>
            {`$${apartment.price}`}
        </span>
        </Link>
    </div>
  );
}

export default Apartment;