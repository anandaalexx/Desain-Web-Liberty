import React from "react";
import Logo from "../assets/icon.png"; // Ganti dengan path logo Anda
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMap,
  faFish,
  faUser,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const About = React.forwardRef((props, ref) => {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-4 py-12">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold text-[rgba(24,50,98)]">
          Tentang Kami
        </h2>
      </div>

      <div className="flex items-center justify-between mb-8">
        <div className="flex-1 border-t border-[rgba(24,50,98)]"></div>
        <div className="mx-4">
          <img src={Logo} alt="Logo" className="w-29 h-29 rounded-full" />
        </div>
        <div className="flex-1 border-t border-[rgba(24,50,98)]"></div>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center items-center">
        {[
          {
            icon: faMap,
            text: "Terletak di kilo 29 Sambodja, tempat pemancingan di alam yang asri. Menjadikan pengalaman memancing anda lebih nyaman.",
          },
          {
            icon: faFish,
            text: "Kolam pemancingan yang luas dengan beragam jenis ikan, memastikan pengalaman memancing yang menyenangkan.",
          },
          {
            icon: faUser,
            text: "Cocok untuk keluarga, komunitas, dan pemancing dari berbagai kalangan, dengan suasana yang nyaman bagi semua orang.",
          },
          {
            icon: faTrophy,
            text: "Tersedia lomba pemancingan rutin dengan hadiah menarik, yang menambah keseruan bagi para pemancing yang ingin berkompetisi.",
          },
          {
            icon: faTrophy,
            text: "Tersedia lomba pemancingan rutin dengan hadiah menarik, yang menambah keseruan bagi para pemancing yang ingin berkompetisi.",
          },
          {
            icon: faTrophy,
            text: "Tersedia lomba pemancingan rutin dengan hadiah menarik, yang menambah keseruan bagi para pemancing yang ingin berkompetisi.",
          },
        ].map((item, index) => (
          <div key={index} className="border rounded-lg p-4">
            <FontAwesomeIcon
              icon={item.icon}
              className="text-5xl mb-2 text-[rgba(24,50,98)]"
            />
            <p className="text-gray-700">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default About;
