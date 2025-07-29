import logo from "../assets/aboutlogo.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src={logo}></img>
        <div className="footer-text">
          <p>© 2025 Neuro Kids Now. All rights reserved.</p>
          <p>Neuro Kids Now is a 501(c)(3) non-profit organization.</p>
          <p>EIN #33-2156147</p>
          <div className="footer-text-links">
            <a href="www.google.com" target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="www.google.com" target="_blank" rel="noopener noreferrer">
              FAQ
            </a>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <a href="www.google.com" target="_blank" rel="noopener noreferrer">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div className="image-link">
          <img src={instagram}></img>
          <img src={facebook}></img>
          <p>Follow Us</p>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link className="link" to="./WhoWeare">
                About
              </Link>
            </li>
            <li>
              <Link className="link" to="./Programs">
                Programs
              </Link>
            </li>
            <li>
              <Link className="link" to="./WhoWeAre">
                Our Impact
              </Link>
            </li>
            <li>
              <Link className="link" to="./Volunteer">
                Get Involved
              </Link>
            </li>
            <li>
              <Link className="link" to="./Contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className="link" to="./Donate">
                Donate
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
