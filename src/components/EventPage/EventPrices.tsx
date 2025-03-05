import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

interface SlideData {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const slidesData: SlideData[] = [
  {
    id: 1,
    title: "Paintball",
    description:
      "Divertiti in una battaglia strategica a colpi di vernice! Nasconditi, spara e porta la tua squadra alla vittoria.",
    imageUrl:
      "https://sportsmatik.com/uploads/matik-sports-corner/matik-know-how/paintball_1584187854.jpg",
    link: "https://example.com/premio1",
  },
  {
    id: 2,
    title: "GO kart",
    description:
      "Sali a bordo di un kart e sfreccia su una pista professionale. Sorpassi, curve e velocità per un’esperienza da pilota!",
    imageUrl:
      "https://www.experienciasunicas.com/wp-content/uploads/2017/06/karts-benidorm-experiencias-unicas-1.jpg",
    link: "https://example.com/premio2",
  },
  {
    id: 3,
    title: "Laser Tag",
    description:
      "Sfida i tuoi amici in un'arena futuristica con fucili laser. Niente dolore, solo tattica e azione!",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/55803c1ce4b025a747da0abc/1544036806512-S8QQSBT6LCU5QEUCKL6M/ke17ZwdGBToddI8pDm48kCDnvzZDSTqrZYB0qToMReZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0psyQQR5KrxgIm8QcotvsYtvUHnJsni5ivcu2RP0UO8zWN1uCXtq4fHLhtl5lYmmpQ/Laser+tag+4+people.JPG",
    link: "https://example.com/premio3",
  },
  {
    id: 4,
    title: "Parco avventura",
    description:
      "Percorsi sospesi, ponti tibetani e zipline tra gli alberi. Equilibrio, adrenalina e natura!",
    imageUrl:
      "https://www.jungleraiderpark.com/wp-content/uploads/2020/04/gite-scolastiche-scuola-primaria.jpg",
    link: "https://example.com/premio3",
  },
  {
    id: 5,
    title: "Escape room & Zero Gravity",
    description:
      "Risolvi enigmi per fuggire da una stanza a tema e prova la sensazione di assenza di peso!",
    imageUrl: "https://media.timeout.com/images/105505176/image.jpg",
    link: "https://example.com/premio3",
  },
  {
    id: 6,
    title: "Karaoke",
    description:
      "Sali sul palco e canta le tue canzoni preferite. Microfono, amici e tanto divertimento assicurato!",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/6151e741a56f9d31cf7849e2/78555baa-a8c6-4e1a-9da0-bf44c728ff8d/AdobeStock_458918959.jpeg",
    link: "https://example.com/premio3",
  },
  {
    id: 7,
    title: "Spa & Aperitivo",
    description:
      "Rilassati con sauna e idromassaggio, poi goditi un aperitivo esclusivo in un’atmosfera elegante.",
    imageUrl:
      "https://i.pinimg.com/originals/00/01/b7/0001b78e170ebcdb347f8f25a721ef6f.jpg",
    link: "https://example.com/premio3",
  },
  {
    id: 8,
    title: "Rage Room",
    description:
      "Sfoga lo stress distruggendo oggetti con mazze e martelli in totale sicurezza. Liberatorio e divertente!",
    imageUrl:
      "https://rageroomradar.com/wp-content/uploads/2023/09/Best-Rage-Rooms-In-Idaho-1-1024x574.png",
    link: "https://example.com/premio3",
  },
  {
    id: 9,
    title: "VR Experience",
    description:
      "Indossa il visore e immergiti in mondi virtuali incredibili. Realtà aumentata, giochi e avventure senza limiti!",
    imageUrl:
      "https://meetspacevr.co.uk/wp-content/uploads/2021/03/ZL_Group_Players4_WEB.jpg",
    link: "https://example.com/premio3",
  },
];

export default function EventPrices() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: { perView: 1.2, spacing: 16, origin: 0.09 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20, origin: 0.5 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20, origin: 0.5 },
      },
    },
  });

  return (
    <section className="w-full flex flex-col items-center justify-center bg-gray-50 py-8 px-4">
      {/* Header: Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl mb-2 font-extrabold tracking-wide bg-[#005baa] bg-clip-text text-transparent">
          Catalogo ADT
        </h1>
        <p className="max-w-md mx-auto text-gray-700 leading-relaxed mb-2">
          Solo i migliori conquistano la vetta! 🏅
        </p>
        <p className="max-w-md mx-auto text-gray-700 leading-relaxed">
          La squadra vincitrice potrà scegliere uno (o più!) dei fantastici
          premi del Catalogo ADT. Sfida, vinci e porta a casa il bottino!
        </p>
      </div>

      {/* Keen Slider Carousel */}
      <div ref={sliderRef} className="keen-slider w-full max-w-4xl">
        {slidesData.map((slide) => (
          <div
            key={slide.id}
            className="keen-slider__slide rounded-3xl overflow-hidden relative bg-cover bg-center"
            style={{
              backgroundImage: `url("${slide.imageUrl}")`,
              height: "28rem",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent"></div>
            <div className="relative z-10 p-4 flex flex-col justify-end h-full">
              <h2 className="text-xl font-bold text-white uppercase mb-2">
                {slide.title}
              </h2>
              <p className="text-sm text-gray-300 line-clamp-4">
                {slide.description}
              </p>
              {/* <a
                href={slide.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 border border-white rounded-full text-white text-xs uppercase hover:bg-white hover:text-[#005baa] transition-colors"
              >
                Scopri
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
