import React from "react";
import Navbar from "../components/Navbar";
import Foto from "../assets/lomba.png";

function Lomba() {
  return (
    <div className="min-h-screen">
    <div className="max-w-7xl mx-auto px-4 py-8">

    {/* Header */}
    <header
      className="w-full text-center"
      style={{
        background: "linear-gradient(to bottom, #03B59B, #FFFFFF 80%)", // Gradient langsung diterapkan
        height: "355px", // Tinggi header sesuai desain
      }}
    >
      <div className="flex justify-center items-center h-full">
        <h1 className="text-4xl font-bold text-[#183262]">
          INFORMASI PERLOMBAAN MEMANCING
        </h1>
      </div>
    </header>
    < Navbar />
    
    {/* Coming Soon Section */}
    <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 gap-8 mt-[-50px] mx-auto max-w-screen-lg">
      <div className="flex justify-center">
        <img
          src= {Foto} alt= "Fishing" className= " rounded-tl-[150px] rounded-br-[150px] object-cover w-full h-auto"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl font-bold text-[#183262] text-justify">Coming Soon!</h2>
        <p className="text-[#183262] text-justify mt-4">
        Lomba pemancingan segera dibuka, 
        siap-siap raih gelar juara 🎣
        </p>
      </div>
    </section>

  {/* Form Section */}
  <section className="flex items-center justify-center px-6 py-12 mt-12 mx-auto max-w-screen-lg">
  <div className="relative flex items-center justify-between w-[1180px] h-[455px] max-w-3xl bg-[#03B59B] rounded-xl overflow-hidden shadow-lg">
    <h2 className="text-xl font-bold text-teal-600">Daftar disini</h2>
    <form>
      {/* Nama */}
      <div className="relative mb-4">
        <span className="absolute left-3 top-3 text-teal-600">
          <i className="fa-solid fa-user"></i>
        </span>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nama"
          className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
          required
        />
      </div>
      {/* Nomor Telepon */}
      <div className="relative mb-4">
        <span className="absolute left-3 top-3 text-teal-600">
          <i className="fa-solid fa-phone"></i>
        </span>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Nomor Telepon"
          className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-teal-500"
          required
        />
      </div>
      {/* Tombol Kirim */}
      <button
        type="submit"
        className="w-full py-2 bg-teal-700 text-white font-bold rounded-md hover:bg-teal-800"
      >
        Kirim
      </button>
    </form>
  </div>
</section>
  </div>  

    </div>
  );
}

export default Lomba;
