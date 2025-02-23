import React, { useState } from "react";
import { Calendar, MapPin, Users } from "lucide-react";

const EventDetails = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    // Ensure the whole component is capped at 100vh and scrollable if needed.
    <div className="bg-gray-100 overflow-y-hidden py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-[#1B4D98]">
              Prossimo Evento:
            </h2>
            <h3 className="text-4xl font-bold text-[#1B4D98] mb-2 text-center">
              ADT CUP
            </h3>
            <h4 className="text-2xl font-bold text-[#1B4D98] mb-8 text-center">
              LE IDI DI MARZO
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Event details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1B4D98] p-3 rounded-lg">
                    <Calendar className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Data</h3>
                    <p className="text-gray-700">15 Marzo 2025 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1B4D98] p-3 rounded-lg">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Luogo</h3>
                    <p className="text-gray-700">Parco del Valentino, Torino</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1B4D98] p-3 rounded-lg">
                    <Users className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Partecipanti</h3>
                    <p className="text-gray-700">Squadre da 4 persone</p>
                  </div>
                </div>
              </div>
              {/* Right Column: Collapsible organizer message and CTA */}
              <div className="bg-gray-50 p-6 rounded-lg relative">
                <div className="mb-6">
                  <h3 className="font-semibold text-lg mb-2">
                    Messaggio dell'organizzatore
                  </h3>
                  {/* Collapsible content */}
                  <div
                    className="relative overflow-hidden transition-all duration-500"
                    style={{ maxHeight: isExpanded ? "1000px" : "500px" }}
                  >
                    <p className="text-gray-600">
                      Ciao esploratori! 👋 Siete pronti per una nuova avventura?
                      Vi porteremo nel cuore di San Salvario, un quartiere che
                      ha tutto: zone verdi perfette per rilassarsi 🌿, locali
                      della movida dove la serata si accende 🍹, piccole gemme
                      nascoste che aspettano solo di essere scoperte! 🔍✨
                    </p>
                    <br />
                    <p className="font-semibold text-lg mb-4">
                      Cosa è compreso nel prezzo:
                    </p>
                    <ul className="list-none space-y-4 text-gray-600">
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🎯</span>
                        <span>Un’esperienza indimenticabile</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🍻</span>
                        <span>
                          Alcool illimitato durante tutta la durata dell’evento
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🍽️</span>
                        <span>Cena tutti insieme</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">📱</span>
                        <span>
                          Accesso all’app per ricevere indovinelli ed indizi
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🤝</span>
                        <span>
                          Gadget epici che vi aiuteranno (o no) durante l’evento
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🏆</span>
                        <span>
                          La squadra vincitrice potrà scegliere un premio, tra
                          quelli disponibili nel nostro catalogo
                        </span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-xl">🎉</span>
                        <span>Tanti altri premi in palio durante i giochi</span>
                      </li>
                    </ul>
                    {/* Fade overlay visible only when collapsed */}
                    {!isExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent" />
                    )}
                  </div>
                  <button
                    onClick={toggleExpand}
                    className="mt-2 text-[#1B4D98] font-semibold"
                  >
                    {isExpanded ? "Mostra meno" : "Leggi di più"}
                  </button>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prezzo</h4>
                  <p className="text-2xl font-bold text-[#1B4D98]">
                    €25 / persona
                  </p>
                  <a href="/currentEvent">
                    <button className="mt-4 w-full bg-[#FEB635] text-[#1B4D98] font-semibold py-3 px-4 rounded-lg transition transform duration-150 shadow-lg active:scale-95 active:shadow-sm">
                      Inizia l'avventura 🚀
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
