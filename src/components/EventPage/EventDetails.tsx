import React from "react";
import {
  Calendar,
  MapPin,
  Clock,
  Car,
  Train,
  Users,
  Trophy,
  Gift,
  Coffee,
  Star,
  FileText,
  UserPlus,
  ClipboardCheck,
  Download,
} from "lucide-react";

const EventDetails = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Intro & Overview */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1B4D98] mb-6">
            ADT Cup: Un'Avventura Urbana Unica
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            ADT Cup trasforma la città in un playground interattivo dove
            strategia, cultura e divertimento si fondono in un'esperienza
            indimenticabile. Preparati a scoprire Milano come non l'hai mai
            vista prima.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Users className="w-5 h-5 text-[#FEB635]" />
              <span>4-6 giocatori per team</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Clock className="w-5 h-5 text-[#FEB635]" />
              <span>4 ore di gioco</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Trophy className="w-5 h-5 text-[#FEB635]" />
              <span>Premi esclusivi</span>
            </div>
          </div>
        </div>

        {/* Description Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <DescriptionCard
            icon={Gift}
            title="Cosa Include"
            items={[
              "Kit completo del cacciatore",
              "Mappa esclusiva della città",
              "App dedicata con indizi",
              "Rinfresco durante l'evento",
              "Premi per i vincitori",
            ]}
          />
          <DescriptionCard
            icon={Coffee}
            title="Durante l'Evento"
            items={[
              "Enigmi da risolvere",
              "Luoghi da scoprire",
              "Sfide di squadra",
              "Foto challenge",
              "Quiz culturali",
            ]}
          />
          <DescriptionCard
            icon={Star}
            title="Premi in Palio"
            items={[
              "Trofeo ADT Cup 2024",
              "Buoni regalo per il team",
              "Gadget esclusivi",
              "Foto ricordo professionali",
              "Certificato di partecipazione",
            ]}
          />
        </div>

        {/* Manual Download */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16 text-center">
          <h3 className="text-2xl font-bold text-[#1B4D98] mb-4">
            Manuale del Partecipante
          </h3>
          <p className="text-gray-600 mb-6">
            Scarica il manuale completo con tutte le regole, i consigli e le
            informazioni necessarie
          </p>
          <button className="inline-flex items-center gap-2 bg-[#1B4D98] text-white px-6 py-3 rounded-xl hover:bg-[#1B4D98]/90 transition-all duration-300 transform hover:scale-105">
            <FileText className="w-5 h-5" />
            <span>Scarica il Manuale PDF</span>
          </button>
        </div>

        {/* Teams & Questionnaire */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#1B4D98] mb-6 flex items-center gap-2">
              <UserPlus className="w-6 h-6 text-[#FEB635]" />
              Forma la Tua Squadra
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FEB635] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Dimensione Team</h4>
                  <p className="text-gray-600">
                    Minimo 4, massimo 6 partecipanti per squadra
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FEB635] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Requisiti</h4>
                  <p className="text-gray-600">
                    Età minima 16 anni, almeno un dispositivo mobile per team
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FEB635] text-white flex items-center justify-center flex-shrink-0 mt-1">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Registrazione</h4>
                  <p className="text-gray-600">
                    Compila il questionario e attendi la conferma via email
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-[#1B4D98] mb-6 flex items-center gap-2">
              <ClipboardCheck className="w-6 h-6 text-[#FEB635]" />
              Questionario di Partecipazione
            </h3>
            <p className="text-gray-600 mb-6">
              Per garantire la migliore esperienza possibile, ti chiediamo di
              compilare un breve questionario sulle preferenze e le esperienze
              del tuo team.
            </p>
            <button className="w-full bg-[#FEB635] text-[#1B4D98] px-6 py-3 rounded-xl font-semibold hover:bg-[#FEB635]/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
              <Download className="w-5 h-5" />
              <span>Compila il Questionario</span>
            </button>
          </div>
        </div>

        {/* Location Map */}
        <div className="bg-gray-50 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <h3 className="text-2xl font-bold text-[#1B4D98] mb-6">
                Informazioni Logistiche
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#FEB635] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Punto di Ritrovo</h4>
                    <p className="text-gray-600">
                      Piazza del Duomo, Milano
                      <br />
                      Presso la fontana centrale
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#FEB635] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Orari</h4>
                    <p className="text-gray-600">
                      Check-in: 14:00 - 14:30
                      <br />
                      Inizio evento: 14:30
                      <br />
                      Fine prevista: 18:30
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Train className="w-6 h-6 text-[#FEB635] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Come Arrivare</h4>
                    <p className="text-gray-600">
                      Metro: M1, M3 (Duomo)
                      <br />
                      Tram: 2, 3, 14
                      <br />
                      Bus: 54, 61, 73
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Car className="w-6 h-6 text-[#FEB635] flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Parcheggio</h4>
                    <p className="text-gray-600">
                      Parcheggio Duomo (Via Pisani 10)
                      <br />
                      Tariffa convenzionata: €5/4h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[400px] md:h-auto relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.2354846666377!2d9.187693776891501!3d45.46416413642161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7eba4d9de5bbcd!2sDuomo%20di%20Milano!5e0!3m2!1sit!2sit!4v1708439161565!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative bottom-0 left-0 right-0 w-full h-[5vh] bg-gradient-to-t from-gray-50 to-transparent" />
    </div>
  );
};

interface DescriptionCardProps {
  icon: React.ElementType;
  title: string;
  items: string[];
}

const DescriptionCard = ({
  icon: Icon,
  title,
  items,
}: DescriptionCardProps) => {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-[#FEB635]/10 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-[#FEB635]" />
        </div>
        <h3 className="text-xl font-semibold text-[#1B4D98]">{title}</h3>
      </div>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Star className="w-4 h-4 text-[#FEB635]" />
            <span className="text-gray-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventDetails;
