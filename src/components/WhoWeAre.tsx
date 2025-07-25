import "./WhoWeAre.css";
import logo from "../assets/aboutlogo.png";
import aboutus from "../assets/aboutus.png";
import aboutus2 from "../assets/hospital.jpg";
const WhoWeAre = () => {
  return (
    <div className="who-we-are">
      <div className="mission">
        <div className="mission-text">
          <h1>Mission Statement</h1>
          <p>
            Neuro Kids Now (NKN) is a youth-led nonprofit dedicated to improving
            the lives of pediatric patients with neurological disorders. Our
            work focuses on normalizing their childhood experiences and
            developing a compassionate community through our five service
            programs. We donate cards/crafts, toys/books, hospital resources,
            dream care packages, and host interactive virtual events! Our
            efforts are driven by the commitment of a passionate youth-led team,
            dedicated to making a difference and empowering their peers.
          </p>
        </div>
        <img src={logo}></img>
      </div>
      <div className="wave"></div>

      <div className="our-story">
        <div className="story-text">
          <h1>Our Story</h1>
          <p>
            Shriya is the founder of Neuro Kids Now — a project born from love,
            frustration, and hope. Growing up, Shriya saw firsthand what it
            meant for a child to live with a neurological condition. She watched
            relatives trade recess for recovery, birthday parties for hospital
            rooms, and the ease of childhood for something far more complicated.
            It was heartbreaking — not just because of the diagnosis, but
            because of everything it quietly took away: confidence, connection,
            and the feeling of being understood.
          </p>
          <p>
            As Shriya got older, she realized that what kids with neurological
            conditions often neededmost wasn’t more sympathy or statistics — it
            was joy. It was a space where they could just be kids, where their
            experiences were seen and celebrated rather than pitied or
            ignored.She saw the power of art, of play, of community — the little
            things that make childhood feel real again, even in the middle of
            something heavy.
          </p>
          <p> So she decided to build it.</p>
          <br />
          <p>
            Neuro Kids Now started as a small passion project — a few donated
            toys, a book drive, and a dream to give neurodivergent kids the
            chance to feel seen, not sidelined. But it grew quickly. Families
            started reaching out. Hospitals listened. Volunteers joined. The
            mission was clear: to bring joy, creativity, and care to kids
            navigating neurological differences — not as patients, but as whole
            people with voices, dreams, and potential.
          </p>
          <p>
            Shriya has poured her time, energy, and heart into the organization
            — curating sensory-safe toy boxes, organizing inclusive events, and
            building partnerships with children’s hospitals to ensure that no
            kid feels forgotten. Every donation, every project, every volunteer
            hour is rooted in her original vision: a world where neurodivergent
            kids aren’t just accommodated — they’re celebrated.
          </p>
          <p>
            For Shriya, this is more than a nonprofit. It’s a promise. A promise
            that no child should have to trade their childhood for a diagnosis.
            A promise that even in the middle of medical chaos, there can still
            be magic. And a promise that the kids so often overlooked will
            finally be put first.
          </p>
        </div>
        <div className="story-img">
          <img src={aboutus}></img>
          <img src={aboutus2}></img>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
