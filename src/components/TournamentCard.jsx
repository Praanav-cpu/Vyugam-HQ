import { FaDiscord, FaGamepad } from "react-icons/fa";

function TournamentCard({
  title,
  title2 = "Gaming",
  statusTags = [],
  participants = 0,
  image,
  applyLink = "#"
}) {
  return (
    <div className="rounded-xl overflow-hidden bg-white shadow-sm border hover:shadow-md transition">
      {/* Top Image */}
      <div className="w-full h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover grayscale" />
      </div>

      {/* Bottom White Section */}
      <div className="relative bg-white px-4 py-4 pb-5">
        {/* Icons top right */}
        <div className="absolute top-2 right-2 flex gap-2">
          <div className="p-[6px] rounded-full bg-gray-100 text-black hover:bg-gray-200 transition cursor-pointer">
            <FaGamepad size={14} />
          </div>
          <div className="p-[6px] rounded-full bg-gray-100 text-black hover:bg-gray-200 transition cursor-pointer">
            <FaDiscord size={14} />
          </div>
        </div>

        {/* Title Section */}
        <h3 className="font-bold text-[16px] text-black leading-tight">{title}</h3>
        <p className="text-sm text-gray-400">{title2}</p>

        {/* Participating */}
        <p className="text-sm text-[#FFA500] font-semibold mt-2">+{participants} Participating</p>

        {/* Status Tags */}
        <div className="flex flex-wrap gap-2 mt-3 mb-4">
          {statusTags.map((tag, idx) => (
            <span
              key={idx}
              className="px-3 py-1 text-xs font-medium border border-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-end">
          <a
            href={applyLink}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition"
          >
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
}

export default TournamentCard;