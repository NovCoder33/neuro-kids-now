import logo from "../assets/aboutlogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <hr></hr>
      <div className="footer-content">
        <img src={logo}></img>

        <div className="footer-text">
          <p>© 2025 Neuro Kids Now. All rights reserved. </p>
          <p>Neuro Kids Now is a 501(c)(3) non-profit organization. </p>
          <p>EIN #33-2156147</p>
          <div className="footer-text-links">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              FAQ
            </a>
            <a
              href="https://www.minecraft.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
        <div className="footer-fancy-links">
          <a href="https://www.instagram.com">
            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
          </a>
          <a href="https://www.facebook.com">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
          <p>Follow us</p>
        </div>
        <div className="footer-links">
          <Link to="./WhoWeAre">About</Link>
          <Link to="./Programs">Programs</Link>
          <Link to="./OurImpact">Our Impact</Link>
          <Link to="./Volunteer">Get Involved</Link>
          <Link to="./Contact">Contact</Link>
          <Link to="./Donate">Donate</Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
