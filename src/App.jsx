import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/ContactForm";
import About from "./pages/About";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verify from "./pages/Verify";

import AppDeepLinkHandler from "./components/AppDeepLinkHandler";

function App() {
  return (
    <Router>
      <AppDeepLinkHandler />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
