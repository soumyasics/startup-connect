import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1> Home page</h1>} />
        
        {/* This routes should be last  */}
        <Route path="/*" element={<h1>404 page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
