import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header' // ✅ Navbar Component
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Profile from './pages/Profile'
import TournamentListPage from './components/TournamentListPage'



function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Only show header/footer if not on signup/signin */}
      {!isAuthPage && <Header />}

      <main className="flex-1">
        <Routes>
          {/* 🔓 Public Auth Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/verify" element={<EmailVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          {/* <Route path="/signin" element={<Signin />} /> Add Signin later */}

          {/* 🏠 Main App Pages (NO ProtectedRoute for now) */}
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tournaments" element={<TournamentListPage />} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;