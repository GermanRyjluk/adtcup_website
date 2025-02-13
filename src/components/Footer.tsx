import React from "react";
import {
  Instagram,
  Music as TikTokIcon,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Youtube,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1B4D98] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contattaci</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@adtcup.it"
                  className="flex items-center space-x-2 hover:text-[#FEB635] transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>adtcup07@gmail.com</span>
                </a>
              </li>

              <li>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5" />
                  <span>Torino, Italia</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Link Utili</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-[#FEB635] transition-colors"
                >
                  Chi Siamo
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("gallery")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-[#FEB635] transition-colors"
                >
                  Galleria
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("faq")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-[#FEB635] transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() =>
                    document
                      .getElementById("sponsor")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="hover:text-[#FEB635] transition-colors"
                >
                  Sponsor
                </button>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="grid grid-cols-1 gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#FEB635] transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[#FEB635] transition-colors"
              >
                <TikTokIcon className="w-5 h-5" />
                <span>TikTok</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-300">
              © 2024 ADTCUP. Tutti i diritti riservati.
            </div>
            <div className="text-sm text-gray-300">
              Designed and developed by{" "}
              <a
                href="https://github.com/rik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FEB635] hover:underline"
              >
                Rik
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
