import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import SponsorsPage from "./pages/SponsorsPage";
import EventPage from "./pages/EventPage";
import ManualeADT from "./components/Shared/ManualeADT";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/Shared/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/sponsors" element={<SponsorsPage />} />
        <Route path="/currentEvent" element={<EventPage />} />
        <Route path="/manualeADT" element={<ManualeADT />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
