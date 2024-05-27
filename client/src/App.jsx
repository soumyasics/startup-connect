import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./Components/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        
        {/* This routes should be last  */}
        <Route path="/*" element={<h1>404 page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
