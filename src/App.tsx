import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Volunteer from "./components/Volunteer";
import WhoWeAre from "./components/WhoWeAre";
import Programs from "./components/Programs";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />}></Route>
        <Route path="/Programs" element={<Programs />}></Route>
        <Route path="/Volunteer" element={<Volunteer />}></Route>
        <Route path="/WhoWeAre" element={<WhoWeAre />}></Route>
      </Routes>
    </div>
  );
}

export default App;
