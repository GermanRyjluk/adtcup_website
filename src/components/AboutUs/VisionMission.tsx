import React from "react";
import { Rocket, Compass } from "lucide-react";

const VisionMission = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#1B4D98] mb-6">
          Mission & Vision
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          ADT CUP trasforma la città in un campo di gioco, con eventi che
          connettono le persone e valorizzano il divertimento autentico.
          Vogliamo superare le barriere digitali, promuovendo esperienze reali e
          inclusive.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Mission Card */}
        <div className="bg-gradient-to-br from-[#FFF6E6] to-white shadow-2xl rounded-2xl p-8 flex flex-col items-center transform hover:scale-105 transition-transform duration-300 border border-gray-200">
          <div className="bg-[#FEB635] p-4 rounded-full text-white mb-6 shadow-md">
            <Compass className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-[#1B4D98] mb-4 text-center">
            Mission
          </h3>
          <p className="text-gray-700 text-base md:text-lg text-center">
            Il nostro sogno è trasformare ADT CUP in un punto di riferimento per
            esperienze fuori dagli schemi, guidando le persone verso un rapporto
            più sano con la tecnologia, che arricchisca la vita e crei momenti
            di vera connessione.
          </p>
        </div>
        {/* Vision Card */}
        <div className="bg-gradient-to-br from-[#E6F2FF] to-white shadow-2xl rounded-2xl p-8 flex flex-col items-center transform hover:scale-105 transition-transform duration-300 border border-gray-200">
          <div className="bg-[#1B4D98] p-4 rounded-full text-white mb-6 shadow-md">
            <Rocket className="w-12 h-12" />
          </div>
          <h3 className="text-2xl font-semibold text-[#1B4D98] mb-4 text-center">
            Vision
          </h3>
          <p className="text-gray-700 text-base md:text-lg text-center">
            Il nostro obiettivo è connettere le persone nella vita reale,
            superando le barriere dei social e riscoprendo il piacere delle vere
            amicizie. Vogliamo creare un ambiente inclusivo e stimolante, dove
            autenticità e divertimento si fondono.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
