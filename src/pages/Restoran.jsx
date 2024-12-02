import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection"; // Pastikan path-nya benar
import FacilityNav from "../components/FacilityNav";

// Import gambar
import HeroImage from "../assets/hero.jpg";
import ImageKedua from "../assets/hero.jpg";
import ImageKetiga from "../assets/hero.jpg";

function Restoran() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Bagian Header */}
      <HeaderSection title="FASILITAS PEMANCINGAN LIBERTY" />

      <FacilityNav />

      {/* Bagian Konten Utama */}
      <main className="max-w-7xl mx-auto py-8 px-2 space-y-10">
        {/* Seksi 1: Gambar di kiri, teks di kanan */}
        <section className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <img
            src={HeroImage}
            alt="Warung Endang Joko"
            className="w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2">Warung Endang Joko</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        {/* Seksi 2: Teks di kiri, gambar di kanan */}
        <section className="bg-[#183262] rounded-lg shadow-md overflow-hidden flex">
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2 text-white">Lorem Ipsum</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img
            src={ImageKedua}
            alt="Lorem Ipsum"
            className="w-1/2 object-cover"
          />
        </section>

        {/* Seksi 3: Gambar di kiri, teks di kanan */}
        <section className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <img
            src={ImageKetiga}
            alt="Lorem Ipsum"
            className="w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2">Lorem Ipsum</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
      </main>

      {/* Bagian Footer */}
      <Footer />
    </div>
  );
}

export default Restoran;
