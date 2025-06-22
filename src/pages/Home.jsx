import TournamentCard from '../components/TournamentCard'

function Home() {
  const openTournaments = [
    {
      id: 1,
      title: "Campu Warzone ",
      title2 : "BGIS",
       
      isLive: true,
      gameImage: "/public/img/tournament .png",
    
    },
    {
      id: 2,
      title: "BGG vs Aditya Tournament",
      
      isLive: true,
      gameImage: "/public/img/tournament .png",
      
    },
    {
      id: 3,
      title: "Veda vs Aditya Tournament",
     
      isLive: true,
      gameImage: "/public/img/tournament .png",
      
    },
    {
      id: 4,
      title: "BGG vs Aditya Tournament",
      
      isLive: true,
      gameImage: "/public/img/tournament .png",
      
     
    }
  ]

  const pastTournaments = [
    {
      id: 5,
      title: "Veda vs Aditya Tournament",
      
      gameImage: "/public/img/tournament .png"
       
    },
    {
      id: 6,
      title: "BGG vs Aditya Tournament",
      
gameImage: "/public/img/tournament .png"      
    },
    {
      id: 7,
      title: "Veda vs Aditya Tournament",
       
gameImage: "/public/img/tournament .png"       
    },
    {
      id: 8,
      title: "BGG vs Aditya Tournament",
       
gameImage: "/public/img/tournament .png"       
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Banner Section */}
      <section className="py-12 bg-gray-200">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Campus Warzone Banner */}
       <div className="relative h-64 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300">
  <img 
    src="/img/warzone.png" 
    alt="Campus Valorant" 
    className="w-full h-full object-cover"
  />
</div>

      {/* Campus Valorant Banner */}
     <div className="relative h-64 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform duration-300">
  <img 
    src="/img/valo.png" 
    alt="Campus Valorant" 
    className="w-full h-full object-cover"
  />
</div>

    </div>
  </div>
</section>


      {/* Open Tournaments Section */}
      <section className="py-10 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6">
         <div className="flex items-center gap-4 mt-6 mb-8">
  <h2 className="text-3xl font-bold text-gray-900 whitespace-nowrap">Open</h2>
  <div className="flex-grow h-px bg-gray-300"></div>
  <a href="#" className=" bg-[#f2f2f2] px-4 py-2 rounded-xl  text-black hover:text-primary font-medium text-sm whitespace-nowrap">
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
      <section className="py-10 bg-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Past</h2>
              <div className="flex-grow h-px bg-gray-300"></div>

            <a href="#" className="bg-[#f2f2f2] px-4 py-2 rounded-xl  text-black hover:text-primary font-medium text-sm whitespace-nowrap">
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