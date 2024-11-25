import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Services from "./components/Services";
import Navbar from "./components/Navbar";

// "react-router-dom", "Route", "path", "Routes", "element"

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Navbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
