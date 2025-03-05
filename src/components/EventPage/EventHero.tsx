import React, { useEffect, useRef, useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const EventHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    setContentVisible(true);
  }, []);

  // Parallax effect for the background image
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && imageRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.5;
        imageRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to the GameGuide section
  const handleCTA = () => {
    const gameGuideSection = document.getElementById("game-guide");
    if (gameGuideSection) {
      const yOffset = -80;
      const y =
        gameGuideSection.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Parallax Background Image */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbb%2F4e%2F0b%2Fbb4e0b3c948f63c08e0205f645181bf1.jpg&f=1&nofb=1"
          alt="Urban treasure hunt"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </div>

      {/* Content Overlay */}
      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32 transition-opacity duration-1000 ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center text-white">
          <h2 className="text-2xl md:text-6xl font-bold mb-2 drop-shadow-lg">
            ADT CUP
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Le idi di Marzo
          </h1>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-[#FEB635]" />
              <span className="text-lg">Sabato 15 Marzo 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#FEB635]" />
              <span className="text-lg">17:30</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#FEB635]" />
              <span className="text-lg">Parco del Valentino, Torino</span>
            </div>
          </div>

          {/* Featured CTA Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
              <p className="text-xl mb-2">
                Se hai già vissuto il brivido degli eventi ADT, premi su “Inizia
                l’Avventura” e salta la fila!
              </p>
              <p className="text-xl mb-6">
                Se invece vuoi scoprire di più su questa folle serata...
                continua a scorrere!
              </p>
              <button
                onClick={handleCTA}
                className="bg-[#FEB635] text-[#1B4D98] px-8 py-4 rounded-xl font-bold text-lg transition transform duration-300 hover:scale-105 hover:bg-[#FEB635]/90 shadow-lg"
              >
                Inizia l'Avventura
              </button>
              <p className="mt-4 text-sm text-gray-200">
                Non fartelo raccontare!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventHero;
