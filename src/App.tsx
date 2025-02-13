// App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import SponsorsPage from "./pages/SponsorsPage";

function App() {
  return (
    <Routes>
      {/* Route for the homepage */}
      <Route path="/" element={<HomeLayout />} />

      {/* Route for /sponsors */}
      <Route path="/sponsors" element={<SponsorsPage />} />
    </Routes>
  );
}

export default App;
