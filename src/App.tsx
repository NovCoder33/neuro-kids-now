import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Volunteer from "./components/Volunteer";
import WhoWeAre from "./components/WhoWeAre";
import Programs from "./components/Programs";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import "./App.css";
import Donate from "./components/Donate";
import OurImpact from "./components/OurImpact";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/Programs" element={<Programs />}></Route>
        <Route path="/Volunteer" element={<Volunteer />}></Route>
        <Route path="/WhoWeAre" element={<WhoWeAre />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Donate" element={<Donate />}></Route>
        <Route path="/OurImpact" element={<OurImpact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
