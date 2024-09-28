import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import TravelInsight from "./Pages/TravelInsight";
import Layout from "./Pages/Layout";
import './index.css'
import NoPageFound from "./Pages/NoPage";
const SafariLanding: React.FC = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout />} />
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />
    <Route path="contact" element={<Contact />} />
    <Route path="travelInsight" element={<TravelInsight />} />
    <Route path="*" element={<NoPageFound />} />
    </Routes>
    </BrowserRouter>
  );
};

export default SafariLanding;

