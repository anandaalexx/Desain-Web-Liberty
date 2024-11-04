import React from "react";
import Kolam from "../assets/Kolam-Pemancingan.png";
import Sewa from "../assets/Penyewaan-Alat.png";
import Resto from "../assets/Restoran.png";

const Facility = () => {
  const fasilitas = [
    {
      title: "Kolam Pemancingan",
      image: Kolam,
      description: "Nikmati pengalaman memancing yang menyenangkan.",
      link: "#",
    },
    {
      title: "Restoran",
      image: Resto,
      description: "Makan di restoran kami dengan pemandangan indah.",
      link: "#",
    },
    {
      title: "Parkiran",
      image: Kolam,
      description: "Parkir luas dan nyaman untuk kendaraan Anda.",
      link: "#",
    },
    {
      title: "Penyewaan Alat",
      image: Sewa,
      description: "Tersedia alat pancing untuk disewa.",
      link: "#",
    },
  ];

  return (
    <div
      style={{ backgroundColor: "rgba(226, 239, 247, 0.3)" }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-center text-6xl font-bold text-[rgba(24,50,98)] mb-12">
          Fasilitas
        </h2>

        <div className="grid grid-cols-4 gap-4 text-left">
          {fasilitas.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden group hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:opacity-75 transition duration-300"
              />

              <div className="p-4">
                <h3 className="text-xl font-semibold text-[rgba(24,50,98)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>

              <div className="absolute inset-0 bg-[rgba(24,50,98)] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href={item.link}
                  className="text-white font-semibold px-4 py-2 bg-[rgba(24,50,98, 0.8)] rounded hover:bg-[rgba(24,50,98)] transition duration-300"
                >
                  Selengkapnya
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Facility;
