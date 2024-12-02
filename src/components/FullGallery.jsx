import React from "react";
import Galeri1 from "../assets/galeri-1.png";
import Galeri2 from "../assets/galeri-2.png";
import Galeri3 from "../assets/galeri-3.png";
import Galeri4 from "../assets/galeri-4.png";
import Galeri5 from "../assets/galeri-5.jpg";
import Galeri6 from "../assets/galeri-6.jpg";
import Galeri7 from "../assets/galeri-7.jpg";
import Galeri8 from "../assets/galeri-8.jpg";
import Galeri9 from "../assets/galeri-9.jpg";

const FullGallery = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 py-8 text-left">
        <div className="grid grid-cols-12 gap-4">
          {/* Baris pertama */}
          <div className="col-span-5 overflow-hidden">
            <img
              src={Galeri1}
              alt="Image 1"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-7 overflow-hidden">
            <img
              src={Galeri2}
              alt="Image 2"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Baris kedua */}
          <div className="col-span-7 overflow-hidden">
            <img
              src={Galeri3}
              alt="Image 3"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-5 overflow-hidden">
            <img
              src={Galeri4}
              alt="Image 4"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Baris ketiga */}
          <div className="col-span-5 overflow-hidden">
            <img
              src={Galeri5}
              alt="Image 5"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-7 overflow-hidden">
            <img
              src={Galeri6}
              alt="Image 6"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Baris keempat */}
          <div className="col-span-7 overflow-hidden">
            <img
              src={Galeri7}
              alt="Image 7"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="col-span-5 overflow-hidden">
            <img
              src={Galeri8}
              alt="Image 8"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Baris kelima (Image 9 di tengah) */}
          <div className="col-span-12 flex justify-center">
            <div className="w-2/3 overflow-hidden">
              <img
                src={Galeri9}
                alt="Image 9"
                className="w-full h-72 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullGallery;
