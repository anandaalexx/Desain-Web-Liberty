import React from "react";
import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Lomba from "./pages/Lomba";
import Kolam from "./pages/KolamPemancingan";
import Restoran from "./pages/Restoran";
import Parkir from "./pages/Parkiran";
import Penyewaan from "./pages/Penyewaan";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/lomba" element={<Lomba />} />
        <Route path="/kolam" element={<Kolam />} />
        <Route path="/resto" element={<Restoran />} />
        <Route path="/parkir" element={<Parkir />} />
        <Route path="/penyewaan" element={<Penyewaan />} />
      </Routes>
    </div>
  );
}

export default App;
