import React, { useRef, useState } from 'react';
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaShareAlt,
  FaEdit,
} from 'react-icons/fa';
import { Shield, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const GameTag = ({ name, variant = 'outline' }) => {
  const baseClasses =
    'px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105';
  const variants = {
    outline:
      'border border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-600 bg-white',
    primary: 'bg-black text-white hover:bg-gray-800',
  };
  return (
    <span className={`${baseClasses} ${variants[variant]} cursor-pointer`}>
      {name}
    </span>
  );
};

const StatCard = ({ number, label, bgColor, textColor }) => (
  <div
    className={`${bgColor} rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer`}
  >
    <div className="text-center">
      <div className={`text-5xl font-extrabold ${textColor} mb-2`}>
        {number}
      </div>
      <div className={`text-xl font-semibold ${textColor} opacity-90`}>
        {label}
      </div>
    </div>
  </div>
);

const StatsGrid = () => {
  const stats = [
    { number: '7', label: 'Winner', bgColor: 'bg-white', textColor: 'text-gray-900' },
    { number: '5', label: 'Tournament', bgColor: 'bg-white', textColor: 'text-gray-900' },
    { number: '7', label: 'Organized', bgColor: 'bg-white', textColor: 'text-gray-900' },
  ];

  return (
    <div className="space-y-6">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  );
};

// ProfileCard with editable banner
const ProfileCard = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [bannerImage, setBannerImage] = useState(
    'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400'
  );

  const handleBannerChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerBannerUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
        {/* Banner */}
        <div
          className="relative h-40 bg-cover bg-center"
          style={{
            backgroundImage: `url(${bannerImage})`,
          }}
        >
          {/* Edit banner button */}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleBannerChange}
            className="hidden"
          />

          <button
            onClick={triggerBannerUpload}
            className="absolute top-2 right-2 bg-white/80 p-2 rounded-full shadow hover:bg-white transition"
          >
            <FaEdit className="text-gray-700" size={16} />
          </button>

          {/* Avatar */}
          <div className="absolute bottom-[-40px] left-6 z-10">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="pt-20 pb-6 px-6">
          {/* Name & Socials */}
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 mb-0.5">Ayush Thakre</h1>
              <p className="text-gray-600 text-sm">@Ayush.Thakre</p>
            </div>
            <div className="flex mt-2 sm:mt-0 space-x-2">
              <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 shadow hover:bg-gray-200 transition">
                <FaDiscord size={16} />
              </div>
              <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 shadow hover:bg-gray-200 transition">
                <FaInstagram size={16} />
              </div>
              <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 shadow hover:bg-gray-200 transition">
                <FaTwitter size={16} />
              </div>
              <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 shadow hover:bg-gray-200 transition">
                <FaShareAlt size={16} />
              </div>
              <button
                onClick={() => navigate('/edit-profile')}
                className="flex items-center space-x-1 bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-200 transition-all duration-200 border border-gray-300 text-xs shadow"
              >
                <FaEdit size={12} />
                <span>Edit Profile</span>
              </button>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center space-x-2 mb-2">
            <Shield className="w-4 h-4 text-orange-500" />
            <span className="text-gray-700 text-sm font-medium">
              Passionate Gamer Diamond IV X BGMI
            </span>
          </div>

          {/* Location */}
          <div className="flex items-center space-x-2 mb-4">
            <MapPin className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 text-sm">
              Nagpur, Maha Rashtra, India
            </span>
          </div>

          {/* Game Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <GameTag name="Valorant" />
            <GameTag name="BGMI" />
            <GameTag name="FIFA" />
            <GameTag name="+" variant="primary" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 rounded-lg shadow-2xl p-4 mt-4">
        <h2 className="text-base font-bold text-gray-900 mb-3">About</h2>
        <div className="space-y-2 text-gray-700 text-sm">
          <div className="flex items-start space-x-2">
            <span>🎮</span>
            <span>BGMI Warrior | Clutch Master | Squad Leader</span>
          </div>
          <div className="flex items-start space-x-2">
            <span>🔥</span>
            <span>
              Passionate gamer with sharp reflexes and a love for intense
              last-zone battles.
            </span>
          </div>
          <div className="flex items-start space-x-2">
            <span>⚡</span>
            <span>Always ready to drop into Erangel & dominate!</span>
          </div>
          <div className="flex items-start space-x-2">
            <span>⭐</span>
            <span>Let's squad up and push the limits together!</span>
          </div>
        </div>
      </div>
    </>
  );
};

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <ProfileCard />
          </div>
          <div className="lg:col-span-1">
            <StatsGrid />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;