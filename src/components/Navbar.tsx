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
          <Link
            style={{ fontFamily: "Montserrat", fontWeight: "bolder" }}
            to="./volunteer"
          >
            DONATE
          </Link>
        </li>
        <div className="vertical"></div>

        <li>
          <Link
            style={{ fontFamily: "Montserrat", fontWeight: "bolder" }}
            to="./"
          >
            CONTACT
          </Link>
        </li>
        <div className="vertical"></div>
        <li>
          <Link
            style={{ fontFamily: "Montserrat", fontWeight: "bolder" }}
            to="./Volunteer"
          >
            GET INVOLVED
          </Link>
        </li>
        <div className="vertical"></div>
        <li>
          <Link
            style={{ fontFamily: "Montserrat", fontWeight: "bolder" }}
            to="./WhoWeAre"
          >
            OUR IMPACT
          </Link>
        </li>
        <div className="vertical"></div>
        <li>
          <Link
            style={{ fontFamily: "Montserrat", fontWeight: "bolder" }}
            to="./Programs"
          >
            PROGRAMS
          </Link>
        </li>
        <div className="vertical"></div>
        <li>
          <Link
            style={{ fontFamily: "Montserrat", fontWeight: "bolder" }}
            to="./WhoWeAre"
          >
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
