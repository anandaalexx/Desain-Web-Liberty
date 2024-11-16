import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Correct import of Swiper
import { EffectCoverflow, Pagination, Navigation } from "swiper"; // Correct import of Swiper modules
import "swiper/css"; // Swiper core styles
import "swiper/css/effect-coverflow"; // Styles for EffectCoverflow
import "swiper/css/pagination"; // Styles for Pagination
import "swiper/css/navigation"; // Styles for Navigation
import "swiper/swiper-bundle.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // FontAwesome import
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"; // Icon imports

// Component Funfact
const Funfact = () => {
  const funfactData = [
    {
      title: "Fakta Menarik 1",
      description: "Fakta pertama yang sangat menarik tentang hal ini.",
    },
    {
      title: "Fakta Menarik 2",
      description: "Fakta kedua yang tidak kalah menarik dan mengagumkan.",
    },
    {
      title: "Fakta Menarik 3",
      description: "Fakta ketiga yang membuat kita terkejut.",
    },
    {
      title: "Fakta Menarik 4",
      description: "Fakta keempat yang tidak biasa dan unik.",
    },
    {
      title: "Fakta Menarik 5",
      description: "Fakta kelima yang sangat bermanfaat untuk diketahui.",
    },
    {
      title: "Fakta Menarik 6",
      description: "Fakta keenam yang sangat menghibur dan mendidik.",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        {/* Title with arrows above it */}
        <div className="relative">
          <div className="flex justify-between absolute top-6 left-0 right-0 px-4">
            {/* Panah kiri */}
            <div className="slebew-prev hover:cursor-pointer">
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </div>
            {/* Panah kanan */}
            <div className="slebew-next hover:cursor-pointer">
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-[rgba(24,50,98)] text-center mb-4">
            Fakta Menarik
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2} // Tampilkan 3 slide
          spaceBetween={50} // Jarak antar slide
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".slebew-next",
            prevEl: ".slebew-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper-container"
        >
          {funfactData.map((funfact, index) => (
            <SwiperSlide
              key={index}
              className="flex justify-center"
              style={{
                width: "calc(100% / 3)", // Lebar 1/3 dari container
                height: "auto", // Tinggi otomatis sesuai dengan konten
              }}
            >
              <div className="bg-[#183262] p-6 rounded-lg shadow-xl border border-gray-200 text-center w-full h-full flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-[#ffffff]">
                  {funfact.title}
                </h3>
                <p className="text-white text-sm">{funfact.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Funfact;
