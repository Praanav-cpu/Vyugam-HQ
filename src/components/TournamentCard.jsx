import { FaDiscord, FaInstagram } from 'react-icons/fa';


function TournamentCard({ 
  title, 
  title2 = "",
  team1, 
  team2, 
  viewers, 
  timestamp, 
  isLive = false,
  gameImage,
  team1Logo,
  team2Logo 
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-h-[360px]">
      {/* Tournament Image */}
      <div className="relative h-56 overflow-hidden"> {/* height increased */}
        <img 
          src={gameImage} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {isLive && (
          <div className="absolute top-2 left-2">
            <span className="bg-red-600 text-white px-2 py-1 text-xs rounded">
              LIVE
            </span>
          </div>
        )}
      </div>

      {/* Tournament Content */}
      <div className="p-5"> {/* padding increased */}
        {/* Title with optional line break */}
        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
          {title} {title2 && <><br />{title2}</>}
        </h3>

         {/* Icons */}
 <div className="flex items-center gap-2">
  <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
    <FaDiscord className="w-5 h-5 text-gray-500 hover:text-blue-600 cursor-pointer" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="w-5 h-5 text-gray-500 hover:text-pink-600 cursor-pointer" />
  </a>
</div>


        {/* Meta Info and Actions */}
        <div className="flex justify-between items-center mt-8">
          <div className="flex items-center gap-3 text-xs text-gray-600 font-medium">
            {/* <span>👁 {viewers}</span> */}
            {/* <span>{timestamp}</span> */}
          </div>

          <div className="flex gap-2">
            <button className="bg-gray-200 text-gray-800 px-3 py-1.5 rounded text-xs font-medium">
              Follow
            </button>
            <button className="bg-red-500 text-white px-3 py-1.5 rounded text-xs font-medium">
              {isLive ? 'Watch Live' : 'View Details'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TournamentCard;
