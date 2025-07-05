import React, { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaDiscord,
  FaInstagram,
  FaTwitter,
  FaShareAlt,
  FaEdit,
} from "react-icons/fa";
import { Shield, MapPin } from "lucide-react";

// GameTag Component
const GameTag = ({ name, variant = "outline" }) => {
  const baseClasses =
    "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105";
  const variants = {
    outline:
      "border border-gray-300 text-gray-700 hover:border-orange-400 hover:text-orange-600 bg-white",
    primary: "bg-black text-white hover:bg-gray-800",
  };
  return (
    <span className={`${baseClasses} ${variants[variant]} cursor-pointer`}>
      {name}
    </span>
  );
};

// StatCard Component
const StatCard = ({ number, label }) => (
  <div className="bg-white rounded-xl p-6 transition hover:scale-105 shadow cursor-pointer">
    <div className="text-center">
      <div className="text-5xl font-extrabold text-gray-900 mb-2">{number}</div>
      <div className="text-xl font-semibold text-gray-800">{label}</div>
    </div>
  </div>
);

// StatsGrid Component
const StatsGrid = () => {
  const stats = [
    { number: "7", label: "Winner" },
    { number: "5", label: "Tournament" },
    { number: "7", label: "Organized" },
  ];
  return (
    <div className="space-y-6">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  );
};

// ProfileCard Component
const ProfileCard = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);
  const [bannerImage, setBannerImage] = useState(
    "https://images.unsplash.com/photo-1606760227099-5cc6dc9a6e1a?auto=compress&cs=tinysrgb&w=800"
  );

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const url = username
          ? `https://vyugamhq-backend.onrender.com/api/profile/${username}/`
          : `https://vyugamhq-backend.onrender.com/api/profile/`;

        const headers = username
          ? {}
          : { Authorization: `Bearer ${token}` };

        const res = await fetch(url, { headers });

        if (res.status === 401) {
          setError("You must be logged in to view this profile.");
          return;
        }

        if (!res.ok) throw new Error("Profile not found");

        const data = await res.json();
        setProfile(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProfile();
  }, [username]);

  const triggerBannerUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleBannerChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBannerImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (error) return <div className="text-red-600">{error}</div>;
  if (!profile) return <div>Loading...</div>;

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
        {/* Banner */}
        <div
          className="relative h-40 bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          {/* Edit banner only if it's own profile */}
          {!username && (
            <>
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
            </>
          )}

          {/* Avatar */}
          <div className="absolute bottom-[-40px] left-6 z-10">
            <div className="relative">
              <div className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200">
                <img
                  src={`https://vyugamhq-backend.onrender.com/${profile.profile_pic}`}
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
          <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900 mb-0.5">
                {profile.name}
              </h1>
              <p className="text-gray-600 text-sm">@{profile.username}</p>
            </div>

            <div className="flex mt-2 sm:mt-0 space-x-2 flex-wrap">
              {profile.socials?.discord && (
                <a
                  href={profile.socials.discord}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 shadow hover:bg-gray-200 transition"
                >
                  <FaDiscord size={16} />
                </a>
              )}
              {profile.socials?.instagram && (
                <a
                  href={profile.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 shadow hover:bg-gray-200 transition"
                >
                  <FaInstagram size={16} />
                </a>
              )}
              {profile.socials?.x && (
                <a
                  href={profile.socials.x}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 shadow hover:bg-gray-200 transition"
                >
                  <FaTwitter size={16} />
                </a>
              )}
              <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-gray-800 shadow hover:bg-gray-200 transition">
                <FaShareAlt size={16} />
              </div>

              {!username && (
                <button
                  onClick={() => navigate("/edit-profile")}
                  className="flex items-center space-x-1 bg-gray-100 text-gray-800 px-3 py-1.5 rounded-lg hover:bg-gray-200 transition-all duration-200 border border-gray-300 text-xs shadow"
                >
                  <FaEdit size={12} />
                  <span>Edit Profile</span>
                </button>
              )}
            </div>
          </div>

          {profile.bio && (
            <div className="flex items-center space-x-2 mb-2 text-gray-700 text-sm font-medium">
              <Shield className="w-4 h-4 text-orange-500" />
              <span>{profile.bio}</span>
            </div>
          )}

          {(profile.city || profile.state) && (
            <div className="flex items-center space-x-2 mb-4 text-gray-600 text-sm">
              <MapPin className="w-4 h-4" />
              <span>{profile.city}, {profile.state}</span>
            </div>
          )}

          {/* Game Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <GameTag name="BGMI" />
            <GameTag name="FIFA" />
            <GameTag name="Valorant" />
            {!username && <GameTag name="+" variant="primary" />}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gray-50 rounded-lg shadow-2xl p-4 mt-4">
        <h2 className="text-base font-bold text-gray-900 mb-3">About</h2>
        <div className="text-gray-700 text-sm">{profile.about}</div>
      </div>
    </>
  );
};

// Main Profile Layout
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
