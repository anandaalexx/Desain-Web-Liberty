import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import FacilityNav from "../components/FacilityNav";

// Importing images
import HeroImage from "../assets/hero.jpg"; // Placeholder image for the main section
import SectionImage1 from "../assets/hero.jpg";
import SectionImage2 from "../assets/hero.jpg";
import SectionImage3 from "../assets/hero.jpg";

function Kolam() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* HeaderSection */}
      <HeaderSection title="FASILITAS PEMANCINGAN LIBERTY" />

      {/* FacilityNav */}
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

        {/* Section: Kolam Ikan 3 */}
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

        {/* Section: Jenis Ikan */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-4xl font-medium text-[#183262]">Jenis Ikan</h2>
          </div>
          <div className="flex justify-center">
            <img
              src={require("../assets/back-ikan.png")}
              alt="Jenis Ikan"
              className="w-full object-cover"
            />
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Kolam;
