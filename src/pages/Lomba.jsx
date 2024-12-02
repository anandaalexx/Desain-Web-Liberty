import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Foto from "../assets/lomba.png";
import HeaderSection from "../components/HeaderSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import TipsTrick from "../components/TipsTrick";
import Footer from "../components/Footer";

function Lomba() {
  const [showPopup, setShowPopup] = useState(false);
  const [nama, setNama] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");

  const handleKirim = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);

    setNama("");
    setNomorTelepon("");
  };

  const isFormValid = nama && nomorTelepon;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Header */}
      <HeaderSection title="INFORMASI LOMBA PEMANCINGAN" />

      <div className="max-w-7xl mx-auto py-8 px-4 space-y-10">
        {/* Coming Soon Section */}
        <section className="flex flex-col md:flex-row items-center justify-center py-12 px-4 gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={Foto}
              alt="Fishing"
              className="rounded-tl-[150px] rounded-br-[150px] w-full object-cover h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#183262]">
              Coming Soon!
            </h2>
            <p className="mt-2 text-xl md:text-2xl">
              Lomba pemancingan segera dibuka
              <br />
              Siap-siap raih gelar juara 🎣
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="flex justify-center py-12">
          <div className="w-full max-w-[1500px] bg-[#03B59B] rounded-tr-[175px] rounded-bl-[175px] flex flex-col lg:flex-row items-center p-8">
            {/* Text Side */}
            <div className="w-full lg:w-1/2 text-white text-left lg:pl-40 pb-12 flex flex-col items-center lg:items-start">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center lg:text-right leading-tight lg:leading-[90px]">
                Daftar
                <br />
                disini
              </h2>
              <p className="text-lg md:text-2xl text-center lg:text-right">
                Daftarkan diri anda!
              </p>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-1/2 bg-[#E9F4FC] rounded-tr-[150px] rounded-bl-[150px] p-6 pb-12 pr-6 lg:pr-12 flex flex-col gap-5 shadow-md h-auto lg:h-[330px]">
              {/* Input Form Kontainer */}
              <div className="flex flex-col flex-grow">
                {/* Input Nama */}
                <div className="flex items-center gap-4 border-b-2 border-[#03B59B] pt-4 pb-2">
                  <span className="text-[#000000] text-opacity-40 text-xl md:text-2xl">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama"
                    className="flex-1 bg-transparent outline-none text-[#000000] text-opacity-40 placeholder:text-opacity-40 font-poppins text-lg md:text-2xl"
                  />
                </div>

                {/* Input Nomor Telepon */}
                <div className="flex items-center gap-4 border-b-2 border-[#03B59B] pt-4 pb-2">
                  <span className="text-[#000000] text-opacity-40 text-xl md:text-2xl">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                    type="text"
                    value={nomorTelepon}
                    onChange={(e) => setNomorTelepon(e.target.value)}
                    placeholder="Nomor telepon"
                    className="flex-1 bg-transparent outline-none text-[#000000] text-opacity-40 placeholder:text-opacity-40 font-poppins text-lg md:text-2xl"
                  />
                </div>
              </div>

              {/* Tombol Kirim */}
              <button
                onClick={handleKirim}
                disabled={!isFormValid}
                className="bg-[#183262] text-white py-4 px-12 rounded-2xl self-center lg:self-end mt-6 hover:bg-[#121d45] text-lg md:text-2xl"
              >
                Kirim
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-50 min-h-screen z-50 px-4">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-lg md:text-xl font-semibold mb-4 font-poppins">
              Pendaftaran Berhasil!
            </h2>
            <p>Selamat, Anda telah terdaftar!</p>
          </div>
        </div>
      )}

      <TipsTrick />
      <Footer />
    </div>
  );
}

export default Lomba;
