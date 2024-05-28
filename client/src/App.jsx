import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPageTopNav from "./LandingPage/LandingPageTopNav";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageTopNav/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
