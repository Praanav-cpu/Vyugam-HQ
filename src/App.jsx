import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import EmailVerification from "./pages/EmailVerification";
import ResetPassword from "./pages/ResetPassword";
import TournamentListPage from "./components/TournamentListPage";
import EditProfile from "./pages/EditProfile";

import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

function AppContent() {
  const location = useLocation();
  const authRoutes = ["/signup", "/signin", "/verify", "/reset-password"];
  const isAuthPage = authRoutes.includes(location.pathname.toLowerCase());

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuthPage && <Header />}

      <main className="flex-1">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verify" element={<EmailVerification />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/:username" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/tournaments" element={<TournamentListPage />} />
        </Routes>
      </main>

      {!isAuthPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
        <AppContent />
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
