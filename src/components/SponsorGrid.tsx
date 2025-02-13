import React from "react";
import SponsorCard from "./SponsorCard";

// Dati di esempio
const sponsorsData = [
  {
    name: "TechCorp",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F018%2F930%2F569%2Fnon_2x%2Fyoutube-logo-youtube-icon-transparent-free-png.png&f=1&nofb=1&ipt=06ac94b81bf5ca43fe2c16b0730ac6345fc692c4c12c5b1d54fe4fd6e44cff0f&ipo=images",
    description:
      "TechCorp è una multinazionale leader nell'innovazione tecnologica. Fondata nel 2000, supporta startup e progetti innovativi in tutto il mondo.",
    website: "google.com",
  },
  {
    name: "GreenWorld",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F024%2F273%2F770%2Foriginal%2Ftiktok-logo-transparent-free-png.png&f=1&nofb=1&ipt=6bc110ce35849d746056970be54a9e5189f3d9030be4e2c63919114d86cf3726&ipo=images",
    description:
      "GreenWorld promuove soluzioni ecologiche e sostenibili. Ha piantato milioni di alberi ed è partner di numerose ONG ambientali.",
    website: "google.com",
  },
  {
    name: "GreenWorld",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freelogovectors.net%2Fwp-content%2Fuploads%2F2023%2F10%2Fea-sports-fc-24-logo-freelogovectors.net_.png&f=1&nofb=1&ipt=abf0d1641be9430be237aca55a31606b3b47ac689865182718dd7af9f540bf5e&ipo=images",
    description:
      "GreenWorld promuove soluzioni ecologiche e sostenibili. Ha piantato milioni di alberi ed è partner di numerose ONG ambientali.",
    website: "google.com",
  },
  {
    name: "GreenWorld",
    logo: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F09%2FNescafe-Logo-700x394.png&f=1&nofb=1&ipt=d17f5f96d8b2771941393550a4cac0dd01293fbbf77d32de753efa649e9c6526&ipo=images",
    description:
      "GreenWorld promuove soluzioni ecologiche e sostenibili. Ha piantato milioni di alberi ed è partner di numerose ONG ambientali.",
    website: "google.com",
  },
  // Aggiungi quanti sponsor vuoi...
];

const SponsorGrid: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div
        className="
        grid 
        gap-6 
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4
      "
      >
        {sponsorsData.map((sponsor) => (
          <SponsorCard key={sponsor.name} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
};

export default SponsorGrid;
