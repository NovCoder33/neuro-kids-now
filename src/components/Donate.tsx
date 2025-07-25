import penPal from "../assets/patientpenpal.jpeg";
import "./Donate.css";

const Donate = () => {
  return (
    <div className="donate">
      <div className="content">
        <h1> Donate now. </h1>
        <p>
          At NeuroKidsNow, we believe every child with a neurological disability
          deserves the chance to thrive. Your donation helps us provide
          essential resources, therapies, educational support, and community
          programs tailored to the unique needs of each child and their family.
          Whether it’s helping a child find their voice, supporting parents
          through a new diagnosis, or funding adaptive technologies, your
          contribution has a direct and lasting impact. Join us in empowering
          these incredible kids—because every step forward starts with people
          like you.
        </p>
        <a
          href="https://gofund.me/269c775d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button> Donate </button>
        </a>
      </div>
      <div className="images">
        <img src={penPal}></img>
      </div>
    </div>
  );
};

export default Donate;
