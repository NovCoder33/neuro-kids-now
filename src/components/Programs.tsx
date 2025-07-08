import "./Programs.css";
import toyImage from "../assets/toybooks.png";
import cardsCraft from "../assets/cardscrafts.jpg";
import hospital from "../assets/hospital.jpg";
import interactions from "../assets/interactions.jpg";
import carePackage from "../assets/snoopy.png";
const Programs = () => {
  return (
    <div className="prgms">
      <h1>Our Programs</h1>
      <div className="programTile">
        <div className="programText">
          <h1>Toys/Books Program</h1>
          <p>
            We collect and donate new toys, books, and games to bring comfort,
            joy, and stimulation to kids in hospitals and neurology units.
          </p>
        </div>
        <img src={toyImage} alt="toybooksprogramimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Cards/Crafts Program</h1>
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
          <h1>Hospital Resources Program</h1>
          <p>
            We work to increase global access to treatment by delivering
            essential hospital equipment to under-resourced pediatric neurology
            units.
          </p>
        </div>
        <img src={hospital} alt="hospitalimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Patient Interactions Program</h1>
          <p>
            Through virtual visits and letters, we foster positive social
            interactions between volunteers and patients to alleviate isolation
            and foster connections.
          </p>
        </div>
        <img src={interactions} alt="interactionsimg" />
      </div>
      <div className="programTile">
        <div className="programText">
          <h1>Care Package Program</h1>
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
