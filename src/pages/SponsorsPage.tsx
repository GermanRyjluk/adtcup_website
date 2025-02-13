import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SponsorGrid from "../components/SponsorGrid";

const SponsorsPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-16">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          I nostri Sponsor
        </h1>
        <SponsorGrid />
      </main>
      <Footer />
    </div>
  );
};

export default SponsorsPage;
