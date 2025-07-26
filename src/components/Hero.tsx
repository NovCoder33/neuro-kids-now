import "./Hero.css";
import Program from "./Program";

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
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h1>Neuro Kids Now</h1>
          <p>Neurodiverse. Nurtured. Now.</p>
          <div className="hero-buttons">
            <button> Support </button>
            <button> Learn More </button>
          </div>
        </div>
      </div>

      <div className="home-content">
        <h1>Our Mission</h1>
        <p>
          Neuro Kids Now is a youth led nonprofit that empowers kids with
          neurological conditions to embrace their childhood with confidence,
          creativity, and joy 💛💜🧠
        </p>
        <h1>Our Programs</h1>
        <div className="programs-bar">
          {PROGRAMS.map((program) => (
            <Program name={program.name} color={program.color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
