import React, { useState } from "react";
import { ExternalLink, Globe } from "lucide-react";

interface Sponsor {
  name: string;
  logo: string;
  description: string;
  website: string;
}

const SponsorCard: React.FC<{ sponsor: Sponsor }> = ({ sponsor }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      onClick={toggleExpand}
      className="
        cursor-pointer
        bg-white
        shadow-md
        border border-gray-200
        rounded-lg
        overflow-hidden
        transition
        hover:shadow-lg
        flex flex-col
        py-6
      "
    >
      {/* The entire visible top portion is the sponsor logo */}
      <img
        src={sponsor.logo}
        alt=""
        className="
          w-full
          h-48       /* Adjust if you want a taller or shorter logo area */
          object-contain
          bg-white
        "
      />

      {/* Hidden/expanded section with more info */}
      <div
        className={`
          px-4 py-0
          transition-all
          duration-300
          ease-in-out
          ${expanded ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <p className="text-sm text-gray-600">{sponsor.description}</p>
        {sponsor.website && (
          <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEB635] text-sm text-gray-600 hover:text-gray-900 transition-colors mt-4"
          >
            <Globe className="w-4 h-4" />
            <span>Website</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );
};

export default SponsorCard;
