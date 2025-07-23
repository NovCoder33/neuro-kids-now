import "./Volunteer.css";
import toyImage from "../assets/toyscrafts.jpg";

const Volunteer = () => {
  return (
    <div>
      <div className="volunteer-hero">
        <h1>Get Involved</h1>
        <div className="volunteer-hero-content">
          <div className="volunteer-hero-card">
            <img src={toyImage} alt="placeholder"></img>
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/1hHw6GMFzMKns828143kUZ4J36J9rAR6TN7Z8nqKhze8/edit"
                )
              }
            >
              Become a Volunteer
            </button>
          </div>
          <div className="volunteer-hero-card">
            <img src={toyImage} alt="placeholder"></img>
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/1JdMGGFqd6vru-175CdLMwohuPDl1yGdlpmySoJONhnw/edit#response=ACYDBNgarqa6BY6YDonmy1QSm_D2OFGg_hI0c2-F8RqXhSfrmCIvBSYs-va_MVX1ITVLeQw"
                )
              }
            >
              Start a Chapter
            </button>
          </div>
          <div className="volunteer-hero-card">
            <img src={toyImage} alt="placeholder"></img>
            <button
              onClick={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSfYHZke8QmIHSF6lBscPLU6fktXU7c9I1CpuikKabM8WLohww/viewform?usp=header"
                )
              }
            >
              Be a Leader
            </button>
          </div>
        </div>
      </div>
      <div className="volunteer-content">
        <div className="volunteer-content-card">
          <h1> Become a Volunteer </h1>
          <p>
            At NeuroKidsNow, our volunteers are the heart of everything we do.
            By becoming a volunteer, you’ll help create meaningful experiences
            for children with neurological disabilities — whether that’s through
            mentoring, organizing events, or simply being a supportive presence.
            Your time and compassion can help build confidence, joy, and
            opportunities for kids who need it most. Join us and see how your
            small actions can create lasting change in their lives.
          </p>
        </div>
        <div className="volunteer-content-card">
          <h1> Start a Chapter </h1>
          <p>
            You can help bring NeuroKidsNow to your own community by starting a
            chapter! We’ll guide you every step of the way as you establish a
            local hub of support and resources for children with neurological
            disabilities and their families. A chapter allows you to organize
            events, foster connections, and spread awareness in a way that’s
            tailored to the unique needs of your area. By starting a chapter,
            you become a catalyst for inclusion and hope right where you live.
          </p>
        </div>
        <div className="volunteer-content-card">
          <h1> Be a Leader </h1>
          <p>
            At NeuroKidsNow, we believe leadership comes from passion and
            purpose. When you step up to be a leader in our organization, you
            have the chance to inspire others, shape programs, and advocate for
            kids with neurological disabilities. Leaders help us grow our
            mission by organizing teams, speaking up for inclusivity, and
            driving new initiatives that open doors for children who face unique
            challenges. Use your voice and your vision to help guide the way
            forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;
