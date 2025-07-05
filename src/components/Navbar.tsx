import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="./">Home</Link>
        </li>
        <li>
          <Link to="./Programs">Programs</Link>
        </li>
        <li>
          <Link to="./Volunteer">Volunteer</Link>
        </li>
        <li>
          <Link to="./WhoWeAre">Who We Are</Link>
        </li>
        <h1 style={{ color: "white" }}>Neuro kids now</h1>
      </ul>
    </nav>
  );
};

export default Navbar;
