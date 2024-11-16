import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import BG from "../assets/bg-qr.png";

const QuickRes = () => {
  const [startDate, setStartDate] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    return (
      <div className="grid grid-cols-4 gap-4">
        {/* Kolom 1: Date Picker */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <DatePicker
              selected={startDate}
              onChange={handleDateChange}
              className="absolute opacity-0" // Sembunyikan input bawaan
              placeholderText="Pilih tanggal"
            />
            <button
              onClick={(e) => e.currentTarget.previousSibling.focus()} // Fokuskan ke DatePicker
              className="flex items-center p-3 text-[rgba(24,50,98,1)] rounded-md focus:outline-none"
            >
              <FontAwesomeIcon
                icon={faCalendarDays}
                size="2x"
                className="text-[rgba(24,50,98,1)] mr-2" // Menambahkan margin kanan untuk memberi jarak antara ikon dan teks
              />
              <span className="text-lg">Pilih Tanggal</span>{" "}
              {/* Teks "Pilih Tanggal" */}
              <FontAwesomeIcon
                icon={faChevronDown}
                size="lg"
                className="text-[rgba(24,50,98,1)] ml-2" // Menambahkan margin kiri untuk memberi jarak antara teks dan ikon chevron
              />
            </button>
          </div>
        </div>

        {/* Kolom 2: Tanggal yang Dipilih */}
        <div className="flex items-center justify-center">
          <p className="text-[rgba(24,50,98,1)] font-normal">
            {startDate
              ? `Tanggal yang dipilih: ${startDate.toLocaleDateString()}`
              : "Tanggal belum dipilih"}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="h-3/4 border-l-2 border-[rgba(24,50,98,1)]"></div>
        </div>

        {/* Kolom 3: Tombol */}
        <div className="flex items-center justify-center">
          <button
            onClick={() => alert("Reservasi dilanjutkan")}
            className="px-6 py-2 bg-[rgba(24,50,98,1)] text-white font-semibold rounded-md hover:bg-opacity-80"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(24, 50, 98, 0.5) 0%, rgba(3, 181, 155, 0.1) 100%), url(${BG})`,
      }}
      className="w-full h-screen bg-cover bg-center relative py-16 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-white text-6xl font-bold mb-4 text-center">
          Reservasi Cepat
        </h2>
        <p className="text-white mb-4 font-light text-3xl text-center">
          Siapkan tanggal terbaikmu untuk memancing bersama kami! Pilih tanggal
          reservasi di bawah dan lanjutkan untuk memastikan rencanamu.
        </p>
        <div className="w-full relative my-12">
          <div className="w-1/2 relative right-0">
            <ul
              className="relative flex flex-wrap px-1.5 py-1.5 list-none rounded-t-md bg-white/50"
              role="list"
            >
              <div
                className={`absolute w-[40%] h-[70%] bg-[rgba(24,50,98,1)] rounded-md transition-all duration-500 ease-in-out transform ${
                  activeTab === "dashboard"
                    ? "translate-x-3"
                    : activeTab === "settings"
                    ? "translate-x-[126%]"
                    : "translate-x-[0%]"
                }`}
                style={{ top: "15%" }}
              />
              <li className="z-30 flex-auto text-center relative">
                <button
                  onClick={() => handleTabClick("dashboard")}
                  className={`z-30 flex items-center justify-center w-full px-4 py-2 text-md mb-0 font-normal transition-colors duration-300 ease-in-out cursor-pointer ${
                    activeTab === "dashboard"
                      ? "text-white"
                      : "text-[rgba(24,50,98,1)]"
                  }`}
                  aria-selected={activeTab === "dashboard"}
                  role="tab"
                >
                  Reservasi
                </button>
              </li>
              <li className="z-30 flex-auto text-center relative">
                <button
                  onClick={() => handleTabClick("settings")}
                  className={`z-30 flex items-center justify-center w-full px-4 py-2 text-md mb-0 font-normal transition-colors duration-300 ease-in-out cursor-pointer ${
                    activeTab === "settings"
                      ? "text-white"
                      : "text-[rgba(24,50,98,1)]"
                  }`}
                  aria-selected={activeTab === "settings"}
                  role="tab"
                >
                  Daftar Lomba
                </button>
              </li>
            </ul>
          </div>
          <div className="-mt-4">
            <div
              className="p-3 bg-white rounded-tr-2xl rounded-br-2xl rounded-bl-xl shadow-md mt-4"
              style={{ background: "rgba(255, 255, 255, 0.8)" }}
            >
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickRes;
