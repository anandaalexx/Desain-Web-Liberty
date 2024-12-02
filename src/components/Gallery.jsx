import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 py-8 text-left">
        <div className="grid grid-cols-12 gap-6">
          {/* Video 1 */}
          <div className="col-span-8">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/9aNxuytikIM?autoplay=1&mute=1&loop=1&playlist=9aNxuytikIM"
              title="Video 1"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[520px] object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col col-span-4 justify-center">
            <div>
              <h2 className="text-5xl font-bold text-[rgba(24,50,98)] mb-4">
                Dari Galeri
              </h2>
              <p className="text-lg text-[rgba(24,50,98)] mb-10">
                Tangkapan besar, pemandangan indah, semuanya ada di galeri kami!
              </p>
            </div>
            <Link to="/gallery">
              <button className="px-4 py-2 bg-[rgba(24,50,98)] text-white font-normal rounded-lg hover:bg-custom-blue transition duration-200">
                Lihat Lebih Banyak
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
