import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface ManualSection {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
}

const manualSections: ManualSection[] = [
  {
    id: "principi-fondamentali",
    title: "1. PRINCIPI FONDAMENTALI",
    content: `1.1 Scopi Principali

- Nuove amicizie: puntiamo a farvi tornare a casa con nuovi nomi in rubrica e aneddoti da raccontare.
- Esplorare la città: scoviamo posti nascosti e locali stravaganti.
- Sfide intelligenti: quiz di logica, prove fisiche, gare di memoria e test di resistenza alcolica.
- Esperienze uniche: un mix di competizione e convivialità che non dimenticherete.
- Tucano Jhonatan: Le informazioni che vi daremo potrebbero o non potrebbero, essere o non essere completamente no-sense. Attenti.

1.2 Valori Chiave

- Divertimento: guai a prendersi troppo sul serio.
- Ironia: ridere di noi stessi e della situazione fa parte del gioco.
- Nessun pregiudizio: ogni partecipante può esprimersi liberamente.`,
  },
  {
    id: "organizzazione-squadre",
    title: "2. ORGANIZZAZIONE DELLE SQUADRE",
    content: `- Le squadre sono composte da 4 persone.
- Per formarvi, completerete un Questionario della Personalità (da soli o con amici). Non vi preoccupate: nessuno saprà i vostri segreti più oscuri… o forse sì.
- Le alleanze sono permesse, purché non si trasformino in cartelli malefici.
- L’obiettivo è unire gente diversa per rendere il tutto più esilarante.`,
  },
  {
    id: "premi",
    title: "3. PREMI",
    content: `- La squadra vincitrice ha la possibilità di scegliere il premio che più si abbina ai loro gusti. Vi basta dare un'occhiata al nostro Catalogo ADT.
- Durante la Cup, premi speciali sponsorizzati potranno saltar fuori a sorpresa e verranno annunciati pochi giorni prima sulla nostra pagina Instagram.`,
  },
  {
    id: "struttura-eventi",
    title: "4. STRUTTURA DEGLI EVENTI",
    content: `La struttura dei nostri eventi potrebbe variare, ma in generale:

- RITROVO: Ci si incontra nel luogo prestabilito (puntuali!), si beve qualcosina insieme e si fanno le foto di squadra (le migliori ricevono punti extra). Poi ogni squadra si dirige nel punto di partenza (differente per ognuna) e aspetta l’inizio della FASE 1.
- FASE 1: Una volta aperte le danze, ogni squadra riceverà il primo indovinello sull'app e inizierà ufficialmente l'ADT CUP. Indovinelli e giochi si alternano, accumulando punti per la classifica.
- PAUSA CENA: Dopo la FASE 1, ci si sposta nel luogo della fase 2 e si cena insieme. Ottimo momento per socializzare!
- FASE 2: I punti vengono in parte resettati e si riparte con giochi finali (spesso alcolici) che porteranno alle eliminazioni e alla squadra vincitrice.
- Anche se eliminati, potete restare a godervi la serata, fare il tifo e partecipare come giudici in alcune prove.`,
  },
  {
    id: "indovinelli",
    title: "5. INDOVINELLI",
    content: `CARATTERISTICHE:
- Possono essere di qualunque tipo (siamo pazzi).
- Verranno erogati in 3 formati distinti: testuale, foto, foto + testo.
- Spesso dovrete cercare online per trovare la soluzione, ma non sarà mai troppo facile!
- Gli indovinelli possono riguardare locali o punti d'interesse della città. Dovrete raggiungere fisicamente il posto in questione con tutta la squadra.
- Distanza massima tra un indovinello e l’altro: 1.5 km di raggio.
- APP:
  - L’App ADT vi svela gli indovinelli e ogni 5 minuti riceverete un indizio (a volte fake!).
  - Se dopo 15 minuti non risolvete, arriva la soluzione.
- TIPOLOGIE DI TAPPE:
  - tappa rush: un singolo QR code da scansionare per passare alla successiva.
  - tappa check point: 2 QR code (uno per marcare l’arrivo, uno per ripartire). Potreste avere consumazioni incluse a seconda della tappa.`,
  },
  {
    id: "giochi",
    title: "6. GIOCHI",
    content: `- Vi accompagneranno per tutta la durata della CUP.
- Giochi di ogni tipo (fisici, di logica, foto creative, ecc).
- ALL GAMES BELONG: giochi attivi in parallelo durante la FASE 1 (es. miglior foto su Instagram, miglior outfit, ecc.).
- GIOCHI FASE 1: avvengono durante gli indovinelli nelle tappe check point, con classifiche e premi vari.
- GIOCHI FINALI: le sfide più toste (spesso alcoliche), con eliminazioni progressive fino a decretare i vincitori.`,
  },
  {
    id: "punteggi",
    title: "7. PUNTEGGI",
    content: `- INDOVINELLI & GIOCHI FINALI: classifica tipo Formula 1 (1° 10 pt, 2° 8 pt, ecc.).
- GIOCHI PRIMA FASE & ALL GAMES BELONG: punti solo al vincitore o ai primi 3.
- La classifica potrebbe non essere sempre visibile. In caso di parità, si ricorre a uno spareggio.`,
  },
  {
    id: "app",
    title: "8. APP",
    content: `- Ricevete indovinelli, caricate foto e seguite la classifica.
- Tenete il telefono carico! Se l’app si blocca, provate a chiuderla e riaprirla, o fare logout/login.
- Se non funziona ancora, contattate German (il programmatore) via WhatsApp.
  
Guida per scaricare l’app:
1. Scarica l’app.
2. Crea un account e verifica la mail.
3. Entra sull’evento attuale e premi “GIOCA”.
4. Accetta i termini & condizioni e premi “COMPILA” per il form (se già fatto, salta).
5. Attendi l’accettazione da parte dell’admin.
6. Ti appariranno i contatti degli organizzatori: contattali per il pagamento.
7. Ora sei iscritto correttamente!
8. Se ancora non riesci, c’è un video tutorial dettagliato. Se fallisci anche lì... beh, siete ufficialmente delle capre. ;)

Questo Manuale ADT è il vostro passaporto per una serata fuori dagli schemi. Preparatevi a scoprire posti insoliti, a mettervi alla prova con enigmi assurdi e a vivere sfide sempre diverse. L’importante è ridere, competere con goliardia e non prendersi mai troppo sul serio.

Buon divertimento e… che vinca il migliore!`,
  },
];

