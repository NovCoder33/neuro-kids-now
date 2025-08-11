import "./Volunteer.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/hero.png";
import img3 from "../assets/img3.jpg";

const Volunteer = () => {
  return (
    <div className="volunteer">
      <h1> Get Involved</h1>
      <div className="v-hero">
        <div className="v-sec">
          <button>START A CHAPTER</button>
          <img src={img1}></img>
        </div>
        <div className="v-sec">
          <button>BECOME A VOLUNTEER</button>
          <img src={img2}></img>
        </div>
        <div className="v-sec">
          <button>LEADERSHIP TEAM</button>
          <img src={img3}></img>
        </div>
      </div>
      <div className="gold-body">
        <p>
          Want to make a real impact? Neuro Kids Now is powered by passionate
          teens and young adults who care about kids with neurological
          conditions. You can get involved by starting a chapter in your
          community, joining our leadership team, or volunteering for one of our
          programs—whether that’s packing care packages, running donation
          drives, or helping spread awareness. We make it easy to get started,
          and you’ll get service hours, leadership experience, and the chance to
          be part of something that truly matters.
        </p>
        <div className="gold-body-text">
          <h1>Want to see real examples of youth-led impact in action?</h1>
          <h1>
            Check out our{" "}
            <a
              href="https://www.instagram.com/neurokidsnow_"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            !
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
