import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import FacilityNav from "../components/FacilityNav";

// Importing images
import EndangJoko from "../assets/endang-joko.jpg"; // Placeholder image for the main section
import EndangDalam from "../assets/endang-dalam.jpg";
import MenuEndang from "../assets/menu-endang.jpg";

function Restoran() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* HeaderSection */}
      <HeaderSection title="WARUNG ENDANG JOKO" />

      {/* FacilityNav */}
      <FacilityNav />

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto py-8 px-4 space-y-10">
        {/* Section: Kolam Mas */}
        <section className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row-reverse">
          <div className="p-6 flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              Warung Endang Joko
            </h2>
            <p className="text-sm md:text-lg text-gray-700">
              Warung Makan Endang Joko adalah tempat yang nyaman untuk bersantai
              dan menikmati hidangan lezat setelah memancing. Warung ini
              menawarkan suasana yang ramah dan menyajikan berbagai menu khas
              yang menggugah selera, cocok untuk keluarga maupun teman-teman.
            </p>
          </div>
          <img
            src={EndangJoko}
            alt="Penyewaan alat pancing tersedia di lokasi"
            className="w-full md:w-1/2 object-cover"
          />
        </section>

        {/* Section: Informasi Kolam Pemancingan */}
        <section className="bg-[#183262] shadow-md overflow-hidden flex flex-col md:flex-row">
          <div className="p-6 flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">
              Kapasitas Ruang Warung
            </h2>
            <p className="text-sm md:text-lg text-gray-300">
              Warung ini dapat menampung hingga 30 orang, dengan area tempat
              duduk yang luas dan tertata rapi, dengan pemandangan langsung ke
              kolam pemancingan.
            </p>
          </div>
          <img
            src={EndangDalam}
            alt="Kolam Pemancingan di Fasilitas Liberty"
            className="w-full md:w-1/2 object-cover"
          />
        </section>

        {/* Section: Kolam Mas */}
        <section className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row-reverse">
          <div className="p-6 flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Menu Warung</h2>
            <p className="text-sm md:text-lg text-gray-700">
              Pilihan menu di Warung Makan Endang Joko mencakup:
              <br />
              <li>
                Makanan utama: Ikan bakar, ikan goreng, ayam bakar, dan mie
                goreng.
              </li>
              <li>Cemilan: Kentang goreng, sosis goreng, dan empek adaan.</li>
              <li>Minuman: Es teh manis, kopi, extra jos, dan air mineral.</li>
            </p>
          </div>
          <img
            src={MenuEndang}
            alt="Penyewaan alat pancing tersedia di lokasi"
            className="w-full md:w-1/2 object-cover"
          />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Restoran;
