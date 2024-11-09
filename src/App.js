import React from "react";
import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Lomba from "./pages/Lomba";
import Penyewaan from "./pages/Penyewaan";
import Restoran from "./pages/Restoran";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/lomba" element={<Lomba />} />
        <Route path="/restoran" element={<Restoran />} />
        <Route path="/penyewaan" element={<Penyewaan />} />
      </Routes>
    </div>
  );
}

export default App;