export default function ManualeADT() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const filteredSections = manualSections.filter((section) => {
    const haystack = (
      section.title +
      (section.subtitle || "") +
      section.content
    ).toLowerCase();
    return haystack.includes(searchTerm.toLowerCase());
  });

  const toggleSection = (id: string) => {
    setExpandedSection((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <Navbar />
      <section
        className="min-h-screen w-full py-12 px-4 md:px-6 pt-32
                 bg-gradient-to-br from-[#FDFCF6] to-[#EDEFFB]"
      >
        <div className="max-w-3xl mx-auto">
          {/* Titolo Principale */}
          <h1 className="text-4xl font-extrabold text-[#1B4D98] mb-2 text-center drop-shadow-sm">
            Manuale ADT
          </h1>
          <p className="text-[#1B4D98] text-center mb-8">
            La guida definitiva per i nostri eventi – buona lettura e buon
            divertimento!
          </p>

          {/* Barra di Ricerca (sotto il titolo) */}
          <div className="flex items-center justify-center mb-8">
            <input
              type="text"
              placeholder="Digita per cercare nel manuale..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md p-3 border-2 border-[#FEB635] 
                       focus:outline-none focus:ring-2 focus:ring-[#1B4D98]
                       placeholder-gray-400 rounded-lg text-gray-700"
            />
          </div>

          {/* Lista delle Sezioni Filtrate */}
          <div className="space-y-4">
            {filteredSections.map((section) => {
              const isOpen = expandedSection === section.id;
              return (
                <div
                  key={section.id}
                  className="bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between 
                             px-5 py-4 text-left hover:bg-[#FEB635]/10
                             focus:outline-none transition-colors"
                  >
                    <div>
                      <h2 className="text-lg font-bold text-[#1B4D98]">
                        {section.title}
                      </h2>
                      {section.subtitle && (
                        <p className="text-sm text-gray-500 mt-1">
                          {section.subtitle}
                        </p>
                      )}
                    </div>
                    <span className="ml-2 text-[#1B4D98] flex-shrink-0">
                      {isOpen ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  </button>

                  {/* Contenuto Collassabile */}
                  <div
                    className={`transition-all duration-300 ${
                      isOpen ? "max-h-[1000px] py-2 px-5" : "max-h-0 py-0 px-0"
                    } overflow-hidden text-gray-700 text-sm`}
                  >
                    {isOpen && (
                      <div className="whitespace-pre-line">
                        {section.content}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Caso nessun risultato */}
            {filteredSections.length === 0 && (
              <p className="text-center text-gray-500">
                Nessun risultato trovato. Prova con altri termini!
              </p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
