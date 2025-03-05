import React from "react";
import {
  QrCode,
  Sparkles,
  Download,
  Phone,
  ArrowRight,
  Star,
  Users,
  Globe,
  Trophy,
  MapPin,
  Youtube,
} from "lucide-react";

const AppDownload = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
    relative 
    overflow-hidden 
    pt-16 
    pb-24 
    bg-gradient-to-b 
    from-gray-100 
    to-white
  "
    >
      {/* Pulsating background circles */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-[#0066ff] bottom-[-180px] right-[-180px] opacity-20 blur-3xl animate-pulse"
        style={{ animationDelay: "1s", animationDuration: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          <div className="md:flex md:items-start md:justify-between">
            {/* Left Side - Content */}
            <div className="text-gray-800 mb-12 md:mb-0 md:w-1/2 md:pr-8">
              <div className="inline-block mb-6">
                <div className="bg-[#FEB635]/20 px-6 py-2 rounded-full border border-[#FEB635]/30">
                  <span className="text-[#FEB635] font-semibold">
                    Nuovo! 🎉 Versione 1.1.2
                  </span>
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-[#1B4D98]">
                La tua prossima
                <br />
                <span className="text-[#FEB635]">avventura urbana</span>
                <br />è a portata di mano
              </h2>

              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                Ti sei già iscritto? Scarica l’app per entrare nel vivo
                dell’evento: ricevi indizi, risolvi enigmi e segui la classifica
                in tempo reale! 📊🔍
              </p>
              <p className="text-xl text-gray-600 mb-8 max-w-lg">
                ⚠️ Attenzione: l’app serve solo per giocare, quindi niente
                notifiche fastidiose o spam… solo puro divertimento! ⚠️
              </p>

              {/* Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
            </div>

            {/* Right Side - Phone Mockups */}
            <div className="md:w-1/2 flex justify-center md:justify-end">
              <div className="relative">
                {/* Subtle background glow behind the phone */}
                <div className="absolute inset-0 bg-[#1B4D98] rounded-full filter blur-3xl opacity-20 scale-150"></div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                <Youtube className="w-10 h-10 text-[#FEB635]" />
                <div className="text-sm">
                  <strong>Video tutorial:</strong>
                  <br />
                  Segui la nostra guida step by step su YoutTube per iscriverti!
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
        </div>
      </div>
    </section>
  );
};

interface StatProps {
  icon: React.ElementType;
  value: string;
  label: string;
}

const Stat = ({ icon: Icon, value, label }: StatProps) => (
  <div className="text-center p-4 bg-[#FEB635]/10 rounded-xl border border-[#FEB635]/30">
    <Icon className="w-6 h-6 text-[#FEB635] mx-auto mb-2" />
    <div className="text-2xl font-bold text-gray-900">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default AppDownload;
