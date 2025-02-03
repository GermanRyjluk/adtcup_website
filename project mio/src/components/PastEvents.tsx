import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Users,
} from "lucide-react";

const events = [
  {
    id: "1",
    title: "Caccia al Tesoro Roma",
    date: "10 Marzo 2024",
    location: "Centro Storico, Roma",
    participants: "120 partecipanti",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&fit=crop&q=80",
    description:
      "Un'avventura indimenticabile tra i vicoli della Città Eterna.",
  },
  {
    id: "2",
    title: "Caccia al Tesoro Firenze",
    date: "24 Febbraio 2024",
    location: "Centro Storico, Firenze",
    participants: "96 partecipanti",
    image:
      "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?w=800&fit=crop&q=80",
    description: "Alla scoperta dei segreti del Rinascimento fiorentino.",
  },
];

const PastEvents = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % events.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  useEffect(() => {
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section id="past-events" className="pt-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D98] mb-4">
            Eventi Passati
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rivivi i momenti più belli delle nostre avventure passate
          </p>
        </div>

        <div className="relative overflow-hidden" {...handlers}>
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {events.map((event) => (
              <div key={event.id} className="w-full flex-shrink-0 px-4 pb-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="text-[#FEB635] w-5 h-5" />
                        <span className="text-sm text-gray-600">
                          {event.date}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="text-[#FEB635] w-5 h-5" />
                        <span className="text-sm text-gray-600">
                          {event.location}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="text-[#FEB635] w-5 h-5" />
                        <span className="text-sm text-gray-600">
                          {event.participants}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastEvents;
