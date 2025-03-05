import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const teamMembers = [
  {
    name: "Pietro Giancristofaro",
    role: "Il Maestro d'Orchestra (Co-Founder)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/adt-cup.appspot.com/o/TeamPhotos%2FPietroGiancristofaro.jpeg?alt=media&token=03ef54f5-d411-4103-9105-b249ff763bcc",
  },
  {
    name: "Giuseppe Bellisario",
    role: "L'Architetto dell'Esperienza (Co-Founder)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/adt-cup.appspot.com/o/TeamPhotos%2FGiuseppeBellisario.jpeg?alt=media&token=2f05dedd-cb42-4055-8093-388b6a5e1df7",
  },
  {
    name: "German F. Ryjluk",
    role: "Il Nostro Team di Programmatori (CTO)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/adt-cup.appspot.com/o/TeamPhotos%2FGermanRyjluk.jpg?alt=media&token=8ed38df6-628f-460a-84b7-f411d0c43022",
  },
  {
    name: "Federica Masciangelo",
    role: "La Maga del Design (CDO)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/adt-cup.appspot.com/o/TeamPhotos%2FFedericaMasciangelo.jpeg?alt=media&token=58f0dead-16d6-4f0a-be58-1e8b62fcfd17",
  },
  {
    name: "Marco Colacioppo",
    role: "Il Boss dei Soldi (CMO)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/adt-cup.appspot.com/o/TeamPhotos%2FMarcoColacioppo.jpeg?alt=media&token=49238a1f-4163-4ca7-80e6-d9d8d4f7acfe",
  },
  {
    name: "Angela R. Staniscia",
    role: "La Regina dei Social (SMM)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/adt-cup.appspot.com/o/TeamPhotos%2FAngelaStaniscia.JPG?alt=media&token=bed1d084-594d-41b3-b9df-66b83fdd22e0",
  },
];

const Team = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1B4D98] mb text-center">
          ADT Team
        </h2>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10 mt-4">
          Creatori di eventi epici, domatori del caos e distruttori della noia.
          Se c’è divertimento, ci siamo noi! 🚀🔥
        </p>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              <div className="w-48 h-48 mb-6 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 rounded-lg"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
