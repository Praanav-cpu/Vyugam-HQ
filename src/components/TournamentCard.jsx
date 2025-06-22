function TournamentCard({ 
  title, 
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
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
      {/* Tournament Image */}
      <div className="relative h-36 overflow-hidden">
        <img 
          src={gameImage} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        {isLive && (
          <div className="absolute top-2 left-2">
            <span className="live-badge">LIVE</span>
          </div>
        )}
      </div>
      
      {/* Tournament Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-base font-semibold text-gray-900 mb-3 leading-tight">
          {title}
        </h3>
        
        {/* Teams */}
        <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-md">
          <div className="flex flex-col items-center gap-2 flex-1">
            <img 
              src={team1Logo} 
              alt={team1} 
              className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
            />
            <span className="text-xs font-semibold text-gray-900 text-center">
              {team1}
            </span>
          </div>
          
          <div className="bg-white px-2 py-1 rounded text-xs font-bold text-gray-600 mx-2">
            VS
          </div>
          
          <div className="flex flex-col items-center gap-2 flex-1">
            <img 
              src={team2Logo} 
              alt={team2} 
              className="w-8 h-8 rounded-full object-cover border-2 border-gray-200"
            />
            <span className="text-xs font-semibold text-gray-900 text-center">
              {team2}
            </span>
          </div>
        </div>

        {/* Meta Info and Actions */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-xs text-gray-600 font-medium">
              👁 {viewers}
            </span>
            <span className="text-xs text-gray-600">
              {timestamp}
            </span>
          </div>
          
          <div className="flex gap-2">
            <button className="btn btn-secondary text-xs px-3 py-1.5">
              Follow
            </button>
            <button className="btn btn-primary text-xs px-3 py-1.5">
              {isLive ? 'Watch Live' : 'View Details'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TournamentCard