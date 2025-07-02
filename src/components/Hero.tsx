import "./Hero.css";
import hero from "../assets/hero.jpg";
const Hero = () => {
  return (
    <div className="img-wrapper">
      <img src={hero} alt="hero-image" />
      <h1>Neuro kids now</h1>
      <h2>Neurodiverse. Nutured. Now</h2>
      <div className="hero-buttons">
        <button> Support </button>
        <button> Learn More</button>
      </div>
    </div>
  );
};

export default Hero;
