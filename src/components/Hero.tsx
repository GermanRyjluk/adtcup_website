import React from "react";
import { MapPin, Trophy, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#1B4D98] to-blue-900 pt-16">
      {/* 
        Parallax City Skyline
        Use "bg-fixed" or "bg-attachment-fixed" so it stays fixed on scroll,
        creating a parallax effect relative to the content scrolling over it.
      */}
      <div
        className="
          absolute inset-0 
          bg-[url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1920')] 
          bg-cover bg-center bg-fixed 
          opacity-10
        "
      />

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center">
          <div className="inline-block mb-4">
            <div className="bg-[#FEB635]/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6 border border-[#FEB635]/30">
              <span className="text-[#FEB635] font-semibold">
                In arrivo: Le Idi di Marzo - 15 Marzo! ✨
              </span>
            </div>
          </div>

          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
            <span className="block">La Città è il tuo Playground</span>
            <span className="block text-[#FEB635] mt-2 drop-shadow-[0_0_30px_rgba(254,182,53,0.3)]">
              ADT CUP
            </span>
          </h1>

          <p className="mt-6 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-8 md:text-xl md:max-w-3xl">
            Unisciti alla caccia al tesoro più folle di sempre! Sfide, giochi e
            missioni epiche ti aspettano. Mettiti alla prova, fai nuove amicizie
            e vinci fantastici premi!
          </p>

          <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
            <div className="rounded-md shadow-[0_0_30px_rgba(254,182,53,0.3)]">
              <button className="w-full bg-[#FEB635] text-[#1B4D98] px-8 py-4 rounded-lg font-semibold text-lg transition transform duration-150 shadow-lg active:scale-95 active:shadow-sm">
                Inizia l'avventura
              </button>
            </div>
          </div>
        </div>

        {/* Feature Columns */}
        <div className="mt-20 mb-32 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-white backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="transform-gpu transition-transform duration-300 hover:scale-110">
              <Trophy
                size={48}
                className="text-[#FEB635] drop-shadow-[0_0_10px_rgba(254,182,53,0.5)]"
                strokeWidth={0.5}
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Entra nel gioco</h3>
            <p className="mt-2 text-gray-300 text-center">
              Risolvi indovinelli, sfida gli altri nei giochi e accumula punti
              per portare la tua squadra alla vittoria!
            </p>
          </div>
          <div className="flex flex-col items-center text-white backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="transform-gpu transition-transform duration-300 hover:scale-110">
              <Users
                size={48}
                className="text-[#FEB635] drop-shadow-[0_0_10px_rgba(254,182,53,0.5)]"
                strokeWidth={0.5}
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Crea nuovi legami</h3>
            <p className="mt-2 text-gray-300 text-center">
              Conosci nuove persone, stringi amicizie e crea legami che
              dureranno oltre il gioco!
            </p>
          </div>
          <div className="flex flex-col items-center text-white backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="transform-gpu transition-transform duration-300 hover:scale-110">
              <MapPin
                size={48}
                className="text-[#FEB635] drop-shadow-[0_0_10px_rgba(254,182,53,0.5)]"
                strokeWidth={0.5}
              />
            </div>
            <h3 className="mt-4 text-xl font-semibold">Vinci la Città</h3>
            <p className="mt-2 text-gray-300 text-center">
              Scopri la città in modo unico, supera le prove e conquistala con
              la tua squadra!
            </p>
          </div>
        </div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 right-0 w-full border-0">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            className="fill-gray-100"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,165.3C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
