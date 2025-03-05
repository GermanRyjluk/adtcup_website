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
import DescriptionCard from "./DescriptionCard"; // Ensure the path is correct

const EventDetails = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 pt-24 pb-10">
        {/* Intro & Overview */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#1B4D98] mb-6">
            Tutto ciò che c'è da sapere
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            ADT CUP trasforma la città in un playground interattivo dove
            strategia, cultura e divertimento si fondono in un'esperienza
            indimenticabile. Preparati a scoprire Torino come non l'hai mai
            vista prima.
          </p>
        </div>
        {/* Description Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-1">
          <DescriptionCard
            icon={Trees}
            title="FASE 1"
            subtitle="SFIDE, INDOVINELLI E… BAR!"
            items={[
              "Partenza dall'ingresso superiore Giardino Roccioso",
              "Tour dei bar: risolvi indovinelli e sfide (alcoliche e non)",
              "Classifica in stile Formula 1: più punti per chi arriva prima",
              "Pausa cena in un luogo segreto: ricarica e socializza",
            ]}
            bulletIcons={["📍", "🍹", "🏎️", "🍽️"]}
          />
          <DescriptionCard
            icon={Trees}
            title="PAUSA CENA"
            subtitle="MANGIA, CHIACCHIERA, COMPLOTTA"
            items={[
              "Cena tutti insieme per rilassarsi e fare nuove amicizie",
              "Socializzazione… o strategia per la fase finale?",
              "Ultimo sguardo alla classifica: chi è in testa?",
            ]}
            bulletIcons={["🍽️", "🗣️", "📊"]}
            color={"bg-yellow-50"}
          />
          <DescriptionCard
            icon={Trophy}
            title="FASE 2"
            subtitle="ELIMINAZIONI E VITTORIA"
            items={[
              "Dopo cena, iniziano le prove a eliminazione!",
              "Giochi sempre più folli e competitivi fino alla finalissima",
              "I vincitori scelgono un premio dal catalogo ADT!",
              "Fuori dalla gara? Niente paura! Goditi drink, tifare le squadre e diventa anche giudice in alcune prove!",
              "AFTER PARTY: drink, musica e risate fino a notte fonda per chiudere in bellezza! 🕺🍾",
            ]}
            bulletIcons={["🚀", "🎭", "🏆", "🍹", "🎉"]}
          />
        </div>
      </div>

      {/* Manual Download Section - Blue & Yellow Gradient */}
      <div className="bg-[#1B4D98] px-10 py-16 text-center">
        <h3 className="text-3xl font-bold text-[#FEB635] mb-8">Manuale ADT</h3>
        <p className="text-white text-lg mb-2">
          Vuoi scoprire tutti i segreti dei nostri eventi? 🔍
        </p>
        <p className="text-white text-lg mb-8">
          Leggi il manuale completo per avere regole, strategie e consigli
          indispensabili per vivere al meglio l’avventura ADT.
        </p>
        <a
          href="/manualeADT"
          className="inline-flex items-center gap-2 bg-[#FEB635] text-[#1B4D98] px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          <FileText className="w-6 h-6" />
          <span className="text-lg font-medium">Sfoglia il Manuale ADT</span>
        </a>
      </div>

      <div className="relative bottom-0 left-0 right-0 w-full h-[5vh] bg-gradient-to-t from-gray-50 to-transparent" />
    </div>
  );
};

export default EventDetails;
