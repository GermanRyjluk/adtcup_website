import React from "react";
import {
  Rocket,
  Heart,
  Users,
  Trophy,
  ArrowRight,
  Calendar,
  MapPin,
  Target,
  Map,
  Swords,
} from "lucide-react";

const StoryPreview = () => {
  return (
    <section
      id="story-preview"
      className="py-24 bg-[#1B4D98] relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FEB635] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <h2 className=" text-center text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            La Nostra Storia
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto text-shadow mb-4">
            Siamo un gruppo di studenti che ha una missione: rivoluzionare il
            modo di divertirsi.
          </p>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto text-shadow">
            Serate tutte uguali, stesse routine, stesso copione. È ora di
            cambiare le carte in tavola. E’ l’ora di ADT CUP, un format che
            include:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Timeline */}
          <div className="space-y-8">
            <TimelineItem
              icon={Map}
              title="Cacce al tesoro"
              description="Risolvi enigmi, segui gli indizi e scopri la città come non l’hai mai vista!"
              delay={0}
              date={""}
            />

            <TimelineItem
              icon={Swords}
              title="Giochi e sfide"
              date=""
              description="Mettiti alla prova con prove alcoliche (e non), enigmi e attività uniche, create proprio per te!"
              delay={200}
            />

            <TimelineItem
              icon={Users}
              title="Nuove amicizie"
              date=""
              description="Conosci persone nuove e crea legami autentici, in un ambiente dove essere se stessi senza giudizio. "
              delay={400}
            />
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <ImageCard
                src="https://firebasestorage.googleapis.com/v0/b/adt-cup.appspot.com/o/EventPhotos%2FADT%20CUP%20%20%20Vinci%20la%20citta%CC%80!%20Prima%20edizione%2C%20Marzo%202023%20%23adtcup%20%23torino.jpg?alt=media&token=7b98ef3b-0dc8-4e0b-bcaa-19ad18879e9a"
                alt="Il nostro primo evento"
                delay={100}
              />
              {/* <ImageCard
                src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&fit=crop&q=80"
                alt="La nostra community"
                delay={300}
              /> */}
            </div>
            <div className="space-y-4 pt-8">
              <ImageCard
                src="https://firebasestorage.googleapis.com/v0/b/adt-cup.appspot.com/o/EventPhotos%2F2024-11-02%2004.08.59%201.png?alt=media&token=788589e7-a19d-4446-816e-a8abc28a6002"
                alt="Momenti di gioco"
                delay={200}
              />
              {/* <ImageCard
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&fit=crop&q=80"
                alt="Celebrazioni"
                delay={400}
              /> */}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-10">
          <div className="rounded-md shadow-[0_0_30px_rgba(254,182,53,0.3)]">
            <a
              href="/aboutUs"
              className="inline-flex items-center justify-center w-full bg-[#FEB635] text-[#1B4D98] px-8 py-4 rounded-lg font-semibold text-lg transition transform duration-150 shadow-lg active:scale-95 active:shadow-sm"
            >
              <span className="mr-4">Scopri di più su di noi</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
        {/* <div className="mt-16 text-center">
          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center space-x-2 bg-[#FEB635] text-[#1B4D98] px-8 py-4 rounded-lg font-semibold text-lg transition transform duration-300 hover:bg-[#FEB635]/90 transition transform duration-150 shadow-lg active:scale-95 active:shadow-sm"
          >
            <span>Scopri di più su di noi</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

interface TimelineItemProps {
  icon: React.ElementType;
  title: string;
  date: string;
  description: string;
  delay: number;
}

const TimelineItem = ({
  icon: Icon,
  title,
  date,
  description,
  delay,
}: TimelineItemProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const itemRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={itemRef}
      className={`flex items-start space-x-4 transform transition-all duration-700 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="bg-[#FEB635] p-3 rounded-lg shadow-lg">
        <Icon className="w-6 h-6 text-[#1B4D98]" />
      </div>
      <div>
        <div className="flex items-center space-x-2 mb-1">
          <h3 className="text-xl font-bold text-white text-shadow">{title}</h3>
        </div>
        <p className="text-gray-200 text-shadow">{description}</p>
      </div>
    </div>
  );
};

interface ImageCardProps {
  src: string;
  alt: string;
  delay: number;
}

const ImageCard = ({ src, alt, delay }: ImageCardProps) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const imageRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={imageRef}
      className={`relative rounded-lg overflow-hidden transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <p className="text-white text-sm font-medium text-shadow">{alt}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryPreview;
