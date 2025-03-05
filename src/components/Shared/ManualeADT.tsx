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
- Nuove amicizie: conoscerete persone incredibili e stringerete legami reali che potrebbero durare ben oltre la serata.
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
    content: `4.1 Ritrovo – L'inizio dell'Avventura
- Luogo prestabilito: il punto di ritrovo verrà comunicato in anticipo. Essere puntuali è fondamentale: eventuali ritardi potrebbero comportare malus nella gara!
- Drink di benvenuto: prima di iniziare, un brindisi per sciogliere il ghiaccio e iniziare la serata con il giusto spirito.
- Foto di squadra: ogni team dovrà scegliere un nome e scattare una foto. La più creativa verrà votata e premiata con punti bonus!
- Briefing iniziale: verranno spiegate le regole del gioco, come guadagnare punti, le penalità e le eliminazioni. Infine, qualche dritta strategica per affrontare al meglio la sfida!
- Punti di partenza differenziati: ogni squadra inizierà da una posizione diversa, segnalata sull’app, per evitare percorsi troppo prevedibili.

4.2 Fase 1: Tour dei Bar, Indovinelli e Giochi
- Tour dei bar: alcune tappe saranno in locali partner dove sarà possibile ricevere consumazioni incluse o guadagnare punti bonus.
- Indovinelli e giochi: ogni squadra dovrà risolvere enigmi e superare prove per avanzare nel percorso.
- Tappe fisiche: gli enigmi porteranno i giocatori in diversi luoghi della città, tra angoli nascosti, locali iconici e tappe inaspettate che metteranno alla prova la vostra astuzia.
- Classifica Formula 1: le squadre guadagnano punti in base all’ordine di completamento delle prove e alla velocità di risoluzione.
- Aggiornamenti in tempo reale: la classifica e gli indizi verranno gestiti interamente tramite l’app.

4.3 Pausa Cena: Ricaricarsi e Socializzare

- Cena tutti insieme: dopo la prima fase, ci si ritrova in un luogo segreto per mangiare e recuperare energie.
- Momento di socializzazione: occasione perfetta per conoscere meglio i membri della propria squadra e gli avversari.
- Aggiornamento classifica: durante la cena verrà svelata la classifica parziale.
- Possibili alleanze? Potrebbe essere il momento giusto per stringere patti strategici!

4.4 Fase 2: Giochi Assurdi, Eliminazioni e Gran Finale

- Giochi a eliminazione: le squadre affronteranno prove assurde, alcoliche e non, che assegneranno punti e determineranno gli eliminati.
- Scontri diretti e sfide folli: le squadre si affronteranno testa a testa in giochi imprevedibili.
- Azzeramento punteggi e nuovo vantaggio: tutti i punteggi della Fase 1 si azzerano, ma le squadre riceveranno punti iniziali in base alla loro posizione nella classifica precedente.
- Eliminazioni progressive: con il passare delle prove, sempre più squadre verranno eliminate, fino a decretare i finalisti.
- Finalissima: l’ultima squadra rimasta in piedi si aggiudica la vittoria e potrà scegliere il premio dal Catalogo ADT!

4.5 Eliminati? Nessun problema!

- Drinks e relax: anche chi è fuori dalla competizione può continuare a godersi lo spettacolo con un drink in mano! Alcune consumazioni potrebbero essere incluse, quindi rilassatevi e approfittatene!
- Tifo sfegatato: il vostro entusiasmo non sarà solo d'incoraggiamento, ma verrà anche utilizzato come criterio di valutazione in alcuni giochi finali. Fatevi sentire!
- Partecipazione attiva: in alcuni giochi, gli eliminati potranno essere coinvolti per aiutare (o ostacolare!) le squadre ancora in gara. Non è ancora finita per voi!
- After party: la serata non finisce con la finale… si continua a festeggiare fino all’ultimo brindisi!`,
  },
  {
    id: "indovinelli",
    title: "5. INDOVINELLI",
    content: `5.1 Come funzionano

- Indovinelli multiformato: gli enigmi possono essere testuali, basati su immagini o un mix di testo e immagini. Potreste dover decifrare codici, interpretare simboli o collegare dettagli nascosti per trovare la soluzione!
- Ricerche web consentite e, in alcuni casi, potrebbero essere l’unico modo per raccogliere indizi e trovare la soluzione. Tuttavia, gli enigmi sono studiati per essere difficili da risolvere con una semplice ricerca online, quindi serviranno creatività e capacità di ragionamento!
- Tappe reali: ogni indovinello vi condurrà a un luogo specifico della città. Dovrete raggiungere fisicamente il posto per avanzare.
- Distanza tra tappe: per evitare percorsi troppo lunghi, ogni nuova tappa sarà un raggio di 1,3 km dalla precedente.

5.2 Indovinelli sull'App

- Riceverete gli indovinelli direttamente sull’app: ogni squadra accederà ai propri enigmi solo tramite l’app ufficiale ADT.
- Indizi ogni 5 minuti: per ogni indovinello, l’app fornirà un indizio progressivo ogni 5 minuti. Attenzione, alcuni potrebbero essere fake per confondervi (lasciateci divertire un po').
- Soluzione dopo 15 minuti: se dopo 15 minuti non avrete ancora risolto l’enigma, l’app vi darà la soluzione automatica per permettervi di continuare il gioco.

5.3 Tipologie di Tappe

Tappa Rush: una volta trovata la soluzione dell’indovinello, scansionate il QR code della tappa e ricevete immediatamente il prossimo indovinello per continuare la corsa.
Tappa Checkpoint: queste tappe prevedono due QR code:
- Il primo QR va scansionato all’arrivo per registrare il vostro ordine di arrivo (che assegnerà punti secondo il sistema Formula 1).
- Il secondo QR sarà disponibile solo dopo la pausa o il gioco collegato alla tappa, determinando il momento in cui potrete ripartire.
Tappe con consumazione: sia le Tappe Rush che le Tappe Checkpoint possono svolgersi in locali partner, dove vi aspetterà una consumazione inclusa prima di riprendere il gioco. Un’occasione perfetta per ricaricare le energie, socializzare con gli avversari (o cercare di sabotarli con un drink in più)!
`,
  },
  {
    id: "giochi",
    title: "6. GIOCHI",
    content: `Durante tutto l’evento, le squadre si cimenteranno in una varietà di giochi, alcuni previsti, altri completamente a sorpresa!

    6.1 Extra Cup Challenges

    Sfide attive per tutta la durata della competizione (gli esempi seguenti sono indicativi e possono cambiare di Cup in Cup per mantenere la competizione sempre fresca e imprevedibile): 
    
    - Miglior foto di squadra: tutte le foto verranno pubblicate su Instagram e quelle che riceveranno più like vinceranno il premio!
    - Miglior outfit di squadra: premiamo lo stile, l’originalità e la pazzia!
    - Miglior contenuto multimediale: scattate foto o girate video che catturano al meglio l’atmosfera dell’evento e inviateli nel gruppo WhatsApp dedicato. I migliori verranno premiati!
    - Bet sui vincitori: sì, potete anche scommettere su chi vincerà (giusto per mettere un po’ di pepe alla competizione).
    
    6.2 Giochi Fase 1
    
    Si svolgono durante le tappe checkpoint:

    - Possono essere di ogni tipo: logici, di velocità, di memoria o completamente fuori dagli schemi!
    - Alcuni assegneranno punti con il sistema Formula 1, altri premieranno solo i primi tre o il vincitore.
    - Alcuni giochi potrebbero avere premi offerti dagli sponsor!

    6.3 Giochi Fase 2

    Sfide più intense e spesso alcoliche!

    - Questa fase prevede giochi più impegnativi, a eliminazione progressiva.
    - Alcuni eliminati potranno essere coinvolti nei giochi finali, sia come aiutanti che come elementi di disturbo.
    - Il tifo del pubblico può influenzare l’andamento di alcune prove: fatevi sentire!
    - La squadra vincitrice si aggiudica il titolo di campione e sceglie il premio dal Catalogo ADT!
    `,
  },
  {
    id: "punteggi",
    title: "7. PUNTEGGI",
    content: `
    7.1 Indovinelli

 Utilizziamo la classifica a Formula 1, che premia la velocità di risoluzione. Il primo team che risponde correttamente ottiene il massimo dei punti, il secondo leggermente meno, e così via. Le squadre che non trovano la soluzione entro il tempo limite non ricevono punti per quell’indovinello.
  
  7.2 Giochi

- Giochi nelle tappe checkpoint: il punteggio varia a seconda della tipologia di gioco. Alcuni premieranno solo i vincitori, altri i primi tre classificati, mentre altri ancora assegneranno punti proporzionali alla performance.
- Giochi della fase finale: determinano chi avanzerà nella competizione. Alcuni giochi saranno ad eliminazione diretta, mentre altri prevederanno un accumulo di punti per decidere i finalisti.

7.3 Punti extra
Punti extra per giochi speciali e social: missioni bonus, come la miglior foto di squadra o il miglior contenuto social, possono assegnare punti extra per premiare creatività e coinvolgimento.

7.4 Classifica
- Classifica parziale e suspense: la classifica non sarà sempre visibile sull’app! Decideremo noi quando mostrarvela per aumentare il brivido della competizione.
- Spareggio in caso di parità: se due o più squadre finiscono con lo stesso punteggio, verrà effettuata una prova extra per determinare il vincitore.`,
  },
  {
    id: "app",
    title: "8. APP",
    content: `8.1 Funzionamento App

- Il cuore della competizione: l’app ADT è essenziale per partecipare. Qui riceverete indovinelli, indizi, aggiornamenti in tempo reale sulla classifica e notifiche sulle prove.
- Telefono carico obbligatorio! Assicuratevi di avere abbastanza batteria, perché senza l’app non potrete avanzare nel gioco.
- Problemi tecnici? Se l’app non funziona, provate a chiuderla e riaprirla. Se il problema persiste, effettuate il logout e rientrate. Ancora nulla? Contattate il nostro programmatore su WhatsApp per assistenza immediata!

8.2 Guida Iscrizione App

- Scarica l’app dagli store ufficiali.

- Crea un account inserendo i tuoi dati e verifica la tua email.

- Accedi al tuo account e premi "Gioca" sulla ADT CUP attuale.

- Accetta termini e condizioni per continuare.

- Compila il questionario (o premi "Compila" e torna subito sull’app se lo hai già fatto in precedenza).

- Attendi l’accettazione dell’admin, che controllerà la tua iscrizione.

- Contatta gli organizzatori per il pagamento tramite i contatti WhatsApp disponibili sull’app.

- Ora sei ufficialmente dentro! 🎉 Aspetta di ricevere la tua squadra e preparati all’avventura!

Problemi con l’iscrizione? Guarda il video tutorial dettagliato per seguirla passo dopo passo!
`,
  },
  {
    id: "tips",
    title: "9. TIPS ESSENZIALI",
    content: `
- Venite carichi di energia (ma non esagerate!): troppa foga vi prosciuga, il giusto slancio vi farà brillare.
- Controllate tutte le info dettagliate dell'evento! Circa due giorni prima dell'ADT CUP riceverete tutti i dettagli finali sul gruppo WhatsApp dedicato. Non fatevi trovare impreparati!
- Sentitevi prima con la vostra squadra! È utile conoscersi, concordare eventuali outfit coordinati, stabilire strategie e rompere il ghiaccio prima del grande giorno.
- Bere sì, ma con testa: i giochi alcolici sono divertenti, ma nessuno vuole essere il primo a crollare!
- Condizioni meteo? Si gioca comunque! Pioggia, neve o sole cocente: niente ci ferma. (Siamo dei temerari, voi?)
- Scarpe comode obbligatorie: i tacchi sono scenici, ma non vorrete certo rincorrere gli indizi con il rischio di franare.
- Vestirsi a tema vi premia! Oltre a guadagnare punti extra, sarete delle celebrità su Instagram!`,
  },
  {
    id: "responsabilità",
    title: "10. RESPONSABILITA’ & SICUREZZA",
    content: `
- Gioco Sicuro: Divertitevi, ma mai a discapito della sicurezza! Occhio alla strada mentre correte dietro agli indizi.
- Consumo di Alcol: Bere responsabilmente è un obbligo. Se guidate, restate sobri. La sicurezza viene prima del punteggio!
- Età Minima 18+: Alcuni giochi prevedono alcolici, quindi solo i maggiorenni possono partecipare.
- Non ci assumiamo responsabilità per le vostre follie! L’ADT CUP è un evento di puro divertimento, ma qualsiasi cosa facciate è sotto la vostra responsabilità. Noi forniamo il gioco, voi mettete la testa (si spera!).
- Nessun giudizio, offese o esclusione: siete in squadra con perfetti sconosciuti? Meglio così! Il nostro obiettivo è creare nuove connessioni, quindi niente discriminazioni: rispettate i vostri compagni di squadra e fateli sentire parte del gioco!`,
  },
  {
    id: "compreso",
    title: "11. COSA E’ COMPRESO",
    content: `
11.1 Quota di Partecipazione
Ogni evento ha un costo specifico indicato nella sezione “info evento”. Il pagamento è obbligatorio per partecipare.
11.2 Cosa Include
    - Accesso all’evento e a tutti i giochi, indovinelli e sfide.
    - Alcol illimitato (fino ad esaurimento scorte) offerto dall’organizzazione durante tutto l’evento.
    - Prima consumazione inclusa nelle tappe checkpoint (se previsto per l’evento, controllate sempre!).
    - Cibo e bevande durante la pausa cena per ricaricare le energie.
    - Uso dell’app ufficiale ADT per ricevere gli indizi e restare aggiornati sulla classifica.
    - Premio finale per la squadra vincitrice.
    - Possibili gadget offerti dagli sponsor come premi extra per alcune sfide.
11.3 Cosa Potrebbe Essere Extra
    - Consumazioni extra nei locali (oltre alla prima, se non diversamente indicato).
    - Trasporti, taxi o mezzi pubblici (spostamenti a carico dei partecipanti).
11.4 Modalità di Pagamento
Ogni evento può avere procedure diverse. Il pagamento può avvenire tramite l’app o link fornito dall’organizzazione (PayPal, carta, contanti…). Controllate sempre la sezione “info evento” per i dettagli.`,
  },
];

