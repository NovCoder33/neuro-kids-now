import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <hr></hr>
      <ul>
        <li>
          <Link style={{ fontFamily: "Raleway" }} to="./">
            CONTACT
          </Link>
        </li>
        <div className="vertical"></div>
        <li>
          <Link style={{ fontFamily: "Raleway" }} to="./Volunteer">
            GET INVOLVED
          </Link>
        </li>
        <div className="vertical"></div>
        <li>
          <Link style={{ fontFamily: "Raleway" }} to="./WhoWeAre">
            OUR IMPACT
          </Link>
        </li>
        <div className="vertical"></div>
        <li>
          <Link style={{ fontFamily: "Raleway" }} to="./Programs">
            PROGRAMS
          </Link>
        </li>
        <div className="vertical"></div>
        <li>
          <Link style={{ fontFamily: "Raleway" }} to="./WhoWeAre">
            ABOUT
          </Link>
        </li>
        <img onClick={() => navigate(`./`)} src={logo} alt="logo-img" />
      </ul>
      <hr></hr>
    </nav>
  );
};

export default Navbar;
