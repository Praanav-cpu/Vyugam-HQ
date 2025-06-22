import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell } from 'lucide-react';
import VyugamLogo from '../assets/Vyugam.png';

const Header = () => {
  const [activeTab, setActiveTab] = useState("tournament");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    if (tab === "tournament") navigate("/");
    else navigate("/Blog");
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white text-black border-b border-gray-400 z-50 px-6 py-4 flex items-center justify-between">
        {/* Left Side: Logo + Links */}
        <div className="flex items-center gap-10">
         <img src={VyugamLogo} alt="Vyugam Logo" className="w-8 h-8" />
          <div className="hidden md:flex gap-6 text-lg">
            <Link to="/" className= "text-gray-500 hover:text-red-500">Home</Link>
            <Link to="/blog" className="text-gray-500 hover:text-red-500">Blog</Link>
          </div>
        </div>

        {/* Right Side: Profile Info */}
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={1.5}
            stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0
              M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z
              M9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75
              9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z
              m5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75
              .168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
          </svg>
          <span className="text-sm font-medium">Username</span>
          <Bell className="w-5 h-5 cursor-pointer hover:text-red-500" />
        </div>
      </nav>

      {/* Toggle Buttons */}
      <div className="pt-24 flex justify-center">
        <div className="inline-flex bg-[#f2f2f2] p-1 rounded-xl shadow-inner">
          <button
            className={`px-5 py-2 rounded-xl text-black font-semibold text-sm transition-all ${
              activeTab === "tournament" ? "bg-[#d8baba] shadow-md" : ""
            }`}
            onClick={() => handleTabClick("tournament")}
          >
            TOURNAMENT
          </button>
          <button
            className={`px-5 py-2 rounded-xl text-black font-semibold text-sm transition-all ${
              activeTab === "gamers" ? "bg-[#d8baba] shadow-md" : ""
            }`}
            onClick={() => handleTabClick("gamers")}
          >
            GAMERS
          </button>
        </div>
      </div>

      {/* Search Bar */}
     <div className="mt-6 flex justify-center gap-4 px-4 pb-4 border-b border-gray-300">

        <div className="flex items-center bg-[#f2f2f2] rounded-xl px-3 py-2 w-full max-w-xl">
          {/* Search Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
          </svg>

          {/* Input */}
          <input
            type="text"
            placeholder="search your tournament"
            className="bg-transparent flex-grow text-sm outline-none placeholder:text-gray-500"
          />

          {/* Shortcut hint */}
          <div className="flex items-center gap-1 text-xs text-black font-medium bg-grey-700 px-2 py-0.5 rounded border border-gray-300">
            <span>enter</span>
             
          </div>
        </div>

        {/* Side button */}
        <button className="bg-[#f2f2f2] px-4 py-2 rounded-xl text-sm font-medium text-black">
          Your Tournament
        </button>
      </div>
    </>
  );
};

export default Header;
