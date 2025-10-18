import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";
import Layout from "./Layout";
import './index.css'


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="resources" element={<Resources />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
