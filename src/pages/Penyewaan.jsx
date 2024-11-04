import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Importing images
import HeroImage from "../assets/hero.jpg"; // Image for the main section
import SectionImage1 from "../assets/hero.jpg"; // Placeholder image for the sections
import SectionImage2 from "../assets/hero.jpg";
import SectionImage3 from "../assets/hero.jpg";

function FasilitasPemancinganLiberty() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      {/* Main Content Section */}
      <main className="max-w-6xl mx-auto py-8 px-4 space-y-8">
        
        {/* Penyewaan Alat Pancing Section */}
        <section id="sewa" className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <img
            src={HeroImage} 
            alt="Penyewaan alat pancing tersedia di lokasi"
            className="w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2">Sedia Alat Pancing</h2>
            <p className="text-gray-700">
              Menyediakan beragam alat pancing lengkap untuk memenuhi kebutuhan Anda selama memancing di kolam kami. Harga terjangkau dan kualitas alat yang baik, menjadikan pengalaman memancing Anda lebih menyenangkan.
            </p>
          </div>
        </section>

        {/* Section: Informasi Kolam Pemancingan */}
        <section className="bg-[#183262] rounded-lg shadow-md overflow-hidden flex">
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2 text-white">Kolam Pemancingan</h2>
            <p className="text-gray-300"> {/* Mengubah warna teks untuk kontras yang lebih baik */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img
            src={SectionImage1}
            alt="Kolam Pemancingan di Fasilitas Liberty"
            className="w-1/2 object-cover"
          />
        </section>

        {/* Section: Resto */}
        <section className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <img
            src={SectionImage2}
            alt="Resto di Fasilitas Liberty"
            className="w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2">Resto</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        {/* Section: Parkiran */}
        <section className="bg-[#183262] rounded-lg shadow-md overflow-hidden flex">
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2 text-white">Parkiran</h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <img
            src={SectionImage3}
            alt="Parkiran di Fasilitas Liberty"
            className="w-1/2 object-cover"
          />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default FasilitasPemancinganLiberty;
