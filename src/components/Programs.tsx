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
            We collect and donate new toys, books, and games to bring comfort,
            joy, and stimulation to kids in hospitals and neurology units.
          </p>
        </div>
        <img src={toyImage} alt="toybooksprogramimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Cards & Crafts</h1>
          <p>
            Volunteers create handmade cards or e-cards with uplifting messages
            to deliver smiles and support to pediatric patients during their
            toughest days.
          </p>
        </div>
        <img src={cardsCraft} alt="cardscraftsimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Hospital Resources</h1>
          <p>
            We work to increase global access to treatment by delivering
            essential hospital equipment to under-resourced pediatric neurology
            units.
          </p>
        </div>
        <img src={interactions} alt="hospitalimg" />
      </div>

      <div className="programTile">
        <div className="programText">
          <h1>Patient Pen Pal</h1>
          <p>
            Through virtual visits and letters, we foster positive social
            interactions between volunteers and patients to alleviate isolation
            and foster connections.
          </p>
        </div>
        <img src={penPal} alt="interactionsimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Care Packages</h1>
          <p>
            We curate and deliver personalized care packages filled with
            comforting items to support children during long hospital stays or
            treatments.
          </p>
        </div>
        <img src={carePackage} alt="carepackageimg" />
      </div>
    </div>
  );
};

export default Programs;
