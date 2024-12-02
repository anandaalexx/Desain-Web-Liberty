import React, { useState, useEffect } from "react";
import Logo from "../assets/-nav-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [language, setLanguage] = useState("English");
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to change navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle language change and dropdown toggle
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsLanguageOpen(false);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageOpen(!isLanguageOpen);
  };

  const [activeMenu, setActiveMenu] = useState("home");

  const handleMenuClick = (menu) => setActiveMenu(menu);

  return (
    <nav
      className={`fixed top-0 left-0 w-full backdrop-blur-lg p-4 z-50 flex items-center justify-between justify font-poppins shadow-lg transition duration-300 ${
        isScrolled
          ? "bg-[rgba(24,50,98,0.8)] text-white"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between w-full">
        {/* Logo */}
        <Link to="beranda" smooth={true} duration={500}>
          <img src={Logo} alt="/" className="w-32 h-auto cursor-pointer" />
        </Link>

        {/* Navigation Menu */}
        <ul className="flex space-x-6 text-white text-lg font-semibold mx-4 my-2 cursor-pointer">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold"
                    : `font-normal relative hover:text-[rgba(24,50,98,0.5)] 
             after:content-[''] after:absolute after:left-0 after:right-0 
             after:bottom-[-2px] after:h-[2px] after:bg-[rgba(24,50,98,0.5)] 
             after:scale-x-0 after:origin-center after:transition-transform 
             after:duration-200 hover:after:scale-x-50`
                }`
              }
            >
              Beranda
            </NavLink>
          </li>

          <li>
            <Link
              to="fasilitas"
              smooth={true}
              duration={500}
              className="flex items-center font-normal relative hover:text-[rgba(24,50,98,0.5)] 
             after:content-[''] after:absolute after:left-0 after:right-0 
             after:bottom-[-2px] after:h-[2px] after:bg-[rgba(24,50,98,0.5)] 
             after:scale-x-0 after:origin-center after:transition-transform 
             after:duration-200 hover:after:scale-x-50"
            >
              Fasilitas
            </Link>
          </li>

          <li>
            <NavLink
              to="/lomba"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "font-bold"
                    : `font-normal relative hover:text-[rgba(24,50,98,0.5)] 
             after:content-[''] after:absolute after:left-0 after:right-0 
             after:bottom-[-2px] after:h-[2px] after:bg-[rgba(24,50,98,0.5)] 
             after:scale-x-0 after:origin-center after:transition-transform 
             after:duration-200 hover:after:scale-x-50`
                }`
              }
            >
              Lomba
            </NavLink>
          </li>

          <li>
            <Link
              to="footer"
              smooth={true}
              duration={700}
              className={`${
                activeMenu === "kontak"
                  ? "font-bold"
                  : `font-normal relative hover:text-[rgba(24,50,98,0.5)] 
             after:content-[''] after:absolute after:left-0 after:right-0 
             after:bottom-[-2px] after:h-[2px] after:bg-[rgba(24,50,98,0.5)] 
             after:scale-x-0 after:origin-center after:transition-transform 
             after:duration-200 hover:after:scale-x-50`
              }`}
            >
              Kontak
            </Link>
          </li>

          <li>
            <a
              href="reservasi"
              className={` text-white px-4 py-2 rounded-3xl transition duration-300 font-normal ${
                isScrolled
                  ? "bg-white hover:bg-gray-300 text-[#183262]"
                  : "bg-[rgba(24,50,98,1.0)] hover:bg-[rgba(24,50,98,1.0)]"
              }`}
            >
              Reservasi
            </a>
          </li>
        </ul>

        {/* Language Dropdown */}
        <div className="relative group mt-3">
          <button
            onClick={toggleLanguageDropdown}
            className="flex items-center text-white font-semibold"
          >
            <FontAwesomeIcon icon={faGlobe} className="mr-2" />
            {language === "English" ? (
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
            <ul className="absolute left-0 right-0 text-white mt-2 w-[135px] bg-[rgba(24,50,98,0.2)] backdrop-blur-lg shadow-lg mx-auto rounded-lg">
              <li
                onClick={() => handleLanguageChange("English")}
                className="px-4 py-2 hover:bg-[rgba(24,50,98,0.8)] cursor-pointer border-b border-b-blue-400 last:border-b-0 rounded-lg flex items-center"
              >
                <img
                  src="https://flagcdn.com/w20/gb.png"
                  alt="UK flag"
                  className="w-5 h-auto mr-2"
                />
                English
              </li>
              <li
                onClick={() => handleLanguageChange("Indonesia")}
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
      </div>
    </nav>
  );
};

export default Navbar;
