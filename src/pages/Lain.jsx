import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import FacilityNav from "../components/FacilityNav";

// Importing images
import GambarParkir from "../assets/parkiran.jpg"; // Placeholder image for the main section
import Toilet from "../assets/toilet.jpg";

function Parkir() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* HeaderSection */}
      <HeaderSection title="FASILITAS LAIN" />

      {/* FacilityNav */}
      <FacilityNav />

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto py-8 px-4 space-y-10">
        {/* Section: Kolam Mas */}
        <section className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row-reverse">
          <div className="p-6 flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Parkiran</h2>
            <p className="text-sm md:text-lg text-gray-700">
              Area parkir yang luas tersedia untuk kendaraan roda dua dan roda
              empat, dengan kapasitas mencapai 100 orang. Lokasi parkir berada
              dekat dengan kolam pemancingan untuk memudahkan akses pengunjung.
            </p>
          </div>
          <img
            src={GambarParkir}
            alt="Penyewaan alat pancing tersedia di lokasi"
            className="w-full md:w-1/2 object-cover"
          />
        </section>

        {/* Section: Informasi Kolam Pemancingan */}
        <section className="bg-[#183262] shadow-md overflow-hidden flex flex-col md:flex-row">
          <div className="p-6 flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">
              Toilet
            </h2>
            <p className="text-sm md:text-lg text-gray-300">
              Tersedia fasilitas toilet bersih dan nyaman yang tersebar di
              sekitar area pemancingan. Toilet dilengkapi dengan air bersih,
              untuk menunjang kenyamanan pengunjung.
            </p>
          </div>
          <img
            src={Toilet}
            alt="Kolam Pemancingan di Fasilitas Liberty"
            className="w-full md:w-1/2 object-cover"
          />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Parkir;
