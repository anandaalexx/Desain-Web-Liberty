import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Tips1 from "../assets/tipstrick/Tips1.jpg";
import Tips2 from "../assets/tipstrick/Tips2.jpg";
import Tips3 from "../assets/tipstrick/Tips3.jpg";
import Tips4 from "../assets/tipstrick/Tips4.jpg";
import Tips5 from "../assets/tipstrick/Tips5.jpg";
import Tips6 from "../assets/tipstrick/Tips6.jpg";
import Tips7 from "../assets/tipstrick/Tips7.jpg";
import Tips8 from "../assets/tipstrick/Tips8.jpg";

const photoscarous = [
  Tips1,
  Tips2,
  Tips3,
  Tips4,
  Tips5,
  Tips6,
  Tips7,
  Tips8,
];

export default function Carousel() {
  const PhotoItem = (props) => (
    <div className="relative group">
      <img src={props.image} className="rounded-2xl w-full" />
    </div>
  );

  return (
    <section className="py-12 bg-[#FFFFFF]">
      <div className="lg:mx-auto max-w-7xl mx-[1.5rem]">
        <h1 className="text-6xl font-bold text-[#183262] text-center mb-12">
          Tips and Trick
        </h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          grabCursor={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 5,
            },
            425: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
          }}
          className="carousel"
        >
          {photoscarous.map((p, index) => (
            <SwiperSlide key={index} className="mb-12">
              <PhotoItem image={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}