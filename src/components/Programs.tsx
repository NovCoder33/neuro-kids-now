import "./Programs.css";
import img1 from "../assets/img.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img4.png";
import img4 from "../assets/img5.png";
import img5 from "../assets/hospital.jpg";

const Programs = () => {
  return (
    <div className="programs">
      <h1>Our Programs</h1>
      <div className="program-hero">
        <div className="program-sec">
          <button>Toys/Books</button>
          <img src={img1}></img>
        </div>
        <div className="program-sec">
          <button>Cards/Crafts</button>
          <img src={img2}></img>
        </div>
        <div className="program-sec">
          <button>Care Packages</button>
          <img src={img3}></img>
        </div>
        <div className="program-sec">
          <button>Patient Pen Pal</button>
          <img src={img4}></img>
        </div>
        <div className="program-sec">
          <button>Hospital Recources</button>
          <img src={img5}></img>
        </div>
      </div>
      <div className="gold-body-programs">
        <p>
          At Neuro Kids Now, we created these programs to support kids with
          neurological conditions who often face long hospital stays, isolation,
          and overwhelming symptoms. Many of these children are neurodivergent
          and experience challenges like anxiety, sensory sensitivity, and
          communication barriers. Through care packages, letters, crafts, and
          community support, our programs are designed to bring comfort,
          connection, and joy to kids who may feel forgotten in the hospital
          system. We believe every child deserves to feel seen, supported, and
          celebrated—especially during tough times!
        </p>
      </div>
    </div>
  );
};

export default Programs;
