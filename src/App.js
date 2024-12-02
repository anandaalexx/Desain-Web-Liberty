import React from "react";
import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Lomba from "./pages/Lomba";
import Kolam from "./pages/KolamPemancingan";
import Restoran from "./pages/Restoran";
import Parkir from "./pages/Parkiran";
import Penyewaan from "./pages/Penyewaan";
import FullGalleryPage from "./pages/FullGalleryPage";
import ScrollTop from "./scroll/scrolltop";
import Reservasi from "./pages/Reservasi";

function App() {
  return (
    <div>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/lomba" element={<Lomba />} />
        <Route path="/kolam" element={<Kolam />} />
        <Route path="/resto" element={<Restoran />} />
        <Route path="/parkir" element={<Parkir />} />
        <Route path="/penyewaan" element={<Penyewaan />} />
        <Route path="/gallery" element={<FullGalleryPage />} />
        <Route path="/reservasi" element={<Reservasi/>} />
      </Routes>
    </div>
  );
}

export default App;
