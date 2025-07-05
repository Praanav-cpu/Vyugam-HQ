import { useEffect, useRef, useState } from "react";
import TournamentCard from "../components/TournamentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../index.css";

function Home() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Add minimum 4 to make loop + 2 per view stable
  const openTournaments = [
    { id: 1, title: "Valo Tournament", image: "/cod.jpeg", statusTags: ["OPEN"], participants: 500 },
    { id: 2, title: "BCCI Showdown", image: "/valorant.jpeg", statusTags: ["LIVE"], participants: 300 },
    { id: 3, title: "COD MOD", image: "/codmod.jpg", statusTags: ["SOLO"], participants: 450 },
    { id: 4, title: "BGMI Tournament", image: "/bgmi.jpeg", statusTags: ["TEAM"], participants: 600 },
    { id: 5, title: "freefire tournament", image: "/freefire.jpg", statusTags: ["TEAM"], participants: 900 },
    { id: 6, title: "COD tournament", image: "/bgmi.jpeg", statusTags: ["TEAM"], participants: 256 },
    
  ];

  const pastTournaments = [
    {
      id: 7,
      title: "BGMI Finals",
      title2: "Past",
      image: "/bgmi.jpeg",
      participants: 800,
      statusTags: ["ENDED"]
    },
    {
      id: 8,
      title: "Free Fire Ends",
      title2: "Past",
      image: "/freefire.jpg",
      participants: 640,
      statusTags: ["COMPLETED"]
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current?.swiper) {
        const next = (swiperRef.current.swiper.realIndex + 1) % openTournaments.length;
        swiperRef.current.swiper.slideToLoop(next);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [openTournaments.length]);

  return (
    <div className="bg-gray-100 pt-[60px] pb-10 min-h-screen">
      <div className="px-4 sm:px-6 md:px-10 max-w-screen-xl mx-auto">

        {/* ✅ Swiper Slider */}
        {openTournaments.length >= 3 && (
          <div className="mb-12">
            <Swiper
              ref={swiperRef}
              modules={[Pagination]}
              loop={true}
              centeredSlides={true}
              slidesPerView={2}
              spaceBetween={30}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 1.2 },
                1024: { slidesPerView: 2 },
              }}
              pagination={{
                el: ".swiper-pagination-custom",
                clickable: true,
              }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {openTournaments.map((t, index) => (
                <SwiperSlide key={t.id}>
                  <div
                    className={`transition-all duration-[1000ms] ease-in-out rounded-xl overflow-hidden border-2 ${
                      activeIndex === index
                        ? "scale-105 border-transparent shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6)] z-10"
                        : "scale-95 opacity-80 grayscale border border-gray-300 shadow-md"
                    }`}
                  >
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-[220px] md:h-[300px] object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination-custom mt-5 flex justify-center" />
          </div>
        )}

        {/* ✅ OPEN Section */}
        <section className="bg-white p-6 rounded-xl shadow mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              🟢 Open Tournaments
            </h2>
            <a href="#" className="text-sm px-4 py-2 bg-green-100 hover:bg-green-200 rounded-full text-green-700 font-semibold">
              View All
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {openTournaments.map((t) => (
              <TournamentCard key={t.id} {...t} />
            ))}
          </div>
        </section>

        {/* ✅ PAST Section */}
        <section className="bg-gray-100 p-6 border border-gray-200 rounded-xl shadow-inner">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              🕑 Past Tournaments
            </h2>
            <a href="#" className="text-sm px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full text-gray-700 font-semibold">
              See Archive
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {pastTournaments.map((t) => (
              <TournamentCard key={t.id} {...t} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;