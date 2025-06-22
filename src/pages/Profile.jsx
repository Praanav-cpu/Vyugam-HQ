function Profile() {
  const userStats = {
    tournaments: 24,
    wins: 18,
    winRate: 75,
    rank: "Diamond"
  }

  const recentMatches = [
    {
      id: 1,
      tournament: "Veda vs Aditya Tournament",
      result: "Win",
      score: "13-7",
      date: "2 hours ago"
    },
    {
      id: 2,
      tournament: "BGG vs Aditya Tournament",
      result: "Loss",
      score: "11-13",
      date: "1 day ago"
    },
    {
      id: 3,
      tournament: "Campus Championship",
      result: "Win",
      score: "13-9",
      date: "3 days ago"
    }
  ]

  return (
    <div className="py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-8 mb-16 p-10 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100">
          <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center text-5xl text-white shadow-lg shadow-primary/30">
            👤
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">worldtricks</h1>
            <p className="text-lg text-gray-600 mb-4">Competitive Gamer</p>
            <div className="flex gap-3 mb-6">
              <span className="bg-green-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                {userStats.rank}
              </span>
              <span className="bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide">
                ✓ Verified
              </span>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="btn btn-secondary">Edit Profile</button>
            <button className="btn btn-primary">Share Profile</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Statistics</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">{userStats.tournaments}</div>
                <div className="text-sm text-gray-600 font-medium">Tournaments</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">{userStats.wins}</div>
                <div className="text-sm text-gray-600 font-medium">Wins</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">{userStats.winRate}%</div>
                <div className="text-sm text-gray-600 font-medium">Win Rate</div>
              </div>
              <div className="bg-white p-6 rounded-xl text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                <div className="text-3xl font-bold text-primary mb-2">{userStats.rank}</div>
                <div className="text-sm text-gray-600 font-medium">Current Rank</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Recent Matches</h2>
            <div className="space-y-4">
              {recentMatches.map(match => (
                <div key={match.id} className="bg-white p-5 rounded-xl flex justify-between items-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{match.tournament}</h4>
                    <p className="text-sm text-gray-600">{match.date}</p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide ${
                      match.result.toLowerCase() === 'win' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {match.result}
                    </span>
                    <div className="text-sm text-gray-600 font-semibold mt-1">{match.score}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile