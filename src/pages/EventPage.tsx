// EventPage.tsx
import React from "react";
import EventHero from "../components/EventPage/EventHero";
import EventDetails from "../components/EventPage/EventDetails";
import GameGuide from "../components/EventPage/GameGuide";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import ManualeADT from "../components/Shared/ManualeADT";
import EventPrice from "../components/EventPage/EventPrices";

function EventPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <EventHero />
        <EventDetails />
        <EventPrice />
        <div id="game-guide">
          <GameGuide />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default EventPage;
