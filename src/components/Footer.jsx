import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import QR from "../assets/qr-barulagi.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#1D366D] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: QR Code */}
        <div className="flex justify-center md:justify-start">
          <img src={QR} alt="QR Code" className="w-full md:w-[85%] h-auto" />
        </div>

        {/* Kolom 2: Lokasi */}
        <div className="flex flex-col text-center md:text-left">
          <h3 className="font-semibold text-3xl mb-3">Lokasi</h3>
          <p className="text-xl mb-6 leading-relaxed">
            Jl. Soekarno Hatta, Karya Merdeka, <br />
            Kec. Samboja, Kabupaten Kutai <br />
            Kartanegara, Kalimantan Timur 75271
          </p>

          <div className="w-full h-px bg-gray-400 my-6"></div>

          <h3 className="font-semibold text-3xl mb-3">Sosial Media</h3>
          <div className="flex space-x-6 justify-center md:justify-start mb-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-3xl hover:text-gray-300"
              />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                className="text-3xl hover:text-gray-300"
              />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-3xl hover:text-gray-300"
              />
            </a>
          </div>
        </div>

        {/* Kolom 3: Sosial Media & Jam Operasional & Kontak */}
        <div className="flex flex-col text-center md:text-left">
          {/* Jam Operasional */}
          <h3 className="font-semibold text-3xl mb-3">Jam Operasional</h3>
          <p className="text-xl mb-6 leading-relaxed">
            Setiap Hari <br />
            Pukul 09.00 - 18.00 WITA <br />
            <br />
          </p>

          <div className="w-full h-px bg-gray-400 my-6"></div>

          {/* Kontak */}
          <h3 className="font-semibold text-3xl mb-3">Kontak</h3>
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <FontAwesomeIcon icon={faWhatsapp} className="text-3xl" />
            <span className="text-xl">+6285859407774</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
