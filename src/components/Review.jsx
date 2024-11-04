import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Component Ulasan
const Ulasan = ({ name, review, imgSrc }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full text-center">
      <img
        src={imgSrc}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{review}</p>
    </div>
  );
};

// Component UlasanSlider
const Review = () => {
  const ulasanData = [
    {
      name: "Lukman Kopling",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      imgSrc: "https://via.placeholder.com/50",
    },
    {
      name: "Mulyadi",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      imgSrc: "https://via.placeholder.com/50",
    },
    {
      name: "Saipul Masjid",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      imgSrc: "https://via.placeholder.com/50",
    },
    {
      name: "Joni Ikan",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      imgSrc: "https://via.placeholder.com/50",
    },
    {
      name: "Agus Bengkel",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      imgSrc: "https://via.placeholder.com/50",
    },
    {
      name: "Bagas Sayur",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas.",
      imgSrc: "https://via.placeholder.com/50",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("next");

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection("prev");
      setTimeout(() => setIsAnimating(false), 300);
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? ulasanData.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setDirection("next");
      setTimeout(() => setIsAnimating(false), 300);
      setCurrentIndex((prevIndex) =>
        prevIndex === ulasanData.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const getClassForIndex = (index) => {
    const isCenter = index === currentIndex;
    const isLeft =
      index === (currentIndex === 0 ? ulasanData.length - 1 : currentIndex - 1);
    const isRight =
      index === (currentIndex === ulasanData.length - 1 ? 0 : currentIndex + 1);

    const animationClass = isAnimating
      ? direction === "next"
        ? "animate-slide-left"
        : "animate-slide-right"
      : "";

    if (isCenter) {
      return `basis-1/2 flex-grow transform scale-105 transition-all duration-300 ${animationClass}`;
    } else if (isLeft || isRight) {
      return "basis-1/3 flex-grow transform scale-95 transition-all duration-300";
    } else {
      return "hidden";
    }
  };

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 py-8 relative">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={handlePrev}
            className="p-2 text-gray-700 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faChevronLeft} size="2x" />
          </button>
          <h2 className="text-6xl font-bold text-[rgba(24,50,98)] text-center">
            Ulasan Pelanggan
          </h2>
          <button
            onClick={handleNext}
            className="p-2 text-gray-700 hover:text-gray-900"
          >
            <FontAwesomeIcon icon={faChevronRight} size="2x" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-4">
          {ulasanData.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full cursor-pointer transition-all duration-300  ${
                index === currentIndex ? "bg-yellow-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        <div className="flex items-center justify-center w-full mt-16">
          <div className="flex w-full max-w-7xl gap-4">
            {ulasanData.map((ulasan, index) => (
              <div
                key={index}
                className={`${getClassForIndex(index)} flex justify-center`}
              >
                <Ulasan
                  name={ulasan.name}
                  review={ulasan.review}
                  imgSrc={ulasan.imgSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
