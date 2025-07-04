import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Profile from './pages/Profile'
import TournamentListPage from './components/TournamentListPage'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import EmailVerification from './pages/EmailVerification'
import ResetPassword from './pages/ResetPassword'

function AppLayout() {
  const location = useLocation();
  const isAuthPage = ["/signup", "/signIn", "/verify", "/reset-password"].includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Header />}
      <main className="flex-1">
        <Routes>
          {/* Auth Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verify" element={<EmailVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* Main App Pages */}
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
      <AppLayout />
    </Router>
  );
}

export default App;
