import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeaderSection from "../components/HeaderSection";
import FacilityNav from "../components/FacilityNav";

// Importing images
import DenahImage from "../assets/denah.jpg"; // Placeholder image for the main section
import KolamMas from "../assets/kolam-mas.jpg";
import KolamNila from "../assets/kolam-nila.jpg";
import KolamCampur from "../assets/kolam-campur.jpg";

function Kolam() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* HeaderSection */}
      <HeaderSection title="KOLAM PEMANCINGAN" />

      {/* FacilityNav */}
      <FacilityNav />

      {/* Main Content Section */}
      <main className="max-w-7xl mx-auto py-8 px-4 space-y-10">
        {/* Section: Informasi Kolam Pemancingan */}
        <section className="bg-[#183262] shadow-md overflow-hidden flex flex-col md:flex-row">
          <img
            src={DenahImage}
            alt="Kolam Pemancingan di Fasilitas Liberty"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">
              Denah Kolam
            </h2>
            <p className="text-sm md:text-lg text-gray-300">
              Pada bagian ini, pengunjung dapat melihat tata letak lengkap dari
              kolam pemancingan yang tersedia di lokasi kami. Denah ini akan
              menunjukkan berbagai area kolam, termasuk area pemancingan kiloan,
              area kolam sewaan. Denah ini juga akan menampilkan fasilitas yang
              ada di sekitar kolam, seperti tempat parkir, toilet, tempat makan,
              serta lokasi penyewaan peralatan memancing. Dengan adanya denah
              ini, pengunjung dapat lebih mudah memilih tempat yang sesuai
              dengan preferensi memancing mereka.
            </p>
          </div>
        </section>

        {/* Section: Kolam Mas */}
        <section className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row-reverse">
          <img
            src={KolamMas}
            alt="Penyewaan alat pancing tersedia di lokasi"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Kolam Mas</h2>
            <p className="text-sm md:text-lg text-gray-700">
              Kolam ini (bernomor 1 pada denah) menggunakan sistem "Kiloan" di
              mana sistem pemancingannya menggunakan pengukuran berdasarkan
              berat ikan yang berhasil dipancing, yaitu per kilogram.
            </p>
          </div>
        </section>

        {/* Section: Kolam Nila */}
        <section className="bg-[#183262] shadow-md overflow-hidden flex flex-col md:flex-row">
          <img
            src={KolamNila}
            alt="Kolam Pemancingan di Fasilitas Liberty"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">
              Kolam Nila
            </h2>
            <p className="text-sm md:text-lg text-gray-300">
              Kolam Nila (bernomor 2 pada denah) juga menggunakan sistem kiloan
              sehingga pengunjung yang memancing di kolam ini akan dikenakan
              tarif sesuai dengan jumlah ikan yang mereka tangkap berdasarkan
            </p>
          </div>
        </section>

        {/* Section: Kolam Campur */}
        <section className="bg-white shadow-md overflow-hidden flex flex-col md:flex-row-reverse">
          <img
            src={KolamCampur}
            alt="Penyewaan alat pancing tersedia di lokasi"
            className="w-full md:w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              Kolam Campur
            </h2>
            <p className="text-sm md:text-lg text-gray-700">
              Kolam Sewa Per Jam adalah salah satu pilihan pemancingan di tempat
              wisata kami yang menggunakan sistem pembayaran berdasarkan waktu,
              yaitu per jam. Jenis ikan di kolam ini (Ikan mas, Ikan nila, Ikan
              gabus, Ikan patin, dan Ikan gurame)
            </p>
          </div>
        </section>

        {/* Section: Jenis Ikan */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-medium text-[#183262]">
              Jenis Ikan
            </h2>
          </div>
          <div className="flex justify-center">
            <img
              src={require("../assets/jenis-ikan.png")}
              alt="Jenis Ikan"
              className="w-full md:w-3/4 lg:w-1/2 object-cover"
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
