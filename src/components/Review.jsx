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
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons"; // Icon imports

// Your component code here

// Component Ulasan
const Ulasan = ({ name, review, imgSrc }) => {
  return (
    <div className="h-80 -mb-20 mt-12">
      <div
        className="bg-[#183262] p-6 rounded-lg shadow-xl border border-gray-200 w-80 text-center"
        style={{ boxShadow: "4px 12px 0px rgba(242, 159, 5, 1.0)" }}
      >
        <img
          src={imgSrc}
          alt={name}
          className="w-20 h-20 rounded-full mx-auto mt-[-4rem] mb-4"
        />
        <h3 className="text-lg font-semibold text-[#ffffff]">{name}</h3>
        <FontAwesomeIcon icon={faQuoteLeft} color="#f29f05" className="my-2" />
        <p className="text-[white] text-sm">{review}</p>
      </div>
    </div>
  );
};

// Component Review
const Review = () => {
  const ulasanData = [
    {
      name: "Lukman Kopling",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Mulyadi",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Saipul Masjid",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "Joni Ikan",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Agus Bengkel",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      name: "Bagas Sayur",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://randomuser.me/api/portraits/men/6.jpg",
    },
  ];

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        {/* Title with arrows above it */}
        <div className="relative">
          <div className="flex justify-between absolute top-6 left-0 right-0 px-4">
            {/* Panah kiri */}
            <div className="slebew-prev hover: cursor-pointer">
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </div>
            {/* Panah kanan */}
            <div className="slebew-next hover: cursor-pointer">
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </div>
          </div>

          <h2 className="text-4xl font-bold text-[rgba(24,50,98)] text-center mb-4">
            Ulasan Pelanggan
          </h2>
        </div>

        {/* Swiper */}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={2}
          spaceBetween={-300}
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
          {ulasanData.map((ulasan, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <Ulasan
                name={ulasan.name}
                review={ulasan.review}
                imgSrc={ulasan.imgSrc}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
