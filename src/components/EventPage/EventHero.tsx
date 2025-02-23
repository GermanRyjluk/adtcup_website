import React, { useEffect, useRef } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";

const EventHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={heroRef} className="relative min-h-screen overflow-hidden">
      {/* Parallax Background Image */}
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fbb%2F4e%2F0b%2Fbb4e0b3c948f63c08e0205f645181bf1.jpg&f=1&nofb=1&ipt=ca8a73ad714d6ace72bf741ea1cb508577e46c6d18ef49bc5cc0d73bdbd257d8&ipo=images"
          alt="Urban treasure hunt"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-32">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            La Grande Caccia al Tesoro di Milano
          </h1>

          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center gap-2">
              <Calendar className="w-6 h-6 text-[#FEB635]" />
              <span className="text-lg">15 Maggio 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-6 h-6 text-[#FEB635]" />
              <span className="text-lg">14:30 - 18:30</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-6 h-6 text-[#FEB635]" />
              <span className="text-lg">Piazza Duomo, Milano</span>
            </div>
          </div>

          {/* Featured CTA Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/20">
              <p className="text-xl mb-6">
                Un'avventura unica alla scoperta dei segreti nascosti di Milano.
                Enigmi, misteri e premi straordinari ti aspettano!
              </p>
              <button className="bg-[#FEB635] text-[#1B4D98] px-8 py-4 rounded-xl font-bold text-lg transition transform duration-300 hover:scale-105 hover:bg-[#FEB635]/90 shadow-lg">
                Inizia l'Avventura
              </button>
              <p className="mt-4 text-sm text-gray-200">
                Solo {50 - 32} posti rimasti!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Fade Transition */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[15vh] bg-gradient-to-t from-white to-transparent" />
    </div>
  );
};

export default EventHero;
