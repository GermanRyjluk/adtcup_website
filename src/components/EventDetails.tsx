import React from "react";
import { Calendar, MapPin, Users, MessageSquare } from "lucide-react";

//cambia tutta questa schermata in modo che sia piu divertente e leggibile per il mio

const EventDetails = () => {
  return (
    <div className="bg-gray-100 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-[#1B4D98] mb-6">
              Prossimo Evento: Caccia al Tesoro Torino
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1B4D98] p-3 rounded-lg">
                    <Calendar className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Data</h3>
                    <p>15 Maggio 2024 - 18:30</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1B4D98] p-3 rounded-lg">
                    <MapPin className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Luogo</h3>
                    <p>Piazza Vittorio Veneto, Torino</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-[#1B4D98] p-3 rounded-lg">
                    <Users className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Partecipanti</h3>
                    <p>Squadre da 4 persone</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-3">
                  {/* <MessageSquare className="text-[#1B4D98]" /> */}
                  <div>
                    <h3 className="font-semibold text-lg mb-2">
                      Messaggio dell'organizzatore
                    </h3>
                    <p className="text-gray-600">
                      Ciao esploratori! 👋 Siete pronti per una nuova avventura
                      nel cuore di Torino? Preparatevi a scoprire angoli
                      nascosti, risolvere enigmi e divertirvi con la vostra
                      squadra! 🗺️ 🏆
                    </p>
                    <br></br>
                    <p className="text-gray-600">
                      Il prezzo include:
                      <li>Cena tutti insieme</li>
                      <li>Alcool illimitato durante l'evento</li>
                      <li>Un dito in culo</li>
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Prezzo</h4>
                  <p className="text-2xl font-bold text-[#1B4D98]">
                    €25 / persona
                  </p>
                  <button className="mt-4 w-full bg-[#FEB635] text-[#1B4D98] font-semibold py-3 px-4 rounded-lg transition transform duration-150 shadow-lg active:scale-95 active:shadow-sm">
                    Inizia l'avventura 🚀
                  </button>
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
