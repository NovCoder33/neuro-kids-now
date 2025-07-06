import "./Hero.css";
import hero from "../assets/hero.png";
import Program from "./Program";
import Button from "./Button";
const PROGRAMS = [
  {
    name: "Hospital Resources",
    color: "rgb(248, 134, 195)",
  },
  {
    name: "Cards/Crafts",
    color: "rgb(143, 134, 248)",
  },
  {
    name: "Toys/Books",
    color: "rgb(172, 134, 248)",
  },
  {
    name: "Patient Interactions",
    color: "rgb(143, 134, 248)",
  },
  {
    name: "Care Package",
    color: "rgb(248, 134, 195)",
  },
];
const Hero = () => {
  return (
    <div className="hero-content">
      <div className="img-wrapper">
        <img src={hero} alt="hero-image" />
        <h1>Neuro kids now</h1>
        <h2>Neurodiverse. Nutured. Now</h2>
        <div className="hero-buttons">
          <Button location="Volunteer">Support</Button>
          <Button location="WhoWeAre">Learn More</Button>
        </div>
      </div>
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Neuro Kids Now is a youth led nonprofit that empowers kids with
          neurological conditions to embrace their childhood with confidence,
          creativity, and joy 💛💜🧠
        </p>
      </div>
      <div className="our-programs">
        <h1>Our Programs</h1>
        <div className="programs">
          {PROGRAMS.map((program) => (
            <Program name={program.name} color={program.color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
