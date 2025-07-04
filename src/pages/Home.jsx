import TournamentCard from "../components/TournamentCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Home() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ Add minimum 4 to make loop + 2 per view stable
  const openTournaments = [
    {
      id: 1,
      title: "Valo in Action Tournament",
      title2: "Gaming",
      statusTags: ["ONLINE", "OPEN", "LIVE"],
      participants: 500,
      image:
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "BCCI in Action Tournament",
      title2: "Gaming",
      statusTags: ["ONLINE", "OPEN", "LIVE"],
      participants: 500,
      image:
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Valo in Action Tournament",
      title2: "Gaming",
      statusTags: ["ONLINE", "OPEN", "LIVE"],
      participants: 500,
      image:
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "BCCI in Action Tournament",
      title2: "Gaming",
      statusTags: ["ONLINE", "OPEN", "LIVE"],
      participants: 500,
      image:
        "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  const pastTournaments = [
    {
      id: 5,
      title: "BGMI Squad Face-Off",
      title2: "Gaming (Past)",
      statusTags: ["OFFLINE", "ENDED"],
      participants: 800,
      image:
        "https://images.pexels.com/photos/6153444/pexels-photo-6153444.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      title: "Free Fire Nationals",
      title2: "Gaming (Past)",
      statusTags: ["OFFLINE", "COMPLETED"],
      participants: 640,
      image:
        "https://images.pexels.com/photos/6153448/pexels-photo-6153448.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      title: "Valorant Solo Clash",
      title2: "Gaming (Past)",
      statusTags: ["ONLINE", "ENDED"],
      participants: 720,
      image:
        "https://images.pexels.com/photos/12877694/pexels-photo-12877694.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      title: "Call of Duty Challenge",
      title2: "Gaming (Past)",
      statusTags: ["ONLINE", "FINISHED"],
      participants: 570,
      image:
        "https://images.pexels.com/photos/6153449/pexels-photo-6153449.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="bg-gray-100 py-10 min-h-screen">
      <div className="max-w-[96%] mx-auto px-2">

        {/* 🎠 Swiper Slider Section */}
        <div className="mb-12 relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
              el: '.swiper-pagination-custom',
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={20}
            loop={true}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 1.2 },
              768: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.2 },
            }}
          >
            <SwiperSlide>
              <img
                src="/cod.jpeg"
                alt="COD Banner"
                className="rounded-xl w-full object-cover h-[200px] sm:h-[250px]"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/valorant.jpeg"
                alt="Valorant Banner"
                className="rounded-xl w-full object-cover h-[200px] sm:h-[250px]"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/codmod.jpg"
                alt="Slide 3"
                className="rounded-xl w-full object-cover h-[200px] sm:h-[250px]"
              />
            </SwiperSlide>

            <SwiperSlide>
              <img
                src="/bgmi.jpeg"
                alt="Slide 4"
                className="rounded-xl w-full object-cover h-[200px] sm:h-[250px]"
              />
            </SwiperSlide>
          </Swiper>

          {/* ✅ Display Dots Below */}
          <div className="swiper-pagination-custom mt-4 flex justify-center"></div>
        </div>

        {/* ========================= OPEN SECTION ========================= */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Open</h2>
          <a
            href="#"
            className="rounded-full bg-gray-200 hover:bg-gray-300 px-4 py-2 text-sm font-medium text-black transition"
          >
            All Your Tournaments &gt;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
          {openTournaments.map((tournament) => (
            <TournamentCard key={tournament.id} {...tournament} />
          ))}
        </div>

        {/* ========================= PAST SECTION ========================= */}
        <div className="flex items-center justify-between mb-6 mt-10">
          <h2 className="text-2xl font-bold">Past</h2>
          <a
            href="#"
            className="rounded-full bg-gray-200 hover:bg-gray-300 px-4 py-2 text-sm font-medium text-black transition"
          >
            All Past Tournaments &gt;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {pastTournaments.map((tournament) => (
            <TournamentCard key={tournament.id} {...tournament} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;