function renderManualContent(content: string) {
  // Split the content into individual lines.
  const lines = content
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
  let elements: JSX.Element[] = [];
  let bulletList: string[] = [];

  function flushBulletList() {
    if (bulletList.length > 0) {
      elements.push(
        <ul key={elements.length} className="ml-6 list-disc space-y-1 mb-4">
          {bulletList.map((item, idx) => (
            <li key={idx} className="text-gray-700">
              {item.replace(/^-+\s*/, "")}
            </li>
          ))}
        </ul>
      );
      bulletList = [];
    }
  }

  lines.forEach((line, index) => {
    if (line.match(/^\d+\.\d+\s+/)) {
      flushBulletList();
      elements.push(
        <h3 key={index} className="text-lg font-semibold text-[#1B4D98] mb-2">
          {line}
        </h3>
      );
    } else if (line.startsWith("-")) {
      bulletList.push(line);
    } else {
      flushBulletList();
      elements.push(
        <p key={index} className="text-gray-700 mb-4">
          {line}
        </p>
      );
    }
  });
  flushBulletList();
  return <>{elements}</>;
}

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
          <div className="flex items-center justify-center mb-8">
            <input
              type="text"
              placeholder="Digita per cercare nel manuale..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md p-3 border-2 border-[#FEB635] focus:outline-none focus:ring-2 focus:ring-[#1B4D98] placeholder-gray-400 rounded-lg text-gray-700"
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
                    className="w-full flex items-center justify-between px-5 py-4 text-left "
                  >
                    <div>
                      <h2 className="text-xl font-extrabold text-[#1B4D98]">
                        {section.title}
                      </h2>
                      {section.subtitle && (
                        <p className="text-sm text-gray-500 mt-1">
                          {section.subtitle}
                        </p>
                      )}
                    </div>
                    <span className="ml-2 text-[#1B4D98] flex-shrink-0">
                      {expandedSection === section.id ? (
                        <ChevronUp />
                      ) : (
                        <ChevronDown />
                      )}
                    </span>
                  </button>

                  {/* Contenuto Collassabile */}
                  <div
                    className={`transition-all duration-300 ${
                      isOpen ? "max-h-[5000px] py-2 px-5" : "max-h-0 py-0 px-0"
                    } overflow-hidden text-gray-700 text-sm`}
                  >
                    {isOpen && (
                      <div>{renderManualContent(section.content)}</div>
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
