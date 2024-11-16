import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import FacilityNav from "../components/FacilityNav";

// Importing images
import HeroImage from "../assets/hero.jpg"; // Image for the main section
import SectionImage1 from "../assets/hero.jpg"; // Placeholder image for the sections
import SectionImage2 from "../assets/hero.jpg";
import SectionImage3 from "../assets/hero.jpg";

function Parkir() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/*HeaderSection */}
      <HeaderSection title="FASILITAS PEMANCINGAN LIBERTY" />

      {/*FacilityNav */}
      <FacilityNav />

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto py-8 px-4 space-y-10">
        {/* Penyewaan Alat Pancing Section */}

        {/* Section: Informasi Kolam Pemancingan */}
        <section className="bg-[#183262] shadow-md overflow-hidden flex">
          <img
            src={SectionImage1}
            alt="Kolam Pemancingan di Fasilitas Liberty"
            className="w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-4xl font-bold mb-2 text-white">Kolam Ikan 1</h2>
            <p className="text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section id="sewa" className="bg-white shadow-md overflow-hidden flex">
          <div className="p-6 flex-1">
            <h2 className="text-4xl font-bold mb-2">Kolam Ikan 2</h2>
            <p className="text-lg text-gray-700">
              Menyediakan beragam alat pancing lengkap untuk memenuhi kebutuhan
              Anda selama memancing di kolam kami. Harga terjangkau dan kualitas
              alat yang baik, menjadikan pengalaman memancing Anda lebih
              menyenangkan.
            </p>
          </div>
          <img
            src={HeroImage}
            alt="Penyewaan alat pancing tersedia di lokasi"
            className="w-1/2 object-cover"
          />
        </section>

        {/* Section: Resto */}
        <section className="bg-[#183262] shadow-md overflow-hidden flex">
          <img
            src={SectionImage2}
            alt="Kolam Pemancingan di Fasilitas Liberty"
            className="w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-4xl font-bold mb-2 text-white">Kolam Ikan 3</h2>
            <p className="text-lg text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        <section id="sewa" className="bg-white shadow-md overflow-hidden flex">
          <div className="p-6 flex-1">
            <h2 className="text-4xl font-bold mb-2">Kolam Ikan 4</h2>
            <p className="text-lg text-gray-700">
              Menyediakan beragam alat pancing lengkap untuk memenuhi kebutuhan
              Anda selama memancing di kolam kami. Harga terjangkau dan kualitas
              alat yang baik, menjadikan pengalaman memancing Anda lebih
              menyenangkan.
            </p>
          </div>
          <img
            src={SectionImage3}
            alt="Penyewaan alat pancing tersedia di lokasi"
            className="w-1/2 object-cover"
          />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Parkir;
