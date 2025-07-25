import "./Hero.css";

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
      <p></p>
    </div>
  );
};

export default Hero;
