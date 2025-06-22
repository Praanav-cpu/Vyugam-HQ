function Footer() {
  return (
    <footer className="bg-white text-black py-12 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-16">
          {/* Left Section */}
          <div className="space-y-8">
            <h2 className="text-6xl font-bold leading-tight">
              We celebrate <br/> <span className="text-primary">GAMING</span> and the<br />
              legends who play.
            </h2>
            
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center text-base hover:bg-primary hover:-translate-y-0.5 transition-all">📘</a>
              <a href="#" className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center text-base hover:bg-primary hover:-translate-y-0.5 transition-all">📸</a>
              <a href="#" className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center text-base hover:bg-primary hover:-translate-y-0.5 transition-all">🐦</a>
              <a href="#" className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center text-base hover:bg-primary hover:-translate-y-0.5 transition-all">📺</a>
              <a href="#" className="w-9 h-9 bg-gray-700 rounded-md flex items-center justify-center text-base hover:bg-primary hover:-translate-y-0.5 transition-all">🎵</a>
            </div>
            
            <div className="space-y-2">
              <div className="text-xl font-bold text-primary">Vaysom</div>
              <div className="text-gray-400 text-sm">© 2024, Vaysom Pte Ltd.</div>
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex justify-between">
            <div className="grid grid-cols-4 gap-8 flex-1">
              <div className="space-y-2">
                <h4 className="text-white text-sm font-semibold mb-1">Community</h4>
<a href="#" className="block text-black text-sm hover:text-red-500 transition-colors">
  Discord
</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">Twitter</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">Reddit</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">Twitch</a>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-white text-sm font-semibold mb-1">Company</h4>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">About</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">Jobs</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">Press</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">News</a>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-white text-sm font-semibold mb-1">Resources</h4>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">Help</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">Safety</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">Terms</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">Privacy</a>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-white text-sm font-semibold mb-1">Developers</h4>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">Documentation</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">API</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">SDKs</a>
                <a href="#" className="block text-black text-sm hover:text-primary transition-colors">Tools</a>
              </div>
            </div>
            
             
          </div>
          <div className="ml-8">
              <div className="text-9xl opacity-100 mt-40 transform -rotate-12 hover:opacity-50 hover:-rotate-6 hover:scale-105 transition-all cursor-pointer">
  🎮
</div>

            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer