import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Facility from "../components/Facility";
import Gallery from "../components/Gallery";
import Review from "../components/Review";
import QuickRes from "../components/QuickRes";
import Footer from "../components/Footer";

function Beranda() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Facility />
      <Gallery />
      <Review />
      <QuickRes />
      <Footer />
    </div>
  );
}

export default Beranda;
