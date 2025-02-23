import React from "react";
import Navbar from "../components/Shared/Navbar";
import Hero from "../components/HomePage/Hero";
import EventDetails from "../components/HomePage/EventDetails";
import StoryPreview from "../components/HomePage/StoryPreview";
import PastEvents from "../components/HomePage/PastEvents";
import Footer from "../components/Shared/Footer";
import LogoCarousel from "../components/HomePage/LogoCarousel";
import AppDownload from "../components/HomePage/AppDownload";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
          <EventDetails />
        </section>
        <StoryPreview />
        <PastEvents />
        <LogoCarousel />
        <AppDownload />
      </main>

      <Footer />
    </div>
  );
}

export default App;
