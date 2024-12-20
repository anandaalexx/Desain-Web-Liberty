import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Foto from "../assets/Rservasi.png";
import HeaderSection from "../components/HeaderSection";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPhone,
  faCalendar,
  faClock,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";

function Reservasi() {
  const [showPopup, setShowPopup] = useState(false);

  // State untuk menangani input form
  const [nama, setNama] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");
  const [waktu, setWaktu] = useState("");
  const [jumlahOrang, setJumlahOrang] = useState("");
  const location = useLocation();

  const [tanggal, setTanggal] = useState("");

  useEffect(() => {
    if (location.state?.selectedDate) {
      const formattedDate = location.state.selectedDate
        .toISOString()
        .split("T")[0];
      setTanggal(formattedDate);
    }
  }, [location.state]);

  const handleKirim = () => {
    // Menampilkan popup
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Menyembunyikan popup setelah 3 detik

    // Membersihkan form setelah klik kirim
    setNama("");
    setNomorTelepon("");
    setTanggal("");
    setWaktu("");
    setJumlahOrang("");
  };

  // Validasi apakah tombol kirim bisa ditekan
  const isFormValid = nama && nomorTelepon && tanggal && waktu && jumlahOrang;

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Header */}
      <HeaderSection title="RESERVASI" />

      <div className="max-w-7xl mx-auto py-8 px-4 space-y-10">
        {/* Form Booking Section */}
        <section className="flex flex-col md:flex-row items-center justify-center py-12 gap-8 mx-auto max-w-full">
          <div className="flex justify-center w-full md:w-1/2 px-4">
            <img
              src={Foto}
              alt="Fishing"
              className="rounded-tl-[150px] rounded-br-[150px] object-cover w-full max-w-[600px] h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center px-4">
            <h2 className="font-bold text-[#183262] text-[36px] leading-[32px] md:text-[60px] md:leading-[72px]">
              Booking
              <br />
              Tempat
              <br />
              Mancing
            </h2>
            <p className="text-[#183262] text-xl md:text-2xl mt-4">
              Siap untuk petualangan memancing?
              <br />
              Pilih tanggal dan waktu yang pas buat kamu!
            </p>
          </div>
        </section>

        <section className="flex justify-center py-12 px-4">
          <div className="w-full max-w-[1500px] bg-[#03B59B] rounded-tr-[150px] rounded-bl-[150px] flex flex-col lg:flex-row items-center p-8">
            {/* Text Side */}
            <div className="w-full lg:w-1/2 text-white text-left pb-12 lg:pr-16">
              <h2 className="text-3xl md:text-6xl font-bold mb-6 leading-tight text-center lg:text-right">
                Siap memulai
                <br />
                petualangan
                <br />
                memancing?
              </h2>
              <p className="text-xl md:text-2xl text-center lg:text-right">
                Pesan tempat sekarang dan pastikan
                <br />
                spot terbaik untuk menikmati waktu
                <br />
                berkualitas di Liberty Fishing Pond!
              </p>
            </div>

            {/* Form Side */}
            <div className="w-full md:w-1/2 bg-[#E9F4FC] rounded-tr-[120px] rounded-bl-[120px] p-6 flex flex-col gap-5 shadow-md h-auto max-w-lg md:max-w-xl mx-auto">
              <div className="flex flex-col gap-6">
                {/* Input Nama */}
                <div className="flex items-center gap-4 border-b-2 border-[#03B59B] pt-4 pb-2">
                  <span className="text-[#000000] text-opacity-40 text-lg md:text-2xl">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    placeholder="Nama"
                    className="flex-1 bg-transparent outline-none text-[#000000] text-opacity-40 placeholder:text-[#000000] placeholder:text-opacity-40 font-poppins text-lg md:text-2xl"
                  />
                </div>

                {/* Input Tanggal */}
                <div className="flex items-center gap-4 border-b-2 border-[#03B59B] pt-4 pb-2">
                  <span className="text-[#000000] text-opacity-40 text-lg md:text-2xl">
                    <FontAwesomeIcon icon={faCalendar} />
                  </span>
                  <input
                    type="date"
                    value={tanggal}
                    onChange={(e) => setTanggal(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-[#000000] text-opacity-40 placeholder:text-[#000000] placeholder:text-opacity-40 font-poppins text-lg md:text-2xl"
                  />
                </div>

                {/* Input Waktu */}
                <div className="flex items-center gap-4 border-b-2 border-[#03B59B] pt-4 pb-2">
                  <span className="text-[#000000] text-opacity-40 text-lg md:text-2xl">
                    <FontAwesomeIcon icon={faClock} />
                  </span>
                  <input
                    type="time"
                    value={waktu}
                    onChange={(e) => setWaktu(e.target.value)}
                    className="flex-1 bg-transparent outline-none text-[#000000] text-opacity-40 placeholder:text-[#000000] placeholder:text-opacity-40 font-poppins text-lg md:text-2xl"
                  />
                </div>

                {/* Input Jumlah Orang */}
                <div className="flex items-center gap-4 border-b-2 border-[#03B59B] pt-4 pb-2">
                  <span className="text-[#000000] text-opacity-40 text-lg md:text-2xl">
                    <FontAwesomeIcon icon={faUsers} />
                  </span>
                  <input
                    type="number"
                    value={jumlahOrang}
                    onChange={(e) => setJumlahOrang(e.target.value)}
                    placeholder="Jumlah orang"
                    className="flex-1 bg-transparent outline-none text-[#000000] text-opacity-40 placeholder:text-[#000000] placeholder:text-opacity-40 font-poppins text-lg md:text-2xl"
                  />
                </div>

                {/* Input Nomor Telepon */}
                <div className="flex items-center gap-4 border-b-2 border-[#03B59B] pt-4 pb-2">
                  <span className="text-[#000000] text-opacity-40 text-lg md:text-2xl">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                    type="text"
                    value={nomorTelepon}
                    onChange={(e) => setNomorTelepon(e.target.value)}
                    placeholder="Nomor telepon"
                    className="flex-1 bg-transparent outline-none text-[#000000] text-opacity-40 placeholder:text-[#000000] placeholder:text-opacity-40 font-poppins text-lg md:text-2xl"
                  />
                </div>
              </div>

              {/* Tombol Kirim */}
              <button
                onClick={handleKirim}
                disabled={!isFormValid}
                className="bg-[#183262] text-white py-3 px-12 rounded-2xl self-center md:self-end hover:bg-[#121d45] text-lg md:text-2xl"
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
            <h2 className="text-xl font-semibold mb-4 font-poppins">
              Pendaftaran Berhasil!
            </h2>
            <p>Selamat, Anda telah terdaftar!</p>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Reservasi;
