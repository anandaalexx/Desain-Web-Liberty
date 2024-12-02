import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faQuoteLeft,
} from "@fortawesome/free-solid-svg-icons";

const Ulasan = ({ name, review, imgSrc }) => {
  return (
    <div className="h-80 -mb-20 mt-12">
      <div
        className="bg-[#183262] p-6 rounded-lg shadow-xl border border-gray-200 w-80 text-center transform hover:scale-105 transition-all duration-300 ease-in-out"
        style={{ boxShadow: "4px 12px 0px rgba(242, 159, 5, 1.0)" }}
      >
        <img
          src={imgSrc}
          alt={name}
          className="w-20 h-20 rounded-full mx-auto mt-[-4rem] mb-4 border-4 border-white transform hover:scale-110 transition-all duration-300 ease-in-out"
        />
        <h3 className="text-lg font-semibold text-[#ffffff]">{name}</h3>
        <FontAwesomeIcon icon={faQuoteLeft} color="#f29f05" className="my-2" />
        <p className="text-[white] text-sm">{review}</p>
      </div>
    </div>
  );
};

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
    <div
      className="py-16 bg-gradient-to-r"
      style={{ backgroundColor: "rgba(226, 239, 247, 0.3)" }}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        <div className="relative">
          <div className="flex justify-between absolute top-6 left-0 right-0 px-4">
            <div className="slebew-prev cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-[rgba(24,50,98)] hover:text-white">
              <FontAwesomeIcon icon={faChevronLeft} size="lg" />
            </div>
            <div className="slebew-next cursor-pointer p-3 bg-white rounded-full shadow-lg hover:bg-[rgba(24,50,98)] hover:text-white">
              <FontAwesomeIcon icon={faChevronRight} size="lg" />
            </div>
          </div>

          <h2 className="text-5xl font-bold text-[rgba(24,50,98)] text-center mb-6">
            Ulasan Pelanggan
          </h2>
        </div>

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
