import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventDetails from "../components/EventDetails";
import StoryPreview from "../components/StoryPreview";
import AboutUs from "../components/AboutUs";
import PastEvents from "../components/PastEvents";
import Footer from "../components/Footer";
import LogoCarousel from "../components/LogoCarousel";
import AppDownload from "../components/AppDownload";

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
