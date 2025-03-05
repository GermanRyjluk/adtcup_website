import React, { useEffect, useRef, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { MapPin, Trophy, Users, Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Set up staggered animation for the content overlay.
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: "easeOut" },
    }),
  };

  // Parallax background effect remains as-is.
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && imageRef.current) {
        const scrolled = window.scrollY;
        const rate = scrolled * 0.3;
        imageRef.current.style.transform = `translateY(${rate}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to the bottom of the hero section on CTA click.
  const handleCTA = () => {
    if (heroRef.current) {
      window.scrollTo({
        top: heroRef.current.offsetHeight - 70,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen pt-16 overflow-hidden">
      {/* Parallax Background Image */}
      <Parallax translateY={[-100, 100]} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920"
          alt="City Skyline"
          className="w-full h-full object-cover opacity-90"
        />
      </Parallax>

      {/* Semi-transparent Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#1B4D98]/80 to-blue-900/80"></div>

      {/* Hero Content with Framer Motion */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <motion.div
          className="text-center text-white"
          initial="hidden"
          animate="visible"
        >
          <motion.div
            custom={0}
            variants={contentVariants}
            className="inline-block mb-4"
          >
            <div className="bg-[#FEB635]/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-[#FEB635]/30">
              <span className="text-[#FEB635] font-semibold">
                In arrivo: Le Idi di Marzo - 15 Marzo! ✨
              </span>
            </div>
          </motion.div>
          <motion.h1
            custom={1}
            variants={contentVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg mb-6"
          >
            <span className="block">La Città è il tuo Playground</span>
            <span className="block text-[#FEB635] mt-2 drop-shadow-[0_0_30px_rgba(254,182,53,0.3)]">
              ADT CUP
            </span>
          </motion.h1>
          <motion.p
            custom={2}
            variants={contentVariants}
            className="mt-6 max-w-md mx-auto text-base sm:text-lg md:mt-8 md:text-xl md:max-w-3xl text-gray-300"
          >
            Unisciti alla caccia al tesoro più folle di sempre! Sfide, giochi e
            missioni epiche ti aspettano. Mettiti alla prova, fai nuove amicizie
            e vinci fantastici premi!
          </motion.p>
          <motion.div
            custom={3}
            variants={contentVariants}
            className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCTA}
              className="w-full bg-[#FEB635] text-[#1B4D98] px-8 py-4 rounded-lg font-bold text-lg transition transform duration-150 shadow-lg active:scale-95 active:shadow-sm"
            >
              Inizia l'avventura
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Feature Columns with interactive hover */}
        <motion.div
          className="mt-20 mb-32 grid grid-cols-1 gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="flex flex-col items-center text-white backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Trophy
                size={48}
                className="text-[#FEB635] drop-shadow-[0_0_10px_rgba(254,182,53,0.5)]"
                strokeWidth={0.5}
              />
            </motion.div>
            <h3 className="mt-4 text-xl font-semibold">Entra nel gioco</h3>
            <p className="mt-2 text-gray-300 text-center">
              Risolvi indovinelli, sfida gli altri nei giochi e accumula punti
              per portare la tua squadra alla vittoria!
            </p>
          </div>
          <div className="flex flex-col items-center text-white backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <motion.div whileHover={{ scale: 1.1 }}>
              <Users
                size={48}
                className="text-[#FEB635] drop-shadow-[0_0_10px_rgba(254,182,53,0.5)]"
                strokeWidth={0.5}
              />
            </motion.div>
            <h3 className="mt-4 text-xl font-semibold">Crea nuovi legami</h3>
            <p className="mt-2 text-gray-300 text-center">
              Conosci nuove persone, stringi amicizie e crea legami che
              dureranno oltre il gioco!
            </p>
          </div>
          <div className="flex flex-col items-center text-white backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <motion.div whileHover={{ scale: 1.1 }}>
              <MapPin
                size={48}
                className="text-[#FEB635] drop-shadow-[0_0_10px_rgba(254,182,53,0.5)]"
                strokeWidth={0.5}
              />
            </motion.div>
            <h3 className="mt-4 text-xl font-semibold">Vinci la Città</h3>
            <p className="mt-2 text-gray-300 text-center">
              Scopri la città in modo unico, supera le prove e conquistala con
              la tua squadra!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Wave SVG at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="block"
        >
          <path
            className="fill-gray-100"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
