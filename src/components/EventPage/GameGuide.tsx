import React from "react";
import {
  UserPlus,
  Download,
  Gamepad,
  Mail,
  Store,
  PhoneCall,
  Users,
  Youtube,
  FileText,
} from "lucide-react";

const GameGuide = () => {
  return (
    <>
      {/* Sezione originale */}
      <section className="pt-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1B4D98] mb-4">
              Unisciti ad ADT CUP
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
                title="Compila il questionario"
                description="Metodo ADT: formiamo squadre basate sulla tua personalità per farti vivere l’esperienza al massimo!"
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
                details={[
                  "Crea il tuo account",
                  "Verifica la tua email",
                  'Premi "Gioca" sull’evento ADT CUP: LE IDI DI MARZO',
                ]}
              />

              <Step
                number={3}
                icon={Gamepad}
                title="Finalizza l’iscrizione"
                details={[
                  "Avanza dopo aver letto le brevi descrizioni dell’evento",
                  "Accetta i Termini e Condizioni",
                  'Premi su "Compila il questionario" (anche se lo hai gia fatto)',
                  "Attendi la risposta dell'ADT Team",
                  "Una volta accettato segui le istruzioni sull'app",
                ]}
              />
            </div>

            {/* Download Cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="flex flex-col items-center mb-6">
                  <h3 className="text-2xl font-bold text-[#1B4D98]">
                    Compila il questionario
                  </h3>
                  <p className="text-center mt-2">
                    Questionario della personalità per trovarti i compagni più
                    adatti a te
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSc8BZMaEe2C4l2vzO0K2NxCHAoDX1TZ_AiYZ9qcBiX8uaZXiw/viewform?pli=1"
                    className="group relative overflow-hidden rounded-2xl bg-[#FEB635] text-white flex items-center transition transform duration-150 shadow-lg active:scale-95 active:shadow-sm"
                  >
                    <div className="relative flex items-center gap-3 px-8 py-4">
                      <img
                        className="w-7"
                        src="/assets/GoogleForms.png"
                        alt="Google Forms logo"
                      />
                      <div>
                        <div className="text-sm opacity-90 text-[#1B4D98]">
                          Compila
                        </div>
                        <div className="text-lg font-bold text-[#1B4D98]">
                          Google Form
                        </div>
                      </div>
                    </div>
                  </a>

                  {/* <button className="flex items-center justify-center gap-3 bg-[#1B4D98] text-white p-4 rounded-xl hover:bg-[#1B4D98]/90 transition-colors">
                    <Store className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-xs opacity-75">Disponibile su</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </button> */}
                </div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-[#1B4D98]">
                    Scarica App
                  </h3>
                  <div className="flex items-center gap-2 text-[#FEB635]">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">100+ iscritti</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <a
                    href="https://apps.apple.com/it/app/adt-cup/id6458531252"
                    className="group relative overflow-hidden rounded-2xl bg-black text-white flex items-center transition transform duration-150 shadow-lg active:scale-95 active:shadow-sm"
                  >
                    <div className="relative flex items-center gap-3 px-8 py-4">
                      <img
                        className="w-7"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1010px-Apple_logo_white.svg.png?20220821122232"
                        alt="Apple logo"
                      />
                      <div>
                        <div className="text-sm opacity-90">Scarica su</div>
                        <div className="text-lg font-bold">App Store</div>
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.ryyuuk.ADTCUP"
                    className="group relative overflow-hidden rounded-2xl bg-gray-300 text-gray-800 flex items-center border border-gray-200 transition transform duration-150 shadow-lg active:scale-95 active:shadow-sm"
                  >
                    <div className="relative flex items-center gap-3 px-8 py-4">
                      <img
                        className="w-8 h-8"
                        src="https://www.svgrepo.com/show/145061/android-logo.svg"
                        alt="Android logo"
                      />
                      <div>
                        <div className="text-sm text-gray-500">
                          Disponibile su
                        </div>
                        <div className="text-lg font-bold">Google Play</div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Youtube className="w-10 h-10 text-[#FEB635]" />
                    <div className="text-sm">
                      <strong>Guarda il tutorial:</strong>
                      <br />
                      Non hai capito niente? Segui il nostro tutorial su
                      YoutTube!
                    </div>
                  </div>
                  <a
                    href="https://www.youtube.com/watch?v=BYCmS-aJ8F4"
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
