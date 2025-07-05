import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin"; // ✅ lowercase route match
import EmailVerification from "./pages/EmailVerification";
import ResetPassword from "./pages/ResetPassword";
import TournamentListPage from "./components/TournamentListPage";

// Optional: Uncomment if ProtectedRoute is implemented
// import ProtectedRoute from "./utils/ProtectedRoute";

function AppContent() {
  const location = useLocation();

  // ✅ Hide Header/Footer on these auth-related pages
  const authRoutes = ["/signup", "/signin", "/verify", "/reset-password"];
  const isAuthPage = authRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Header />}

      <main className="flex-1">
        <Routes>
          {/* 🔓 Public Auth Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verify" element={<EmailVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* 🏠 Main App Pages (open now, can wrap with <ProtectedRoute> later) */}
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