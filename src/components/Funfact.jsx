/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import FunFacts from "../assets/funfact/funfact-1.png";
import FunFactd from "../assets/funfact/funfact-2.png";
import FunFactt from "../assets/funfact/funfact-3.png";
import Jokes from "../assets/funfact/joke-1.png";
import Joked from "../assets/funfact/joke-2.png";
import Joket from "../assets/funfact/joke-3.png";
import Jokee from "../assets/funfact/joke-4.png";
import Jokel from "../assets/funfact/joke-5.png";
import Joken from "../assets/funfact/joke-6.png";
import Jokej from "../assets/funfact/joke-7.png";
import Jokep from "../assets/funfact/joke-8.png";

const photoscarous = [
  FunFacts,
  FunFactd,
  FunFactt,
  Jokes,
  Joked,
  Joket,
  Jokee,
  Jokel,
  Joken,
  Jokej,
  Jokep,
];

export default function Carousel() {
  const PhotoItem = (props) => (
    <div className="relative group">
      <img src={props.image} className="rounded-2xl w-full" />
    </div>
  );

  return (
    <section className="py-12 bg-stone-100">
      <div className="lg:mx-auto max-w-7xl mx-[1.5rem]">
        <h1 className="text-6xl font-bold text-[rgba(24,50,98)] text-center mb-12">
          Fun Fact
        </h1>
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 1500,
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
