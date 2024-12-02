import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import FacilityNav from "../components/FacilityNav";

// Importing images
import SewaAlat from "../assets/Penyewaan-Alat.jpg"; // Placeholder image for the main section
import FotoUmpan from "../assets/umpan.jpg";

function Penyewaan() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* HeaderSection */}
      <HeaderSection title="SEWA ALAT PANCING" />

      {/* FacilityNav */}
      <FacilityNav />

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto py-8 px-4 space-y-10">
        {/* Section: Informasi Kolam Pemancingan */}
        <section className="bg-[#183262] shadow-md overflow-hidden flex flex-col md:flex-row">
          <img
            src={SewaAlat}
            alt="Kolam Pemancingan di Fasilitas Liberty"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">
              Penyewaan Alat Pancing
            </h2>
            <p className="text-sm md:text-lg text-gray-300">
              Tempat ini menyediakan layanan penyewaan alat pancing bagi
              pengunjung yang belum membawa peralatan sendiri. Pilihan alat
              pancing mencakup berbagai jenis dan ukuran. Tarif penyewaan sangat
              terjangkau dan dihitung per jam.
            </p>
          </div>
        </section>

        {/* Section: Kolam Mas */}
        <section className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row-reverse">
          <img
            src={FotoUmpan}
            alt="Penyewaan alat pancing tersedia di lokasi"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Jual Umpan</h2>
            <p className="text-sm md:text-lg text-gray-700">
              Selain itu, tersedia juga penjualan umpan segar yang bervariasi,
              seperti umpan merah dan umpan coklat. Dengan layanan ini,
              pengunjung dapat memancing tanpa khawatir kekurangan peralatan
              atau umpan.
            </p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default Penyewaan;
