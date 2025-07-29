import impact1 from "../assets/impactimg1.jpg";
import impact2 from "../assets/impactimg2.jpg";
import impact3 from "../assets/impactimg3.jpg";
import "./OurImpact.css";
const OurImpact = () => {
  return (
    <div className="impact">
      <h1>Our Impact</h1>
      <div className="impact-images">
        <img src={impact1}></img>
        <img src={impact2}></img>
        <img src={impact3}></img>
      </div>
      <div className="impact-texts">
        <div className="impact-text">
          <p>We have raised</p>
          <h1 className="bolded">STATISTIC</h1>
          <p>dollars</p>
        </div>
        <div className="impact-text">
          <p>We have donated</p>
          <h1 className="bolded">STATISTIC</h1>
          <p>toys/gifts</p>
        </div>
        <div className="impact-text">
          <p>We have donated to</p>
          <h1 className="bolded">STATISTIC</h1>
          <p>hospitals</p>
        </div>
        <div className="impact-text">
          <p>We have made</p>
          <h1 className="bolded">STATISTIC</h1>
          <p>neuro kids smile</p>
        </div>
      </div>
    </div>
  );
};
export default OurImpact;
