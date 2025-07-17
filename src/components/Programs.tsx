import "./Programs.css";
import toyImage from "../assets/toyscrafts.jpg";
import cardsCraft from "../assets/cardscrafts.jpg";
import interactions from "../assets/hospitalinteractions.jpg";
import carePackage from "../assets/carepackages.jpeg";
import penPal from "../assets/patientpenpal.jpeg";
const Programs = () => {
  return (
    <div className="programs">
      <h1>Our Programs</h1>
      <div className="programTile">
        <div className="programText">
          <h1>Toys & Books</h1>
          <p>
            We collect and donate brand-new, non-violent, non-latex<br></br>
            toys, books, and board games to pediatric neurology units<br></br>at
            partner hospitals like Cincinnati Children’s. These items<br></br>
            are carefully selected to offer cognitive stimulation, sensory
            <br></br>engagement, and emotional comfort to kids battling<br></br>
            neurological conditions. We prioritize educational materials
            <br></br>that can be enjoyed from hospital beds or therapy rooms.
          </p>
        </div>
        <img src={toyImage} alt="toybooksprogramimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Cards & Crafts</h1>
          <p>
            Volunteers of all ages create uplifting handmade cards,<br></br>
            digital e-cards, and simple craft kits that are delivered to
            <br></br>children in neurology wards. Every message is reviewed
            <br></br>to ensure it’s trauma-informed, cheerful, and inclusive.
            <br></br>These cards are distributed during holidays, awareness
            <br></br>months, or alongside care packages to offer a personal
            <br></br>touch and brighten a child’s day.
          </p>
        </div>
        <img src={cardsCraft} alt="cardscraftsimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Patient Pen Pal</h1>
          <p>
            This program allows volunteers to connect with children<br></br>in
            hospitals through written letters and pre-recorded video<br></br>
            messages. These interactions are designed to ease isolation,
            <br></br>celebrate milestones, and offer friendship. Volunteers are
            <br></br>trained to be age-appropriate, empathetic, and sensitive to
            <br></br>patients’ medical conditions and privacy.
          </p>
        </div>
        <img src={penPal} alt="interactionsimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Care Packages</h1>
          <p>
            We deliver customized care packages to children undergoing<br></br>
            long-term treatments. Each package includes a thoughtful mix
            <br></br>of sensory toys, books, cozy items like socks or fidget
            tool(s),<br></br>and handmade notes. When possible, packages are
            tailored<br></br>to a child’s age, diagnosis, and interests, based
            on information<br></br>provided by hospital partners or families.
          </p>
        </div>
        <img src={carePackage} alt="carepackageimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Hospital Resources</h1>
          <p>
            We identify and support under-resourced pediatric neurology<br></br>
            units by assessing and donating essential medical supplies,<br></br>
            therapy equipment, and accessibility tools. This may include
            <br></br>EEG caps or adaptive seating tools. We collaborate with
            <br></br>hospital staff to ensure every item meets regulatory
            standards<br></br>and local needs.
          </p>
        </div>
        <img src={interactions} alt="hospitalimg" />
      </div>
    </div>
  );
};

export default Programs;
