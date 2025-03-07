import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 20;
        setScrolled(isScrolled);

        const sections = document.querySelectorAll("section[id]");
        const scrollPosition = window.scrollY + 100;
        sections.forEach((section) => {
          const sectionTop = (section as HTMLElement).offsetTop;
          const sectionHeight = (section as HTMLElement).offsetHeight;
          const sectionId = section.getAttribute("id") || "";
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionId);
          }
        });
      };
      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setScrolled(false);
      const routeName = location.pathname.replace("/", "") || "home";
      setActiveSection(routeName);
    }
  }, [location]);

  const handleNavItemClick = (itemHref: string) => {
    if (itemHref === "home") {
      navigate("/");
      setIsOpen(false);
      return;
    }
    navigate(`/${itemHref}`);
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "home" },
    { name: "About Us", href: "aboutUs" },
    { name: "Manuale ADT", href: "manualeADT" },
  ];

  // Framer Motion variants for the navbar fade/slide animation.
  const navVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 bg-[#1B4D98] ${
        scrolled ? "shadow-md" : ""
      } transition-shadow`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Section (Logo + Title) */}
          <div className="flex items-center">
            <div className="flex-shrink-0 relative group flex">
              <img src="/assets/icon.png" alt="Icona" className="h-10 mr-2" />
              <button
                onClick={() => handleNavItemClick("home")}
                className="text-[#FEB635] text-2xl font-bold relative z-10 active:scale-120"
              >
                ADTCUP
              </button>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  onClick={() => handleNavItemClick(item.href)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors group ${
                    activeSection === item.href
                      ? "text-[#FEB635]"
                      : "text-white hover:text-[#FEB635]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item.name}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FEB635] transform origin-left transition-all duration-300 ${
                      hoveredItem === item.name || activeSection === item.href
                        ? "scale-x-100"
                        : "scale-x-0"
                    }`}
                  />
                  <div
                    className={`absolute -inset-1 bg-[#FEB635]/10 rounded-lg transform origin-left transition-all duration-300 ${
                      hoveredItem === item.name
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0"
                    }`}
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-white hover:text-[#FEB635] transition-colors z-50"
              aria-label="Toggle menu"
            >
              <div className="absolute inset-0 bg-[#FEB635]/10 rounded-full transform transition-transform duration-300 hover:scale-110" />
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#1B4D98]/95 backdrop-blur-sm z-40 md:hidden">
          <div className="fixed top-0 left-0 right-0 h-20 px-4 flex items-center justify-between">
            <button
              onClick={() => handleNavItemClick("home")}
              className="text-[#FEB635] text-2xl font-bold"
            >
              ADTCUP
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="w-10 h-10 flex items-center justify-center text-white hover:text-[#FEB635] transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          <div className="h-full flex flex-col justify-center px-4 pt-20">
            <div className="space-y-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavItemClick(item.href)}
                  className={`block text-3xl font-bold transition-colors w-full text-left ${
                    activeSection === item.href
                      ? "text-[#FEB635]"
                      : "text-white hover:text-[#FEB635]"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="mt-auto pb-8 text-white/70 text-sm">
              <p>© 2024 ADTCUP</p>
              <p>La caccia al tesoro urbana più divertente d'Italia</p>
            </div>
          </div>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
