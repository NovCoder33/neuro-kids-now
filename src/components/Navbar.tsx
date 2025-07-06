import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
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
        <img src={logo} alt="logo-img" />
      </ul>
    </nav>
  );
};

export default Navbar;
