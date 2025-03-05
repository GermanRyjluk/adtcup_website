import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Mission from "../components/AboutUs/VisionMission";
import Team from "../components/AboutUs/Team";
import Footer from "../components/Shared/Footer";
import Navbar from "../components/Shared/Navbar";
import VisionMission from "../components/AboutUs/VisionMission";
import Story from "../components/AboutUs/Story";

export default function AboutUs() {
  return (
    <>
      <Navbar />

      <main className="bg-white overflow-hidden">
        {/* HERO SECTION */}
        <header className="relative bg-gradient-to-r from-[#1B4D98] to-[#2b4c7c] text-white py-24 pb-16">
          <div className="absolute inset-x-0 bottom-0">
            {/* Decorative SVG wave */}
            <svg
              viewBox="0 0 1440 320"
              className="w-full text-white -mb-1"
              fill="currentColor"
              preserveAspectRatio="none"
            >
              <path d="M0,224L30,213.3C60,203,120,181,180,192C240,203,300,245,360,234.7C420,224,480,160,540,154.7C600,149,660,203,720,208C780,213,840,171,900,165.3C960,160,1020,192,1080,213.3C1140,235,1200,245,1260,224C1320,203,1380,149,1410,122.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" />
            </svg>
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
              CHI SIAMO?
            </h1>
            <p className="max-w-2xl mx-auto leading-relaxed text-lg">
              Benvenutə! Qui scoprirai perché ADT CUP è molto più di un semplice
              progetto: è un’idea nata per coinvolgere e ispirare chi, come noi,
              vuole vivere esperienze innovative.
            </p>
          </div>
        </header>
      </main>
      <Story />
      <VisionMission />
      <Team />
      <Footer />
    </>
  );
}
