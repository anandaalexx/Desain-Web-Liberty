import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Foto from "../assets/lomba.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUser } from "@fortawesome/free-solid-svg-icons";
import TipsTrick from "../components/TipsTrick";
import Footer from "../components/Footer";

function Lomba() {
  const [showPopup, setShowPopup] = useState(false);

  // State untuk menangani input form
  const [nama, setNama] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");

    const handleKirim = () => {
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000);

    // Membersihkan form setelah klik kirim
    setNama("");
    setNomorTelepon("");
  };

   // Validasi apakah tombol kirim bisa ditekan
   const isFormValid = nama && nomorTelepon;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Header */}
      <header
        className="w-full text-center"
        style={{
          background: "linear-gradient(to bottom, #03B59B, #FFFFFF 80%)",
          height: "355px",
        }}
      >
        <div className="flex justify-center items-center h-full">
          <h1 className="text-5xl font-bold text-[#183262]">
            INFORMASI PERLOMBAAN MEMANCING
          </h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-8 px-4 space-y-10">
        {/* Coming Soon Section */}
        <section className="flex flex-col md:flex-row items-center justify-center py-12 gap-8 mx-auto max-w-full">
          <div className="flex justify-center w-full md:w-1/2">
            <img
              src={Foto}
              alt="Fishing"
              className="rounded-tl-[150px] rounded-br-[150px] object-cover w-[600px] h-[482px]"
            />
          </div>
          <div className="w-full md:w-1/2 text-center">
            <h2 className="font-bold text-[#183262] text-[36px] leading-[32px] md:text-[60px] md:leading-[72px]">
              Coming<br />Soon!
            </h2>
            <p className="text-[#183262] text-2xl mt-2">
              Lomba pemancingan segera dibuka<br />siap-siap raih gelar juara 🎣
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section className="flex justify-center py-12">
          <div
            className="w-full max-w-[1500px] h-[430px] bg-[#03B59B] rounded-tr-[175px] rounded-bl-[175px] flex items-center p-8"
          >
            {/* Text Side */}
            <div className="w-1/2 text-white text-left pl-8 pb-12">
              <h2 className="text-6xl font-bold mb-4 flex justify-center text-right pr-16 leading-[90px]">
                Daftar<br />disini
              </h2>
              <p className="text-2xl flex justify-center pr-16">
                Daftarkan diri anda!
              </p>
            </div>

            {/* Form Side */}
            <div
              className="w-1/2 bg-[#E9F4FC] rounded-tr-[150px] rounded-bl-[150px] p-6 pb-12 pr-12 flex flex-col gap-5 shadow-md h-[330px]"
            >
              {/* Input Form Kontainer */}
              <div className="flex flex-col flex-grow">
                {/* Input Nama */}
                <div className="flex items-center gap-4 border-b-2 border-[#03B59B] pt-8 pb-2 max-w-[100%]">
                  <span className="text-[#000000] text-opacity-40 text-2xl">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)} 
                    placeholder="Nama"
                    className="flex-1 bg-transparent outline-none text-[#000000] text-opacity-40 placeholder:text-[#000000] placeholder:text-opacity-40 font-poppins text-2xl"
                  />
                </div>

                {/* Input Nomor Telepon */}
                <div className="flex items-center gap-4 border-b-2 border-[#03B59B] pt-8 pb-2 max-w-[100%]">
                  <span className="text-[#000000] text-opacity-40 text-2xl">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                    type="text"
                    value={nomorTelepon} 
                    onChange={(e) => setNomorTelepon(e.target.value)} 
                    placeholder="Nomor telepon"
                    className="flex-1 bg-transparent outline-none text-[#000000] text-opacity-40 placeholder:text-[#000000] placeholder:text-opacity-40 font-poppins text-2xl"
                  />
                </div>
              </div>

              {/* Tombol Kirim */}
              <button
                onClick={handleKirim}
                disabled={!isFormValid}
                className="bg-[#183262] text-white py-4 px-20 rounded-2xl self-end hover:bg-[#121d45] text-2xl"
              >
                Kirim
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Popup Notification */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-50 min-h-screen z-50">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <h2 className="text-xl font-semibold mb-4 font-poppins">Pendaftaran Berhasil!</h2>
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