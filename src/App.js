import React from "react";
import { Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Lomba from "./pages/Lomba";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={Beranda} />
        <Route path="/lomba" Component={Lomba} />
      </Routes>
    </div>
  );
}

export default App;
