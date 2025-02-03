import React from 'react';
import { 
  Heart, Globe, Target, Users,
  Trophy, MapPin, Star, TrendingUp
} from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="pt-24 bg-white">
      

      {/* Stats Section */}
<div className="mt-2 bg-gradient-to-r from-[#1B4D98] to-blue-700 py-16 pb">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    {/* Titolo della sezione */}
    <h2 className="text-center text-white text-3xl font-bold mb-12">
      Le nostre statistiche
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <StatsCard icon={Users} number="5000+" label="Utenti Attivi" delay={0} />
      <StatsCard icon={Trophy} number="50+" label="Progetti Completati" delay={100} />
      <StatsCard icon={Star} number="98%" label="Soddisfazione Cliente" delay={200} />
      <StatsCard icon={TrendingUp} number="200%" label="Crescita Annuale" delay={300} />
    </div>

    <div className="mt-12 flex justify-center">
      <button className="w-full max-w-[300px] bg-white text-[#1B4D98] px-8 py-4 rounded-lg font-semibold text-lg transition transform duration-150 shadow-lg active:scale-95 active:shadow-sm">
        Visualizza le tue statistiche
      </button>
    </div>
  </div>
</div>

    </section>
  );
};

interface StatsCardProps {
  icon: React.ElementType;
  number: string;
  label: string;
  delay: number;
}

const StatsCard = ({ icon: Icon, number, label, delay }: StatsCardProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 text-white transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-white/20 p-3 rounded-lg w-fit mb-4">
        <Icon className="w-8 h-8 text-[#FEB635]" />
      </div>
      <div className={`text-4xl font-bold mb-2 transition-all duration-1000 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}>
        {number}
      </div>
      <div className="text-sm text-gray-200">{label}</div>
    </div>
  );
};

export default AboutUs;