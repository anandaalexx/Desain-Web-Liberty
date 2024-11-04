import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BG from "../assets/bg-qr.png";

const QuickRes = () => {
  const [startDate, setStartDate] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <p className="text-slate-400 font-light">
            Konten untuk Dashboard: Informasi mengenai reservasi.
          </p>
        );
      case "profile":
        return (
          <p className="text-slate-400 font-light">
            Konten untuk Profile: Kebijakan reservasi dan pembatalan.
          </p>
        );
      case "settings":
        return (
          <p className="text-slate-400 font-light">
            Konten untuk Settings: Pertanyaan yang sering diajukan (FAQ).
          </p>
        );
      default:
        return <p>Pilih tab untuk melihat konten.</p>;
    }
  };

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(24, 50, 98, 0) 0%, rgba(3, 181, 155, 0.5) 100%), url(${BG})`,
      }}
      className="w-full h-screen bg-cover bg-center relative py-16 flex items-center justify-center"
    >
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-white text-6xl font-bold mb-4 text-center">
          Reservasi Cepat
        </h2>
        <p className="text-white mb-4 font-light text-3xl text-center">
          Siapkan tanggal terbaikmu untuk memancing bersama kami! Pilih tanggal
          reservasi di bawah dan lanjutkan untuk memastikan rencanamu.
        </p>

        <div className="w-full">
          <div className="relative right-0">
            <ul
              className="relative flex flex-wrap w-1/3 px-1.5 py-1.5 list-none rounded-md bg-slate-100"
              data-tabs="tabs"
              role="list"
            >
              <li className="z-30 flex-auto text-center">
                <a
                  className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out duration-300 border-0 rounded-md cursor-pointer ${
                    activeTab === "dashboard"
                      ? "text-slate-600 bg-slate-200"
                      : "text-slate-600 bg-inherit"
                  }`}
                  onClick={() => setActiveTab("dashboard")}
                  role="tab"
                  aria-selected={activeTab === "dashboard"}
                  aria-controls="dashboard"
                >
                  Dashboard
                </a>
              </li>
              <li className="z-30 flex-auto text-center">
                <a
                  className={`z-30 flex items-center justify-center w-full px-0 py-2 mb-0 text-sm transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                    activeTab === "profile"
                      ? "text-slate-600 bg-slate-200"
                      : "text-slate-600 bg-inherit"
                  }`}
                  onClick={() => setActiveTab("profile")}
                  role="tab"
                  aria-selected={activeTab === "profile"}
                  aria-controls="profile"
                >
                  Profile
                </a>
              </li>
              <li className="z-30 flex-auto text-center">
                <a
                  className={`z-30 flex items-center justify-center w-full px-0 py-2 text-sm mb-0 transition-all ease-in-out border-0 rounded-lg cursor-pointer ${
                    activeTab === "settings"
                      ? "text-slate-600 bg-slate-200"
                      : "text-slate-600 bg-inherit"
                  }`}
                  onClick={() => setActiveTab("settings")}
                  role="tab"
                  aria-selected={activeTab === "settings"}
                  aria-controls="settings"
                >
                  Settings
                </a>
              </li>
            </ul>

            <div className="p-5">
              <div
                id="dashboard"
                role="tabpanel"
                className={`tab-content ${
                  activeTab === "dashboard"
                    ? "tab-content-visible"
                    : "tab-content-hidden"
                }`}
              >
                {activeTab === "dashboard" && renderTabContent()}
              </div>
              <div
                id="profile"
                role="tabpanel"
                className={`tab-content ${
                  activeTab === "profile"
                    ? "tab-content-visible"
                    : "tab-content-hidden"
                }`}
              >
                {activeTab === "profile" && renderTabContent()}
              </div>
              <div
                id="settings"
                role="tabpanel"
                className={`tab-content ${
                  activeTab === "settings"
                    ? "tab-content-visible"
                    : "tab-content-hidden"
                }`}
              >
                {activeTab === "settings" && renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickRes;
