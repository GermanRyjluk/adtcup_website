import React from "react";
import { Rocket, Trophy, Users, Smile } from "lucide-react";

const timelineItems = [
  {
    id: 1,
    title: "L'Idea Nasce",
    description:
      "Nel marzo 2022, Giuseppe e Pietro hanno organizzato un weekend speciale a Torino per un amico, con l'obiettivo di far scoprire la città, divertirsi e vivere la movida in soli due giorni.",
    icon: <Rocket className="w-6 h-6 text-white" />,
  },
  {
    id: 2,
    title: "La Prima ADT CUP",
    description:
      "Da quella esigenza è nata la prima ADT CUP, una caccia al tesoro urbana dal successo immediato, grazie alla spontaneità e al divertimento senza filtri.",
    icon: <Trophy className="w-6 h-6 text-white" />,
  },
  {
    id: 3,
    title: "Il Team Si Rafforza",
    description:
      "Il successo iniziale spinse Federica, Marco e German a unirsi al team per rendere l’esperienza ADT CUP sempre più strutturata e ambiziosa.",
    icon: <Users className="w-6 h-6 text-white" />,
  },
  {
    id: 4,
    title: "Community in Crescita",
    description:
      "Oggi, ADT CUP è una community vibrante di chi ama mettersi in gioco, scoprire nuovi posti e creare ricordi indimenticabili. Le squadre, spesso composte da sconosciuti, nascono per vivere avventure uniche.",
    icon: <Smile className="w-6 h-6 text-white" />,
  },
];

export default function OurStory() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        {/* Sezione Titolo */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D98]">
            La Nostra Storia
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Un viaggio fatto di idee folli, avventure urbane e amicizie vere.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#1B4D98]" />
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={item.id}
                className="relative flex flex-col md:flex-row items-center"
              >
                {/* Punto della Timeline */}
                <div className="z-10 bg-[#1B4D98] w-12 h-12 flex items-center justify-center rounded-full border-4 border-white shadow-lg">
                  {item.icon}
                </div>

                {/* Card di Testo */}
                <div
                  className={`mt-4 md:mt-0 md:w-1/2 p-6 bg-white rounded-xl shadow-lg border border-gray-100 ${
                    index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-[#1B4D98] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
