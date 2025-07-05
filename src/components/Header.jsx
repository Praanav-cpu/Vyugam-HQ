import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Bell } from "lucide-react";
import { FaUserCircle } from "react-icons/fa";
import VyugamLogo from "../assets/Vyugam.png";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const [activeTab, setActiveTab] = useState("tournament");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useAuth();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    navigate(tab === "tournament" ? "/" : "/blog");
  };

  const handleLogout = () => {
    setUser(null);
    setDropdownOpen(false);
    navigate("/");
  };

  const handleSignupRedirect = () => {
    navigate("/verify");
  };

  // 🛑 Hide tabs + search bar on these routes
  const hideTabsAndSearch = ["/signin", "/signup", "/verify", "/profile", "/edit-profile"];

  return (
    <>
      {/* ✅ FIXED TOP NAV */}
      <div className="z-50 fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200">
        <div className="flex justify-between items-center px-8 py-4 max-w-[1440px] mx-auto">
          {/* LEFT: Logo & Nav */}
          <div className="flex items-center gap-10">
            <img src={VyugamLogo} alt="Vyugam Logo" className="w-10 h-10" />
            <nav className="hidden md:flex gap-6 text-base font-medium">
              <Link to="/" className="text-gray-600 hover:text-red-600 transition">
                Home
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-red-600 transition">
                Blog
              </Link>
              <Link to="/profile" className="text-gray-600 hover:text-red-600 transition">
                Profile
              </Link>
            </nav>
          </div>

          {/* RIGHT: User Controls */}
          <div className="flex items-center gap-4 text-gray-600 relative">
            <Bell className="w-5 h-5 cursor-pointer hover:text-red-500 transition" />

            {user ? (
              <div className="flex items-center gap-2 relative">
                <span className="text-sm font-semibold">{user.username}</span>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="text-xl hover:text-red-500 transition"
                >
                  <FaUserCircle />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-36 bg-white border border-gray-200 rounded shadow-md z-50">
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/signin" className="text-sm font-semibold hover:text-red-500 transition">
                  Sign In
                </Link>
                <button
                  onClick={handleSignupRedirect}
                  className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-md hover:bg-red-200 transition"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* 🛑 REMOVE TABS + SEARCH on certain pages */}
      {!hideTabsAndSearch.includes(location.pathname) && (
        <div className="pt-[106px] bg-white">
          {/* Tabs */}
          <div className="flex justify-center py-4 bg-gray-50 border-b border-gray-200 px-6">
            <div className="inline-flex bg-white border rounded-2xl shadow-inner p-1">
              {["tournament", "gamers"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-6 py-2 text-sm font-bold tracking-wide rounded-xl transition-all ${
                    activeTab === tab
                      ? "bg-red-100 text-red-700 shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {tab.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Search */}
          <div className="flex flex-col md:flex-row md:justify-center items-center flex-wrap gap-4 px-8 py-6 bg-white border-b border-gray-200">
            <div className="flex w-full max-w-xl items-center justify-between px-4 py-2 rounded-xl bg-gray-100 shadow-inner">
              <div className="flex items-center flex-grow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search your tournament"
                  className="w-full bg-transparent outline-none text-sm placeholder:text-gray-500"
                />
              </div>
              <span className="text-[12px] font-medium text-gray-500 border border-gray-300 rounded px-2 py-0.5 ml-3">
                Enter
              </span>
            </div>

            <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-xl text-sm font-medium text-gray-800 shadow-sm transition">
              Your Tournament
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;