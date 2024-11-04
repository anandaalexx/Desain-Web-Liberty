import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Mengimpor gambar yang diperlukan
import HeroImage from "../assets/hero.jpg"; // Gambar untuk section 1
import ImageKedua from "../assets/hero.jpg"; // Gambar untuk section 2
import ImageKetiga from "../assets/hero.jpg"; // Gambar untuk section 3

function WarungEndangJoko() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      
      {/* Header Section */}
      {/* <header className="bg-gradient-to-b from-teal-500 to-teal-400 text-white py-8">
        <h1 className="text-center text-3xl font-bold">FASILITAS PEMANCINGAN LIBERTY</h1>
        <nav className="text-center mt-4">
          <a href="#kolam" className="text-white mx-4 hover:underline">Kolam Pemancingan</a>
          <a href="#resto" className="text-white mx-4 hover:underline">Resto</a>
          <a href="#parkir" className="text-white mx-4 hover:underline">Parkiran</a>
          <a href="#sewa" className="text-white mx-4 hover:underline">Penyewaan Alat Pancing</a>
        </nav>
      </header> */}

      {/* Main Content Section */}
      <main className="max-w-6xl mx-auto py-8 px-4 space-y-8">
        {/* Section 1: Gambar di kiri, teks di kanan */}
        <section className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <img
            src={HeroImage} // Menggunakan gambar yang diimpor
            alt="Warung Endang Joko"
            className="w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2">Warung Endang Joko</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>

        {/* Section 2: Teks di kiri, gambar di kanan */}
        <section className="bg-[#183262] rounded-lg shadow-md overflow-hidden flex">
        <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2 text-white">Lorem Ipsum</h2>
            <p className="text-gray-300"> {/* Mengubah warna teks untuk kontras yang lebih baik */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
        <img
            src={ImageKedua} // Menggunakan gambar kedua yang diimpor
            alt="Lorem Ipsum"
            className="w-1/2 object-cover"
        />
        </section>


        {/* Section 3: Gambar di kiri, teks di kanan */}
        <section className="bg-white rounded-lg shadow-md overflow-hidden flex">
          <img
            src={ImageKetiga} // Menggunakan gambar ketiga yang diimpor
            alt="Lorem Ipsum"
            className="w-1/2 object-cover"
          />
          <div className="p-6 flex-1">
            <h2 className="text-2xl font-bold mb-2">Lorem Ipsum</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default WarungEndangJoko;
