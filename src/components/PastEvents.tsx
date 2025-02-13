import React from "react";
import { Calendar, MapPin, Users } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper/modules";

const events = [
  {
    id: "1",
    title: "La caccia Fantasma",
    date: "1 Novembre 2024",
    location: "Torino",
    participants: "+25 partecipanti",
    image:
      "https://firebasestorage.googleapis.com/v0/b/adt-cup.appspot.com/o/events%2FWhatsApp%20Image%202024-10-09%20at%2018.39.36.jpeg?alt=media&token=df453076-92b0-4de5-9e96-6907a2277059",
    description:
      "Un viaggio straordinario tra le leggende e i segreti di Torino.",
  },
  {
    id: "2",
    title: "The original",
    date: "8 e 9 Marzo 2023",
    location: "Torino",
    participants: "+20 partecipanti",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.vogue.com%2Fphotos%2F633eefaf4f85bd18e8ffbc47%2Fmaster%2Fw_2560%252Cc_limit%2FGettyImages-690073036.jpg&f=1&nofb=1&ipt=c0d704e919f090d576b9095dd3df03345ed430fa3654ca2a0cf191d0a8ed0808&ipo=images",
    description:
      "Un’esperienza tra amici, scoprendo i bar più originali e i posti più suggestivi di Torino.",
  },
];

const PastEvents = () => {
  return (
    <section id="past-events" className="pt-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1B4D98] mb-4">
            Eventi Passati
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Rivivi i momenti più belli delle nostre avventure passate
          </p>
        </div>

        <Swiper
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id} className="px-4 pb-14">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex justify-between">
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
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PastEvents;
