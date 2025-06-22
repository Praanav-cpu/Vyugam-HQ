import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Header() {
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()

  const handleSearch = (e) => {
    e.preventDefault()
    console.log('Searching for:', searchQuery)
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/98 backdrop-blur-sm border-b border-gray-200 z-50 h-[70px]">
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="no-underline">
              <div className="bg-primary text-white w-8 h-8 rounded-md flex items-center justify-center font-bold text-base">
                V
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex gap-10">
            <Link 
              to="/" 
              className={`text-gray-600 no-underline font-medium text-sm py-2 relative transition-colors hover:text-gray-900 ${
                location.pathname === '/' ? 'text-gray-900 after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:h-0.5 after:bg-primary' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              to="/blog" 
              className={`text-gray-600 no-underline font-medium text-sm py-2 relative transition-colors hover:text-gray-900 ${
                location.pathname === '/blog' ? 'text-gray-900 after:absolute after:bottom-[-10px] after:left-0 after:right-0 after:h-0.5 after:bg-primary' : ''
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Search and Profile */}
          <div className="flex items-center gap-6">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search tournaments, or use the global command"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[400px] px-4 py-2.5 pr-16 border border-gray-200 rounded-md text-sm bg-gray-50 transition-all focus:outline-none focus:border-primary focus:bg-white focus:ring-3 focus:ring-primary/10"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs font-medium">Ctrl</span>
                <span className="bg-gray-200 text-gray-600 px-2 py-0.5 rounded text-xs font-medium">K</span>
              </div>
            </form>

            <Link to="/profile" className="flex items-center gap-2 no-underline text-gray-900 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors">
              <div className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center text-sm">
                👤
              </div>
              <span className="font-medium text-sm">worldtricks</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header