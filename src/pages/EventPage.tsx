import React from "react";
import EventHero from "../components/EventPage/EventHero";
import EventDetails from "../components/EventPage/EventDetails";
import GameGuide from "../components/EventPage/GameGuide";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

function EventPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <EventHero />
        <EventDetails />
        <GameGuide />
      </main>
      <Footer />
    </div>
  );
}

export default EventPage;
