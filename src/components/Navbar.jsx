import React from 'react';
import { Bell } from 'lucide-react'; // Bell icon

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 bg-gray-900 text-white shadow-md">
      {/* Left: Logo */}
      <div className="text-2xl font-bold">
        🚀 MyLogo
      </div>

      {/* Center: Links */}
      <div className="hidden md:flex space-x-6 text-lg">
        <a href="#" className="hover:text-red-500 transition-colors">Home</a>
        <a href="#" className="hover:text-red-500 transition-colors">Blog</a>
      </div>

      {/* Right: Profile (transparent emoji) */}
      <div className="flex items-center space-x-3">
        <span className="text-2xl leading-none">😊</span> {/* transparent emoji */}
        <span className="text-sm font-medium">Username</span>
        <Bell className="w-5 h-5 hover:text-red-500 transition-colors cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
