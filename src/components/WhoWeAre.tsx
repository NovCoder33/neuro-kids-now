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
            the lives<br></br> of pediatric patients with neurological
            disorders. Our work focuses on normalizing<br></br> their childhood
            experiences and developing a compassionate community through
            <br></br>our five service programs. We donate cards/crafts,
            toys/books, hospital resources,<br></br>
            dream care packages, and host interactive virtual events! Our
            efforts are driven<br></br> by the commitment of a passionate
            youth-led team, dedicated to making<br></br> a difference and
            empowering their peers.
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
            frustration, and hope.<br></br> Growing up, Shriya saw firsthand
            what it meant for a child to live with a neurological<br></br>
            condition. She watched relatives trade recess for recovery, birthday
            parties for hospital<br></br> rooms, and the ease of childhood for
            something far more complicated. It was<br></br> heartbreaking — not
            just because of the diagnosis, but because of everything it quietly
            <br></br>took away: confidence, connection, and the feeling of being
            understood.
          </p>
          <p>
            As Shriya got older, she realized that what kids with neurological
            conditions often needed<br></br>most wasn’t more sympathy or
            statistics — it was joy. It was a space where they could just
            <br></br>be kids, where their experiences were seen and celebrated
            rather than pitied or ignored.<br></br>She saw the power of art, of
            play, of community — the little things that make childhood<br></br>
            feel real again, even in the middle of something heavy.
          </p>
          <p> So she decided to build it.</p>
          <p>
            Neuro Kids Now started as a small passion project — a few donated
            toys, a book drive,<br></br> and a dream to give neurodivergent kids
            the chance to feel seen, not sidelined. But it grew<br></br>
            quickly. Families started reaching out. Hospitals listened.
            Volunteers joined. The mission<br></br> was clear: to bring joy,
            creativity, and care to kids navigating neurological differences —
            <br></br>not as patients, but as whole people with voices, dreams,
            and potential.
          </p>
          <p>
            Shriya has poured her time, energy, and heart into the organization
            — curating<br></br>sensory-safe toy boxes, organizing inclusive
            events, and building partnerships with<br></br>children’s hospitals
            to ensure that no kid feels forgotten. Every donation, every
            project,<br></br> every volunteer hour is rooted in her original
            vision: a world where neurodivergent kids<br></br>aren’t just
            accommodated — they’re celebrated.
          </p>
          <p>
            For Shriya, this is more than a nonprofit. It’s a promise. A promise
            that no child should have<br></br>to trade their childhood for a
            diagnosis. A promise that even in the middle of medical<br></br>
            chaos, there can still be magic. And a promise that the kids so
            often overlooked will finally<br></br>be put first.
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
