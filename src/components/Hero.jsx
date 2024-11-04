import React from "react";
import BG from "../assets/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(24, 50, 98, 0.5) 0%, rgba(3, 181, 155, 0.5) 100%), url(${BG})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
        {/* Kontainer untuk konten Hero */}
        <div className="max-w-7xl mx-auto px-4 w-full flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            Selamat Datang di Tempat Kami
          </h1>
          <p className="font-normal text-xl text-white mb-6">
            Nikmati pengalaman terbaik bersama kami.
          </p>
          <a
            href="#reservasi"
            className="bg-[rgba(24,50,98,0.8)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-white font-normal px-6 py-3 rounded-md hover:bg-[rgba(24,50,98,0.5)] transition duration-300"
          >
            Jelajahi Lebih Lanjut{" "}
            <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
          </a>
        </div>
        <div className="absolute bottom-10 left-1 border rounded-full border-white text-white px-4 py-1 ml-32">
          <p className="text-sm">
            <FontAwesomeIcon icon={faLocationDot} className="mr-1" /> Samboja,
            Kutai Kartanegara
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
