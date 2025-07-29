import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./Navbar.css";
const Navbar = () => {
  const nav = useNavigate();
  const navClass = useRef<HTMLElement>(null);

  const showNavBar = () => {
    console.log(navClass.current);
    if (navClass.current) {
      navClass.current.classList.toggle("responsive_nav");
    }
  };
  return (
    <div className="navbar">
      <header>
        <div className="horz-top"></div>
        <div className="nav-content">
          <img src={Logo} onClick={() => nav("./")}></img>
          <nav ref={navClass}>
            <Link onClick={() => showNavBar()} className="link" to="./WhoWeAre">
              About
            </Link>
            <div className="vert"></div>
            <Link onClick={() => showNavBar()} className="link" to="./Programs">
              Programs
            </Link>
            <div className="vert"></div>
            <Link
              onClick={() => showNavBar()}
              className="link"
              to="./OurImpact"
            >
              Our Impact
            </Link>
            <div className="vert"></div>
            <Link
              onClick={() => showNavBar()}
              className="link"
              to="./Volunteer"
            >
              Get Involved
            </Link>
            <div className="vert"></div>
            <Link onClick={() => showNavBar()} className="link" to="./Contact">
              Contact
            </Link>
            <div className="vert"></div>
            <Link onClick={() => showNavBar()} className="link" to="./Donate">
              DONATE
            </Link>
            <div className="vert"></div>
            <button
              onClick={() => showNavBar()}
              className="nav-btn nav-close-btn"
            >
              <FaTimes />
            </button>
          </nav>
          <button onClick={() => showNavBar()} className="nav-btn">
            <FaBars />
          </button>
        </div>
        <div className="horz-bottom"></div>
      </header>
    </div>
  );
};

export default Navbar;
