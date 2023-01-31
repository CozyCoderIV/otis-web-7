import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Resume from "./pages/resume/Resume";
import DigitalArt from "./pages/digitalart/DigitalArt";

function App() {
  return (
    <div className="night App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/digital_art" element={<DigitalArt />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
