import React from "react";
import {
  UserPlus,
  Download,
  Gamepad,
  Mail,
  Store,
  PlayCircle,
  PhoneCall,
  Trophy,
  Users,
} from "lucide-react";

const GameGuide = () => {
  return (
    <section className="pt-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1B4D98] mb-4">
            Unisciti ad ADTCUP
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entra a far parte della più grande community di cacciatori di tesori
            urbani d'Italia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Steps */}
          <div className="space-y-8">
            <Step
              number={1}
              icon={UserPlus}
              title="Crea il tuo Account"
              description="Bastano 2 minuti per iniziare la tua avventura"
              details={[
                "Visita app.adtcup.it",
                "Inserisci la tua email",
                "Crea una password sicura",
                "Scegli il tuo username",
              ]}
            />

            <Step
              number={2}
              icon={Download}
              title="Scarica l'App"
              description="Disponibile per iOS e Android"
              details={[
                'Cerca "ADTCUP" nell\'App Store',
                'Cerca "ADTCUP" nel Play Store',
                "Download rapido (25MB)",
                "Installazione guidata",
              ]}
            />

            <Step
              number={3}
              icon={Gamepad}
              title="Completa il Profilo"
              description="Personalizza la tua esperienza"
              details={[
                "Accedi con il tuo account",
                "Scegli la tua regione",
                "Seleziona il personaggio",
                "Tutorial di 5 minuti",
              ]}
            />

            <Step
              number={4}
              icon={PlayCircle}
              title="Partecipa al tuo Primo Evento"
              description="È tempo di mettersi in gioco"
              details={[
                'Premi "Gioca Ora"',
                "Scegli la modalità",
                "Trova una partita",
                "Divertiti!",
              ]}
            />
          </div>

          {/* Download Cards */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-[#1B4D98]">
                  Scarica Ora
                </h3>
                <div className="flex items-center gap-2 text-[#FEB635]">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">50K+ giocatori</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <button className="flex items-center justify-center gap-3 bg-black text-white p-4 rounded-xl hover:bg-black/90 transition-colors">
                  <Store className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-75">Scarica su</div>
                    <div className="font-semibold">App Store</div>
                  </div>
                </button>

                <button className="flex items-center justify-center gap-3 bg-[#1B4D98] text-white p-4 rounded-xl hover:bg-[#1B4D98]/90 transition-colors">
                  <Store className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs opacity-75">Disponibile su</div>
                    <div className="font-semibold">Google Play</div>
                  </div>
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <Trophy className="w-6 h-6 text-[#FEB635]" />
                  <div className="text-sm">
                    <strong>Bonus Benvenuto:</strong>
                    <br />
                    500 punti esperienza
                  </div>
                </div>
                <button className="whitespace-nowrap px-4 py-2 bg-[#FEB635] text-[#1B4D98] rounded-lg font-semibold hover:bg-[#FEB635]/90 transition-colors">
                  Riscatta Ora
                </button>
              </div>
            </div>

            {/* Support Card */}
            <div className="bg-[#1B4D98] text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">Hai bisogno di aiuto?</h3>
              <p className="text-gray-200 mb-6">
                Il nostro team di supporto è disponibile 7 giorni su 7 per
                aiutarti
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:support@adtcup.it"
                  className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>support@adtcup.it</span>
                </a>
                <a
                  href="tel:+390123456789"
                  className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>+39 012 345 6789</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface StepProps {
  number: number;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

const Step = ({
  number,
  icon: Icon,
  title,
  description,
  details,
}: StepProps) => {
  return (
    <div className="flex gap-6">
      <div className="flex-shrink-0 w-12 h-12 bg-[#1B4D98] text-white rounded-xl flex items-center justify-center font-bold text-xl">
        {number}
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-3 mb-2">
          <Icon className="w-6 h-6 text-[#FEB635]" />
          <h3 className="text-xl font-bold text-[#1B4D98]">{title}</h3>
        </div>
        <p className="text-gray-600 mb-3">{description}</p>
        <ul className="space-y-2">
          {details.map((detail, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <div className="w-1.5 h-1.5 bg-[#FEB635] rounded-full" />
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GameGuide;
