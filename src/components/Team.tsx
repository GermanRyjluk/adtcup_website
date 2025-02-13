import React, { useState } from 'react';
import { 
  Sparkles, Coffee, Gamepad2, Camera, Palette, Code2, Trophy, Rocket,
  Linkedin, Twitter, Instagram, Mail
} from 'lucide-react';

const teamMembers = [
  {
    name: 'Marco',
    role: 'Master of Chaos',
    description: 'Trasforma le idee più folli in realtà, caffè alla mano. Con 10+ anni di esperienza nell\'organizzazione di eventi urbani.',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Giulia',
    role: 'Game Designer Supremo',
    description: 'Crea enigmi che ti faranno grattare la testa per giorni. Specialista in game design con un master in psicologia cognitiva.',
    icon: Gamepad2,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&fit=crop&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Alessandro',
    role: 'Cacciatore di Momenti',
    description: 'Cattura la magia di ogni evento con la sua fotocamera. Fotografo professionista con un occhio per i dettagli nascosti della città.',
    icon: Camera,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&fit=crop&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Sofia',
    role: 'Artista del Caos',
    description: 'Trasforma le nostre idee in esplosioni di colore. Designer pluripremiata con una passione per l\'arte urbana.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&fit=crop&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Luca',
    role: 'Mago del Codice',
    description: 'Trasforma i bug in feature con un tocco di magia. Full-stack developer con una specializzazione in gamification.',
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Elena',
    role: 'Regina degli Eventi',
    description: 'Organizza il caos con un sorriso. Event manager con esperienza in grandi eventi internazionali.',
    icon: Trophy,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Paolo',
    role: 'Innovatore Supremo',
    description: 'Sempre un passo avanti nel futuro. Stratega creativo con un PhD in Experience Design.',
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&fit=crop&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    name: 'Chiara',
    role: 'Custode della Magia',
    description: 'Aggiunge un tocco di brillantezza a ogni progetto. Social media wizard con un background in storytelling digitale.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      instagram: 'https://instagram.com'
    }
  },
];

const TeamMemberCard = ({ member, index }: { member: typeof teamMembers[0], index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = member.icon;

  const handleTouchStart = (e: React.TouchEvent) => {
    // Handle touch start for swipe gestures
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    // Handle touch move for swipe gestures
  };

  const handleTouchEnd = () => {
    // Handle touch end for swipe gestures
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 ease-out
        ${isExpanded ? 'md:scale-105 z-10' : 'hover:scale-102'}
        ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}
      onClick={() => setIsExpanded(!isExpanded)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="aspect-w-1 aspect-h-1 relative overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D98]/90 via-[#1B4D98]/50 to-transparent opacity-90 transition-opacity duration-300"></div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500">
        <div className="flex items-center space-x-3 mb-2">
          <div className="bg-[#FEB635] p-2 rounded-lg shadow-glow">
            <Icon className="w-5 h-5 text-[#1B4D98]" />
          </div>
          <div>
            <h3 className="text-xl font-bold leading-tight">{member.name}</h3>
            <p className="text-[#FEB635] text-sm font-medium">{member.role}</p>
          </div>
        </div>

        <div className={`transform transition-all duration-500 ease-out overflow-hidden
          ${isExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 md:group-hover:max-h-48 md:group-hover:opacity-100'}`}>
          <p className="text-sm text-gray-100 mb-4 leading-relaxed">
            {member.description}
          </p>
          <div className="flex items-center space-x-4">
            <a href={member.social.linkedin} className="text-white hover:text-[#FEB635] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={member.social.twitter} className="text-white hover:text-[#FEB635] transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href={member.social.instagram} className="text-white hover:text-[#FEB635] transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={`mailto:${member.name.toLowerCase()}@adtcup.it`} className="text-white hover:text-[#FEB635] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FEB635] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#1B4D98] rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D98] mb-4 relative">
              Il Dream Team
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FEB635] to-transparent"></div>
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Gli eroi dietro le quinte che rendono possibile la magia di ADTCUP. 
            Una squadra di sognatori, innovatori e creatori.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;