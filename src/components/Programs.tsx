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
            We collect and donate brand-new, non-violent, non-latex toys, books,
            and board games to pediatric neurology units at partner hospitals
            like Cincinnati Children’s. These items are carefully selected to
            offer cognitive stimulation, sensory engagement, and emotional
            comfort to kids battling neurological conditions. We prioritize
            educational materials that can be enjoyed from hospital beds or
            therapy rooms.
          </p>
        </div>
        <img src={toyImage} alt="toybooksprogramimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Cards & Crafts</h1>
          <p>
            Volunteers of all ages create uplifting handmade cards, digital
            e-cards, and simple craft kits that are delivered to children in
            neurology wards. Every message is reviewed to ensure it’s
            trauma-informed, cheerful, and inclusive. These cards are
            distributed during holidays, awareness months, or alongside care
            packages to offer a personal touch and brighten a child’s day.
          </p>
        </div>
        <img src={cardsCraft} alt="cardscraftsimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Patient Pen Pal</h1>
          <p>
            This program allows volunteers to connect with children in hospitals
            through written letters and pre-recorded video messages. These
            interactions are designed to ease isolation, celebrate milestones,
            and offer friendship. Volunteers are trained to be age-appropriate,
            empathetic, and sensitive to patients’ medical conditions and
            privacy.
          </p>
        </div>
        <img src={penPal} alt="interactionsimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Care Packages</h1>
          <p>
            We deliver customized care packages to children undergoing long-term
            treatments. Each package includes a thoughtful mix of sensory toys,
            books, cozy items like socks or fidget tool(s), and handmade notes.
            When possible, packages are tailored to a child’s age, diagnosis,
            and interests, based on information provided by hospital partners or
            families.
          </p>
        </div>
        <img src={carePackage} alt="carepackageimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Hospital Resources</h1>
          <p>
            We identify and support under-resourced pediatric neurology units by
            assessing and donating essential medical supplies, therapy
            equipment, and accessibility tools. This may include EEG caps or
            adaptive seating tools. We collaborate with hospital staff to ensure
            every item meets regulatory standards and local needs.
          </p>
        </div>
        <img src={interactions} alt="hospitalimg" />
      </div>
    </div>
  );
};

export default Programs;
