import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Esempio di icone se servono

export default function AboutUs() {
  return (
    <main className="bg-white overflow-hidden">
      {/* HERO SECTION */}
      <header className="relative bg-gradient-to-r from-[#1B4D98] to-[#2b4c7c] text-white pb-16 pt-24">
        <div className="absolute inset-x-0 bottom-0">
          {/* Onda decorativa in SVG */}
          <svg
            viewBox="0 0 1440 320"
            className="w-full text-white -mb-1"
            fill="currentColor"
            preserveAspectRatio="none"
          >
            <path d="M0,224L30,213.3C60,203,120,181,180,192C240,203,300,245,360,234.7C420,224,480,160,540,154.7C600,149,660,203,720,208C780,213,840,171,900,165.3C960,160,1020,192,1080,213.3C1140,235,1200,245,1260,224C1320,203,1380,149,1410,122.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-4">
            ABOUT US – ADT CUP
          </h1>
          <p className="max-w-2xl mx-auto leading-relaxed">
            Benvenutə sul nostro “About Us”! Qui scoprirai perché ADT CUP è
            molto più di un semplice progetto: è un’idea nata per coinvolgere e
            ispirare chi, come noi, vuole vivere esperienze innovative.
          </p>
        </div>
      </header>

      {/* SEZIONE 1: LA NOSTRA STORIA */}
      <section className="bg-[#FDFCF6] relative pt-10 pb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-[#1B4D98]">
              📘 La nostra storia
            </h2>
          </div>
          <div className="bg-white shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100">
            <p className="text-gray-700 leading-relaxed mb-4">
              Siamo un gruppo di studenti del Politecnico, amici di lunga data,
              che hanno trasformato un’idea folle in un’esperienza unica. Tutto
              è iniziato nel marzo 2022, quando i nostri co-founder Giuseppe e
              Pietro si sono trovati a organizzare un weekend speciale per un
              amico in visita a Torino. L’obiettivo? Fargli scoprire la città,
              divertirsi e vivere la movida in soli due giorni.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              E così, da una semplice esigenza, è nata la prima ADT CUP: una
              versione rudimentale di caccia al tesoro con giochi sparsi per la
              città. Il successo è stato immediato! Ci siamo resi conto che il
              format funzionava perché permetteva a chiunque di divertirsi senza
              filtri, lasciando spazio alla spontaneità.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Da quel momento abbiamo deciso di renderlo un progetto serio e
              strutturato, affinché chiunque potesse vivere l’esperienza ADT
              CUP. Federica, Marco e German, che hanno partecipato alla prima
              edizione, si sono innamorati così tanto dell’idea che hanno deciso
              subito di unirsi al team per portarla a un livello successivo.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Oggi ADT CUP è molto più di un semplice evento: è una community di
              persone che amano mettersi in gioco, scoprire nuovi posti e creare
              ricordi indimenticabili. Ogni edizione è un mix di sfide,
              creatività e divertimento, con l’obiettivo di rendere ogni
              esperienza unica e coinvolgente. Il nostro viaggio è appena
              iniziato e non vediamo l’ora di vedere dove ci porterà!
              <br />
            </p>
          </div>
        </div>
      </section>

      {/* SEZIONE 2: MISSION & VISION */}
      <section className="relative bg-[#EDEFFB] pt-10 pb-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="bg-white shadow-xl rounded-2xl border border-gray-100 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[#1B4D98] mb-2">
              🎯 Mission
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ADT CUP rivoluziona il modo di vivere la città attraverso eventi
              interattivi che trasformano le strade in un campo di gioco. Non ci
              limitiamo ai luoghi iconici: vogliamo svelare angoli nascosti,
              locali underground e la vera movida, permettendo ai partecipanti
              di esplorare in modo autentico e coinvolgente.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Il nostro obiettivo è connettere le persone nella vita reale,
              superando le barriere imposte dai social e aiutando le nuove
              generazioni a riscoprire il piacere di fare nuove amicizie dal
              vivo. Vogliamo insegnare a vivere senza pregiudizi, con leggerezza
              e autenticità, creando un ambiente inclusivo e stimolante.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Crediamo in un intrattenimento intelligente e innovativo, dove la
              tecnologia è un mezzo e non un fine, accompagnando il gioco senza
              sostituire l’esperienza umana.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-xl rounded-2xl border border-gray-100 p-8 md:p-10">
            <h2 className="text-2xl font-bold text-[#1B4D98] mb-2">
              🌍 Vision
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Immaginiamo un mondo in cui il divertimento sia un’esperienza
              reale, condivisa e accessibile a tutti. Vogliamo ridefinire il
              concetto di intrattenimento urbano, offrendo un’alternativa ai
              soliti format e creando eventi che permettano di scoprire città,
              persone e culture in modo autentico.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              A lungo termine, il nostro sogno è espanderci in nuovi settori del
              divertimento, trasformando ADT CUP in un punto di riferimento per
              chi cerca esperienze fuori dagli schemi. Vogliamo guidare le
              persone a un rapporto più sano con la tecnologia, utilizzandola
              per arricchire la vita, non per sostituirla.
            </p>
            <p className="text-gray-700 leading-relaxed">
              ADT CUP non è solo un evento: è un nuovo modo di vivere, conoscere
              e divertirsi.
            </p>
          </div>
        </div>
      </section>

      {/* SEZIONE 3: IL NOSTRO TEAM */}
      <section className="relative bg-[#FDFCF6] pt-10 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#1B4D98] mb-2">
              🎭🔥 Il Nostro Team
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Quelli dietro il delirio! C’è chi coordina, chi programma, chi
              trova soldi, chi riprende le vostre figuracce e chi trasforma
              tutto in un meme. Insomma, il caos ha un'organizzazione… più o
              meno. Ecco chi siamo:
            </p>
          </div>

          {/* Esempio Grid Team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Card membro 1 */}
            <div
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center 
                            hover:scale-105 hover:shadow-xl transition-transform"
            >
              {/* Placeholder immagine utente */}
              <div className="w-24 h-24 bg-[#EDEFFB] rounded-full mb-4 overflow-hidden">
                {/* <img src="URL_DELLA_FOTO" alt="Nome" className="w-full h-full object-cover" /> */}
              </div>
              <h3 className="text-xl font-semibold text-[#1B4D98]">
                Giuseppe Rossi
              </h3>
              <p className="text-gray-600 text-sm mt-1 text-center">
                Co-Founder, Organizzatore Instancabile
              </p>
            </div>

            {/* Card membro 2 */}
            <div
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center
                            hover:scale-105 hover:shadow-xl transition-transform"
            >
              <div className="w-24 h-24 bg-[#EDEFFB] rounded-full mb-4 overflow-hidden">
                {/* <img src="URL_DELLA_FOTO" alt="Nome" className="w-full h-full object-cover" /> */}
              </div>
              <h3 className="text-xl font-semibold text-[#1B4D98]">
                Pietro Bianchi
              </h3>
              <p className="text-gray-600 text-sm mt-1 text-center">
                Co-Founder, Ideatore di sfide impossibili
              </p>
            </div>

            {/* Card membro 3 */}
            <div
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 flex flex-col items-center
                            hover:scale-105 hover:shadow-xl transition-transform"
            >
              <div className="w-24 h-24 bg-[#EDEFFB] rounded-full mb-4 overflow-hidden">
                {/* <img src="URL_DELLA_FOTO" alt="Nome" className="w-full h-full object-cover" /> */}
              </div>
              <h3 className="text-xl font-semibold text-[#1B4D98]">
                Federica Neri
              </h3>
              <p className="text-gray-600 text-sm mt-1 text-center">
                Resp. Comunicazione & Meme
              </p>
            </div>

            {/* Aggiungi altre card per Marco, German, e chi vuoi */}
          </div>
        </div>
      </section>

      {/* Footer con iconcine (opzionale) */}
      <footer className="bg-[#1B4D98] text-white py-6">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} ADT CUP. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4">
            {/* Esempio di link social */}
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 hover:opacity-80" />
            </a>
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 hover:opacity-80" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 hover:opacity-80" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
