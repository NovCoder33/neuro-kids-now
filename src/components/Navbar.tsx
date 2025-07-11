import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="./">Contact</Link>
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
        <img onClick={() => navigate(`./`)} src={logo} alt="logo-img" />
      </ul>
    </nav>
  );
};

export default Navbar;
