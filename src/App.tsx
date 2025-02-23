// App.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import SponsorsPage from "./pages/SponsorsPage";
import EventPage from "./pages/EventPage";

function App() {
  return (
    <Routes>
      {/* Route for the homepage */}
      <Route path="/" element={<HomeLayout />} />

      {/* Route for /sponsors */}
      <Route path="/sponsors" element={<SponsorsPage />} />

      {/* Route for /event */}
      <Route path="/currentEvent" element={<EventPage />} />
    </Routes>
  );
}

export default App;
