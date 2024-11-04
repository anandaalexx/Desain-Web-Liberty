import React from "react";
import Galeri1 from "../assets/galeri-1.png";
import Galeri2 from "../assets/galeri-2.png";
import Galeri3 from "../assets/galeri-3.png";
import Galeri4 from "../assets/galeri-4.png";

const Gallery = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 py-8 text-left">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-bold text-[rgba(24,50,98)] mb-4">
              Dari Galeri
            </h2>
            <p className="text-lg text-[rgba(24,50,98)] mb-10">
              Tangkapan besar, pemandangan indah, semuanya ada di galeri kami!
            </p>
          </div>
          <button className="px-4 py-2 bg-[rgba(24,50,98)] text-white font-normal rounded-lg hover:bg-custom-blue transition duration-200">
            Lihat Lebih Banyak
          </button>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-5 overflow-hidden transition-transform transform ">
            <img
              src={Galeri1}
              alt="Gallery Image 1"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="col-span-7 overflow-hidden transition-transform transform ">
            <img
              src={Galeri2}
              alt="Gallery Image 2"
              className="w-full h-64 object-cover"
            />
          </div>

          <div className="col-span-7 overflow-hidden transition-transform transform ">
            <img
              src={Galeri3}
              alt="Gallery Image 3"
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="col-span-5 overflow-hidden transition-transform transform ">
            <img
              src={Galeri4}
              alt="Gallery Image 4"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
