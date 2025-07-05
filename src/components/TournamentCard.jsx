import { FaDiscord, FaGamepad } from "react-icons/fa";

const TournamentCard = ({
  title,
  title2 = "Gaming",
  statusTags = [],
  participants = 0,
  image,
  applyLink = "#",
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="w-full h-[190px] sm:h-[200px] md:h-[220px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 px-5 py-4 relative">
        {/* Icons */}
        <div className="absolute top-3 right-4 flex space-x-2">
          <div className="p-2 bg-gray-100 rounded-full hover:bg-red-100 transition cursor-pointer">
            <FaGamepad size={14} />
          </div>
          <div className="p-2 bg-gray-100 rounded-full hover:bg-blue-100 transition cursor-pointer">
            <FaDiscord size={14} />
          </div>
        </div>

        <div>
          {/* Title + Sub */}
          <h3 className="font-bold text-[15px] text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500">{title2}</p>

          {/* Participants */}
          {participants > 0 && (
            <p className="mt-2 text-sm text-orange-500 font-medium">
              +{participants} Participating
            </p>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {statusTags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div className="flex justify-end mt-3">
          <a
            href={applyLink}
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-all"
          >
            Apply now
          </a>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;