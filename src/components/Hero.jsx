import React from "react";
import BG from "../assets/hero.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(24, 50, 98, 0.5) 0%, rgba(3, 181, 155, 0.5) 100%), url(${BG})`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-4">
        {/* Kontainer untuk konten Hero */}
        <div className="max-w-7xl w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Selamat Datang di Liberty
          </h1>
          <p className="font-normal text-lg md:text-xl text-white mb-6">
            Nikmati pengalaman memancing terbaik bersama kami.
          </p>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="bg-[rgba(24,50,98,0.8)] backdrop-blur-sm border border-[rgba(255,255,255,0.2)] text-white font-normal px-4 py-2 md:px-6 md:py-3 rounded-md hover:bg-[rgba(24,50,98,0.5)] transition duration-300 cursor-pointer"
          >
            Jelajahi Lebih Lanjut{" "}
            <FontAwesomeIcon icon={faArrowDown} className="ml-2" />
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 md:left-32 md:transform-none border rounded-full border-white text-white px-3 py-1 text-xs md:text-sm">
          <p>
            <FontAwesomeIcon icon={faLocationDot} className="mr-1" /> Samboja,
            Kutai Kartanegara
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
