import React from "react";
import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Lomba from "./pages/Lomba";
import Kolam from "./pages/KolamPemancingan";
import Restoran from "./pages/Restoran";
import Parkir from "./pages/Lain";
import Penyewaan from "./pages/Penyewaan";
import FullGalleryPage from "./pages/FullGalleryPage";
import ScrollTop from "./scroll/scrolltop";
import Reservasi from "./pages/Reservasi";
import Profile from "./pages/Profile";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <div>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Beranda t={t} />} />
        <Route path="/lomba" element={<Lomba t={t} />} />
        <Route path="/kolam" element={<Kolam t={t} />} />
        <Route path="/resto" element={<Restoran t={t} />} />
        <Route path="/lain-lain" element={<Parkir t={t} />} />
        <Route path="/penyewaan" element={<Penyewaan t={t} />} />
        <Route path="/gallery" element={<FullGalleryPage t={t} />} />
        <Route path="/reservasi" element={<Reservasi t={t} />} />
        <Route path="/profile" element={<Profile t={t} />} />
      </Routes>
    </div>
  );
}

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={() => changeLanguage("en")}
        className="px-4 py-2 bg-white text-blue-500 rounded-md"
      >
        English
      </button>
      <button
        onClick={() => changeLanguage("id")}
        className="px-4 py-2 bg-white text-blue-500 rounded-md"
      >
        Bahasa Indonesia
      </button>
    </div>
  );
};

export default App;
