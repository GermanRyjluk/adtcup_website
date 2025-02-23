import React, { useState } from "react";

const logos = [
  {
    src: "/assets/adidas.svg",
    alt: "Adidas",
  },
  {
    src: "/assets/disney.svg",
    alt: "Disney",
  },
  {
    src: "/assets/mtv.svg",
    alt: "MTV",
  },
  {
    src: "/assets/nefco.svg",
    alt: "Nefco",
  },
  {
    src: "/assets/ups.svg",
    alt: "UPS",
  },
];

const LogoCarousel: React.FC = () => {
  const [bannerOpen, setBannerOpen] = useState(true);

  return (
    <div className="relative font-inter antialiased">
      <main className="relative flex flex-col justify-center bg-grey-100 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-4 py-8 mask-carousel">
          <div className="text-center">
            {/* Logo carousel container */}
            <div className="w-full inline-flex flex-nowrap overflow-hidden mask-carousel">
              {/* First list */}
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 [&_img]:max-w-none animate-infinite-scroll">
                {logos.map((logo, idx) => (
                  <li key={`logo-first-${idx}`}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-20 h-auto object-cover"
                    />
                  </li>
                ))}
              </ul>
              {/* Second list (visually repeated) */}
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                {logos.map((logo, idx) => (
                  <li key={`logo-first-${idx}`}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="w-20 h-auto object-cover"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LogoCarousel;
