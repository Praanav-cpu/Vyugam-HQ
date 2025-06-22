import TournamentCard from '../components/TournamentCard'

function Home() {
  const openTournaments = [
    {
      id: 1,
      title: "Veda vs Aditya Tournament",
      team1: "Veda",
      team2: "Aditya",
      viewers: "2.5k",
      timestamp: "3:05",
      isLive: true,
      gameImage: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      team1Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100",
      team2Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 2,
      title: "BGG vs Aditya Tournament",
      team1: "BGG",
      team2: "Aditya",
      viewers: "1.8k",
      timestamp: "2:30",
      isLive: true,
      gameImage: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      team1Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100",
      team2Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 3,
      title: "Veda vs Aditya Tournament",
      team1: "Veda",
      team2: "Aditya",
      viewers: "3.2k",
      timestamp: "1:45",
      isLive: true,
      gameImage: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      team1Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100",
      team2Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 4,
      title: "BGG vs Aditya Tournament",
      team1: "BGG",
      team2: "Aditya",
      viewers: "2.1k",
      timestamp: "4:20",
      isLive: true,
      gameImage: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      team1Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100",
      team2Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ]

  const pastTournaments = [
    {
      id: 5,
      title: "Veda vs Aditya Tournament",
      team1: "Veda",
      team2: "Aditya",
      viewers: "5.2k",
      timestamp: "Ended",
      isLive: false,
      gameImage: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      team1Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100",
      team2Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 6,
      title: "BGG vs Aditya Tournament",
      team1: "BGG",
      team2: "Aditya",
      viewers: "4.8k",
      timestamp: "Ended",
      isLive: false,
      gameImage: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      team1Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100",
      team2Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 7,
      title: "Veda vs Aditya Tournament",
      team1: "Veda",
      team2: "Aditya",
      viewers: "6.1k",
      timestamp: "Ended",
      isLive: false,
      gameImage: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      team1Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100",
      team2Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      id: 8,
      title: "BGG vs Aditya Tournament",
      team1: "BGG",
      team2: "Aditya",
      viewers: "3.9k",
      timestamp: "Ended",
      isLive: false,
      gameImage: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
      team1Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100",
      team2Logo: "https://images.pexels.com/photos/1040158/pexels-photo-1040158.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-5">
            {/* Campus Warzone Banner */}
            <div className="relative h-48 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300 bg-gradient-to-r from-primary to-primary-dark">
              <div className="relative z-10 p-8 h-full flex flex-col justify-center text-white">
                <h2 className="text-3xl font-extrabold leading-tight mb-2 tracking-tight">
                  CAMPUS<br />WARZONE
                </h2>
                <p className="text-sm opacity-90 font-medium">
                  Join the ultimate gaming competition
                </p>
              </div>
              <div className="absolute top-0 right-0 bottom-0 w-2/5 opacity-40">
                <img 
                  src="https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Campus Warzone" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Campus Valorant Banner */}
            <div className="relative h-48 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300 bg-gradient-to-r from-gray-900 to-gray-700">
              <div className="relative z-10 p-8 h-full flex flex-col justify-center text-white">
                <h2 className="text-3xl font-extrabold leading-tight mb-2 tracking-tight">
                  CAMPUS<br />VALORANT
                </h2>
                <p className="text-sm opacity-90 font-medium">
                  Experience tactical FPS gaming
                </p>
              </div>
              <div className="absolute top-0 right-0 bottom-0 w-2/5 opacity-40">
                <img 
                  src="https://images.pexels.com/photos/7915435/pexels-photo-7915435.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Campus Valorant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Tournaments Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Open</h2>
            <a href="#" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">
              See Tournament →
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            {openTournaments.map(tournament => (
              <TournamentCard key={tournament.id} {...tournament} />
            ))}
          </div>
        </div>
      </section>

      {/* Past Tournaments Section */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Past</h2>
            <a href="#" className="text-gray-600 hover:text-primary font-medium text-sm transition-colors">
              All Past Tournaments →
            </a>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            {pastTournaments.map(tournament => (
              <TournamentCard key={tournament.id} {...tournament} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home