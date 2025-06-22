import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header' // ✅ Navbar Component
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Profile from './pages/Profile'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 pt-[70px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
