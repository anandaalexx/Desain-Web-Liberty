import React, { useState, useEffect } from "react";
import Logo from "../assets/-nav-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [language, setLanguage] = useState("English");
  // const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 750);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  const toggleFacilitiesDropdown = () => {
    setIsFacilitiesOpen(!isFacilitiesOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-lg p-4 z-50 flex items-center justify-between font-poppins shadow-lg transition duration-300 ${
        isScrolled
          ? "bg-[rgba(24,50,98,0.8)] text-white"
          : "bg-transparent text-white"
      }`}
    >
      {/* Logo */}
      <div className="px-16" href="#beranda">
        <img src={Logo} alt="/" className="w-24 h-auto" />
      </div>

      {/* Navigation Menu */}
      <ul className="flex space-x-6 text-white font-semibold mx-4">
        <li>
          <a
            href="#beranda"
            className={`hover:text-gray-200 ${
              activeMenu === "beranda" ? "font-bold" : "font-normal"
            }`}
            onClick={() => handleMenuClick("beranda")}
          >
            Beranda
          </a>
        </li>
        <li className="relative group">
          <button className="flex items-center hover:text-blue-500 font-light transition-colors duration-300">
            Fasilitas
          </button>

          {/* Dropdown Content */}
          <ul className="absolute mt-2 w-52 bg-[rgba(24,50,98,0.5)] backdrop-blur-lg text-white shadow-lg rounded-lg py-2 hidden group-hover:block transition-all duration-300">
            <li className="px-6 py-3 hover:bg-blue-800 font-medium cursor-pointer border-b border-b-blue-400 last:border-b-0 rounded-lg transition-colors duration-200">
              <a href="#kolam">🎣 Kolam Pancing</a>
            </li>
            <li className="px-6 py-3 hover:bg-blue-800 font-medium cursor-pointer border-b border-b-blue-400 last:border-b-0 rounded-lg transition-colors duration-200">
              <a href="#resto">🍽️ Resto</a>
            </li>
            <li className="px-6 py-3 hover:bg-blue-800 font-medium cursor-pointer border-b border-b-blue-400 last:border-b-0 rounded-lg transition-colors duration-200">
              <a href="#parkir">🚗 Parkiran</a>
            </li>
            <li className="px-6 py-3 hover:bg-blue-800 font-medium cursor-pointer rounded-lg transition-colors duration-200">
              <a href="#sewa">🎟️ Penyewaan</a>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="#lomba"
            className={`hover:text-gray-200 ${
              activeMenu === "lomba" ? "font-bold" : "font-normal"
            }`}
            onClick={() => handleMenuClick("lomba")}
          >
            Lomba
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            className={`hover:text-gray-200 ${
              activeMenu === "kontak" ? "font-bold" : "font-normal"
            }`}
            onClick={() => handleMenuClick("kontak")}
          >
            Kontak
          </a>
        </li>
        <li>
          <a
            href="#reservasi"
            className={` text-white font-light px-4 py-2 rounded-3xl  transition duration-300 ${
              isScrolled
                ? "bg-white hover:bg-gray-300 text-[rgba(24,50,98, 0.5)]"
                : "bg-[rgba(24,50,98,0.8)] hover:bg-[rgba(24,50,98,0.5)]"
            }`}
          >
            Reservasi
          </a>
        </li>
      </ul>

      {/* Language Dropdown */}
      <div className="relative group px-16">
        <button
          onClick={toggleLanguageDropdown}
          className="flex items-center text-white font-semibold"
        >
          <FontAwesomeIcon icon={faGlobe} className="mr-2" />
          {language === "en" ? (
            <img
              src="https://flagcdn.com/w20/gb.png"
              alt="UK flag"
              className="w-5 h-auto mr-1"
            />
          ) : (
            <img
              src="https://flagcdn.com/w20/id.png"
              alt="Indonesian flag"
              className="w-5 h-auto mr-1"
            />
          )}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`ml-1 transition-transform duration-300 ${
              isLanguageOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isLanguageOpen && (
          <ul className="absolute text-white right-0 mt-2 bg-[rgba(24,50,98,0.2)] backdrop-blur-lg shadow-lg rounded-lg">
            <li
              onClick={() => handleLanguageChange("en")}
              className="px-4 py-2 hover:bg-[rgba(24,50,98,0.8)] cursor-pointer border-b border-b-blue-400 last:border-b-0 rounded-lg flex items-center"
            >
              <img
                src="https://flagcdn.com/w20/gb.png"
                alt="US flag"
                className="w-5 h-auto mr-2"
              />
              English
            </li>
            <li
              onClick={() => handleLanguageChange("id")}
              className="px-4 py-2 hover:bg-[rgba(24,50,98,0.8)] cursor-pointer border-b border-b-blue-400 last:border-b-0 rounded-lg flex items-center"
            >
              <img
                src="https://flagcdn.com/w20/id.png"
                alt="Indonesian flag"
                className="w-5 h-auto mr-2"
              />
              Indonesia
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
