import React, { useState } from "react";
import { Search, ChevronDown, ChevronRight } from "lucide-react";
import { marked } from "marked";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Section {
  id: number;
  title: string;
  content: string;
  subsections?: Section[];
}

function ManualeADT() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState<number[]>([]);

  const sections: Section[] = [
    {
      id: 1,
      title: "PRINCIPI FONDAMENTALI",
      content: `### 1.1 Scopi Principali

- 🤝 Nuove amicizie: conoscerete persone incredibili e stringerete legami reali che potrebbero durare ben oltre la serata.
- 🏙️ Esplorare la città e la movida: scoprirete angoli nascosti e locali unici che vi sorprenderanno.
- 🎭 Esperienze uniche: un mix di tour dei bar, indovinelli e giochi assurdi che vi metteranno alla prova tra enigmi, prove folli e brindisi strategici!
- 🦜 Tucano Jonathan: alcune informazioni potrebbero essere no-sense... o forse no. Attenti!

### 1.2 Valori Chiave

- 🎭 Leggerezza e ironia: guai a prendersi troppo sul serio, ridere di sé stessi e della situazione è parte del gioco!
- 🌍 Inclusività: tutti sono i benvenuti, senza distinzioni.
- 😃 Essere se stessi: niente giudizi, solo libertà di esprimersi senza filtri.
- 🔗 Messaggio sociale: torniamo a creare legami veri! I social e il Covid ci hanno fatto dimenticare come si fa, è ora di riscoprirlo.`,
      subsections: [
        {
          id: 11,
          title: "Scopi Principali",
          content:
            "Nuove amicizie, esplorazione della città, esperienze uniche e il misterioso Tucano Jonathan!",
        },
        {
          id: 12,
          title: "Valori Chiave",
          content: "Leggerezza, inclusività, autenticità e connessioni reali",
        },
      ],
    },
    {
      id: 2,
      title: "ORGANIZZAZIONE DELLE SQUADRE",
      content: `- 👥 Squadre da 4 persone.
- 📝 Il Metodo ADT e il Questionario della Personalità:
    - Grazie al nostro Metodo ADT, la formazione delle squadre non è casuale, ma basata su un mix di compatibilità e varietà.
    - Come funziona? Prima di partecipare, ogni giocatore compila un Questionario sulla Personalità. Le risposte ci aiutano a creare gruppi equilibrati.
    - Giochi con gli amici? Nel questionario potrai indicare i nomi delle persone con cui vorresti partecipare.
    - Il nostro obiettivo è unire persone diverse e creare team capaci di affrontare le sfide al meglio!`,
    },
    {
      id: 3,
      title: "PREMI",
      content: `- 🏆 La squadra vincitrice avrà accesso al Catalogo ADT, un assortimento di premi esclusivi.
- 🎁 Premi speciali sponsorizzati durante la ADT CUP.
- Seguite la nostra pagina Instagram per gli aggiornamenti sui premi!`,
    },
    {
      id: 4,
      title: "STRUTTURA DEGLI EVENTI",
      content:
        "Scopri come si svolgono i nostri eventi, dalle fasi iniziali fino alla grande finale!",
      subsections: [
        {
          id: 41,
          title: "Ritrovo – L'inizio dell'Avventura",
          content: `- 📍 Luogo prestabilito con drink di benvenuto
- 📸 Foto di squadra e scelta del nome
- 🎤 Briefing iniziale con spiegazione delle regole
- 🚀 Punti di partenza differenziati`,
        },
        {
          id: 42,
          title: "Fasi del Gioco",
          content: `- 🍸 Tour dei bar con consumazioni incluse
- 🕵️ Indovinelli e giochi per tutto il percorso
- 📍 Tappe fisiche in luoghi caratteristici
- 🏎️ Classifica Formula 1 in tempo reale`,
        },
      ],
    },
    {
      id: 5,
      title: "INDOVINELLI",
      content: `- 🧩 Varietà di enigmi: testuali, fotografici e misti
- 🔍 Ricerche web consentite
- 📍 Tappe reali da raggiungere fisicamente
- 📱 App dedicata con indizi progressivi`,
    },
    {
      id: 6,
      title: "GIOCHI",
      content: `- 🎨 Extra Cup Challenges attive per tutta la durata
- 🔥 Giochi Fase 1 durante le tappe checkpoint
- 🍾 Giochi Fase 2 più intensi e spesso alcolici
- ⚔️ Eliminazioni progressive fino alla finalissima`,
    },
    {
      id: 7,
      title: "PUNTEGGI",
      content: `- 🧩 Sistema Formula 1 per gli indovinelli
- 🎯 Punteggi variabili per i giochi
- 🔥 Eliminazione diretta nella fase finale
- 🎖️ Punti extra per sfide speciali`,
    },
    {
      id: 8,
      title: "L'APP ADT",
      content: `- 📲 Cuore della competizione con tutti gli aggiornamenti
- 🔋 Batteria carica obbligatoria
- 🆘 Supporto tecnico sempre disponibile
- 📱 Guida all'iscrizione passo-passo`,
    },
    {
      id: 9,
      title: "TIPS ESSENZIALI",
      content: `- 🔋 Energia e moderazione
- 📢 Controllate tutte le info
- 🤝 Conoscete la squadra
- 🍻 Bere responsabilmente
- ☔ Si gioca con ogni tempo
- 👟 Scarpe comode
- 🎭 Vestirsi a tema`,
    },
    {
      id: 10,
      title: "RESPONSABILITÀ & SICUREZZA",
      content: `- 🏃 Gioco Sicuro sempre
- 🍹 Consumo responsabile
- 🔞 Solo maggiorenni
- ⚠️ Responsabilità personale
- 🤝 Rispetto e inclusività`,
    },
    {
      id: 11,
      title: "COSA È COMPRESO",
      content: `- 💵 Quota di partecipazione
- 🥂 Alcol incluso
- 🍸 Prima consumazione
- 🍽️ Cena inclusa
- 🏆 Premio finale
- ❌ Extra a carico dei partecipanti`,
    },
  ];

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isExpanded = (sectionId: number) =>
    expandedSections.includes(sectionId);

  const renderSection = (section: Section, level: number = 0) => {
    const expanded = isExpanded(section.id);

    return (
      <div key={section.id} className="mb-4">
        <button
          onClick={() => toggleSection(section.id)}
          className={`w-full text-left p-6 flex items-center justify-between transition-all duration-200 rounded-2xl
            ${
              level === 0
                ? "bg-white hover:bg-blue-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                : "bg-blue-50 hover:bg-blue-100"
            }`}
          style={{ paddingLeft: `${level * 1.5 + 1.5}rem` }}
        >
          <div className="flex items-center space-x-3">
            <div
              className={`rounded-full p-2 ${
                expanded ? "bg-yellow-400" : "bg-yellow-400"
              }`}
            >
              {expanded ? (
                <ChevronDown className="w-5 h-5 text-blue-900" />
              ) : (
                <ChevronRight className="w-5 h-5 text-blue-900" />
              )}
            </div>
            <span
              className={`font-bold ${
                level === 0 ? "text-xl text-blue-900" : "text-lg text-blue-800"
              }`}
            >
              {section.title}
            </span>
          </div>
        </button>

        <div
          className={`transition-all duration-300 overflow-hidden
            ${expanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div
            className="p-6 bg-white rounded-2xl mt-2 shadow-inner prose prose-blue max-w-none"
            style={{ marginLeft: `${level * 1.5 + 1.5}rem` }}
          >
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: marked(section.content) }}
            ></div>

            {section.subsections?.map((subsection) =>
              renderSection(subsection, level + 1)
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <section className="min-h-screen w-full py-12 px-4 md:px-6 pt-28 bg-gradient-to-br from-[#FDFCF6] to-[#EDEFFB]">
        <div className="max-w-3xl mx-auto">
          {/* Titolo Principale */}
          <h1 className="text-4xl font-extrabold text-[#1B4D98] mb-2 text-center drop-shadow-sm">
            Manuale ADT
          </h1>
          <p className="text-[#1B4D98] text-center mb-8">
            La guida definitiva per i nostri eventi – buona lettura e buon
            divertimento!
          </p>

          {/* Barra di Ricerca */}
          <div className="flex items-center justify-center mb-8 ">
            <input
              type="text"
              placeholder="Digita per cercare nel manuale..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md p-3 border-2 border-[#FEB635] focus:outline-none focus:ring-2 focus:ring-[#1B4D98] placeholder-gray-400 rounded-lg text-gray-700"
            />
          </div>

          {/* Main Content */}
          <main className="max-w-4xl mx-auto pb-12">
            <div className="space-y-6">
              {sections.map((section) => renderSection(section))}
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ManualeADT;
