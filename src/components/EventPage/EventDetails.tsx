import React from "react";
import {
  MapPin,
  Clock,
  Users,
  Trophy,
  Trees,
  Star,
  FileText,
} from "lucide-react";

const MapCard = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Parco+del+Valentino,+Torino"; // Update as needed

  return (
    <div
      className="relative h-[200px] w-full rounded-2xl overflow-hidden shadow-lg"
      style={{
        backgroundImage:
          'url("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.howtogeekimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2022%2F08%2FGoogle-Maps-icon-on-map.png&f=1&nofb=1&ipt=c07cc70605b533d3686cd78e081e00101778d850362cbc1ee7ff42560a8bfa43&ipo=images")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Adjusted white overlay with lower opacity */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
      {/* Centered button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#1B4D98] hover:bg-[#1B4D98]/90 transition-all duration-300 transform hover:scale-105 text-white font-bold px-8 py-4 rounded-full shadow-md"
        >
          <MapPin className="w-6 h-6 mr-2 inline-block" />
          Google Maps
        </a>
      </div>
    </div>
  );
};

const DescriptionCard = ({ icon: Icon, title, items, color }) => (
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

const EventDetails = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Intro & Overview */}
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center text-[#1B4D98] mb-6">
            Tutto ciò che c'è da sapere
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            ADT CUP trasforma la città in un playground interattivo dove
            strategia, cultura e divertimento si fondono in un'esperienza
            indimenticabile. Preparati a scoprire Torino come non l'hai mai
            vista prima.
          </p>
          {/* <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Users className="w-5 h-5 text-[#FEB635]" />
              <span>4 giocatori per squadra</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Clock className="w-5 h-5 text-[#FEB635]" />
              <span>3 ore di gioco</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
              <Trophy className="w-5 h-5 text-[#FEB635]" />
              <span>Premi esclusivi</span>
            </div>
          </div> */}
        </div>
        {/* Description Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-1">
          <DescriptionCard
            icon={Trees}
            title="FASE 1"
            items={[
              "Partenza dal Parco del Valentino",
              "Tour di bar nel mitico quartiere di San Salvario",
              "Indovinelli e sfide pazze",
              "Classifica in stile Formula 1",
              "Spostamento nel luogo della cena",
            ]}
            color={"white"}
          />
          <DescriptionCard
            icon={Trees}
            title="PAUSA CENA"
            items={["Tutti insieme", "Cena offerta"]}
            color={"black"}
          />
          <DescriptionCard
            icon={Trophy}
            title="FASE 2"
            items={[
              "Ripartenza con nuove prove e sfide",
              "Fase eliminatoria",
              "Gran finale",
              "Premiazione e festeggiamenti",
            ]}
            color={"white"}
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            voluptates animi beatae non eveniet! Fuga laboriosam voluptas magnam
            atque! Corporis, nobis eius eveniet provident repellat
            exercitationem dignissimos non hic nisi.
          </p>
        </div>
      </div>

      {/* Manual Download */}
      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-[#1B4D98] mb-4">
          Manuale del Partecipante
        </h3>
        <p className="text-gray-600 mb-6">
          Scarica il manuale completo con tutte le regole, i consigli e le
          informazioni necessarie
        </p>
        <a
          href="/manualeADT"
          className="inline-flex items-center gap-2 bg-[#1B4D98] text-white px-6 py-3 rounded-xl hover:bg-[#1B4D98]/90 transition-all duration-300 transform hover:scale-105"
        >
          <FileText className="w-5 h-5" />
          <span>Sfoglia il Manuale PDF</span>
        </a>
      </div>
      <section className="py-12 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Icona Trofeo */}
          {/* <Trophy className="w-16 h-16 mx-auto mb-4 text-[#FEB635]" /> */}

          {/* Titolo & Messaggio */}
          <h2 className="text-3xl font-bold text-[#1B4D98] mb-2">
            Premio per la Squadra Vincitrice
          </h2>
          <p className="text-gray-600 mb-6">
            Solo i migliori conquistano la vetta! Scopri il premio riservato a
            chi trionfa in questa avventura.
          </p>

          {/* Bottone che manda alla schermata dei premi */}
          <a
            href="/schermata-premi"
            className="inline-block px-6 py-3 rounded-lg bg-[#FEB635] text-[#1B4D98] font-semibold hover:bg-[#FEB635]/90 active:scale-95 transition-transform duration-75"
          >
            Guarda i Premi
          </a>
        </div>
      </section>
      <div className="relative bottom-0 left-0 right-0 w-full h-[5vh] bg-gradient-to-t from-gray-50 to-transparent" />
    </div>
  );
};

export default EventDetails;
