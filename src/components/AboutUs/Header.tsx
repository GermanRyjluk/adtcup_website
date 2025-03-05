import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Header() {
  return (
    <main className="bg-gray-50">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-[#1B4D98] to-[#2b4c7c] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">CHI SIAMO?</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Benvenutə! Scopri perché ADT CUP è più di un progetto: è l'idea che
            ha trasformato una sfida universitaria in esperienze innovative e
            coinvolgenti.
          </p>
        </div>
        {/* Decorative SVG Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg
            className="w-full h-12"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#FDFCF6"
              d="M0,256L48,240C96,224,192,192,288,170.7C384,149,480,139,576,154.7C672,171,768,213,864,224C960,235,1056,213,1152,197.3C1248,181,1344,171,1392,165.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            />
          </svg>
        </div>
      </section>
    </main>
  );
}
