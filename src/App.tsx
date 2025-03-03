// App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import SponsorsPage from "./pages/SponsorsPage";
import EventPage from "./pages/EventPage";
import ManualeADT from "./components/Shared/ManualeADT";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      {/* Route for the homepage */}
      <Route path="/" element={<HomeLayout />} />

      {/* Route for /sponsors */}
      <Route path="/sponsors" element={<SponsorsPage />} />

      {/* Route for /event */}
      <Route path="/currentEvent" element={<EventPage />} />

      {/* Route for /manualeADT */}
      <Route path="/manualeADT" element={<ManualeADT />} />

      {/* Route for /aboutUs */}
      <Route path="/aboutUs" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
