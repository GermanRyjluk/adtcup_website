import React from 'react';
import { 
  Rocket, Heart, Users, Trophy, ArrowRight,
  Calendar, MapPin, Target
} from 'lucide-react';

const StoryPreview = () => {
  return (
    <section id="story-preview" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FEB635] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#1B4D98] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D98] mb-4">
            La Nostra Storia
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Un viaggio iniziato con una semplice idea: rendere la città un playground per tutti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-[#1B4D98] p-3 rounded-lg shadow-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B4D98] mb-2">L'Inizio</h3>
                <p className="text-gray-600">
                  Nel 2020, un gruppo di amici con una passione per l'avventura ha dato vita a ADTCUP
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#1B4D98] p-3 rounded-lg shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B4D98] mb-2">La Comunità</h3>
                <p className="text-gray-600">
                  Rapidamente siamo cresciuti fino a diventare una vera famiglia di esploratori urbani
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-[#1B4D98] p-3 rounded-lg shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1B4D98] mb-2">I Successi</h3>
                <p className="text-gray-600">
                  Oggi siamo presenti in 10 città italiane con eventi che coinvolgono migliaia di partecipanti
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default StoryPreview;