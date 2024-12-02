import React from "react";
import Navbar from "../components/Navbar";
import FullGallery from "../components/FullGallery";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";

function FullGalleryPage() {
  return (
    <div>
      <Navbar />
      <HeaderSection title="GALERI PEMANCINGAN LIBERTY" />

      <FullGallery />
      <Footer />
    </div>
  );
}

export default FullGalleryPage;
