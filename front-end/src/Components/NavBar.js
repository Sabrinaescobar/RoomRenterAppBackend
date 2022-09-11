import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav">
     <Link to="/"><img src="https://smccd.edu/housing/images/Rent%20Graphic.jpeg" alt="logo" width={100} height={100}></img></Link>
      <h1>
      <Link to="/">Apartments and Rooms Renter</Link>
      </h1>
      <ul>
      <button>
        <Link to="/apartments">Places per rent</Link>
      </button>
      <button>
        <Link to="/apartments/new">New Apartment</Link>
      </button>
      </ul>
    </nav>
  );
}