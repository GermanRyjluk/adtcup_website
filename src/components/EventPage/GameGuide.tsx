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
  Youtube,
  // Aggiungi altre icone Lucide se ti servono per il catalogo
  Gift,
  Ticket,
  MapPin,
} from "lucide-react";

const GameGuide = () => {
  return (
    <>
      {/* Sezione originale */}
      <section className="pt-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B4D98] mb-4">
              Unisciti ad ADTCUP
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Unisciti alla community più epica di esploratori urbani e vivi
              l’emozione della caccia al tesoro più bella d’Italia! 🚀🏆
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Steps */}
            <div className="space-y-8">
              <Step
                number={1}
                icon={UserPlus}
                title="Compila il form"
                description="Compila il form ADT della personalità per trovarti i compagni migliori"
                details={[
                  "Premi il bottone in basso",
                  "Compila il questionario",
                  "Invia la risposta",
                ]}
              />

              <Step
                number={2}
                icon={Download}
                title="Scarica l'App"
                description="Necessaria per la partecipazione all'evento"
                details={["Ricevi indovinelli e indizi", "asdasd"]}
              />

              <Step
                number={3}
                icon={Gamepad}
                title="Registrati e ultimi step"
                description="Personalizza la tua esperienza"
                details={[
                  "Accedi con il tuo account",
                  "Scegli la tua regione",
                  "Seleziona il personaggio",
                  "Tutorial di 5 minuti",
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
                    <span className="font-semibold">100+ iscritti</span>
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
                    <Youtube className="w-10 h-10 text-[#FEB635]" />
                    <div className="text-sm">
                      <strong>Guarda il tutorial:</strong>
                      <br />
                      Se non hai capito niente, tranquil@, guarda questo video
                    </div>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=xvFZjo5PgG0"
                    className="whitespace-nowrap px-4 py-2 bg-[#FEB635] text-[#1B4D98] rounded-lg font-semibold hover:bg-[#FEB635]/90 active:scale-95 transition-transform duration-75"
                  >
                    Video tutorial
                  </a>
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-[#1B4D98] text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">
                  Hai bisogno di aiuto?
                </h3>
                <p className="text-gray-200 mb-6">
                  Il nostro team di supporto è disponibile 7 giorni su 7 per
                  aiutarti
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:adtcup07@gmail.it"
                    className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>adtcup07@gmail.it</span>
                  </a>
                  <a
                    href="https://wa.me/393311662219?"
                    className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-xl hover:bg-white/20 transition-colors"
                  >
                    <PhoneCall className="w-5 h-5" />
                    <span>+39 331 166 2219</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* ... eventuali contenuti testuali / Lorem ... */}
        </div>
      </section>

      {/* Nuova Sezione: Premio Unico + Catalogo */}
    </>
  );
};

/* STEP COMPONENT */
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

/* CATALOGO PREMI: CARD COMPONENT */
interface PrizeOptionProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const PrizeOption = ({ icon: Icon, title, description }: PrizeOptionProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 flex flex-col items-center">
      <Icon className="w-12 h-12 text-[#1B4D98] mb-4" />
      <h4 className="text-lg font-bold text-[#1B4D98] mb-2">{title}</h4>
      <p className="text-gray-600 text-center text-sm">{description}</p>
    </div>
  );
};

export default GameGuide;
