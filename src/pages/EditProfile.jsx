
import React, { useState } from 'react';


const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    gender: '',
    city: '',
    state: '',
    bio: '',
    degree: '',
    institute: '',
    noEducation: false,
    gamingExp: '',
    instagram: '',
    discord: '',
    twitter: '',
    profileImage: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const saveChanges = () => {
    console.log('Saved form data:', formData);
    // 💡 Hook up backend logic here (POST/PUT API)
  };

  const gamingOptions = [
    'Less than a year',
    '1 - 3 years',
    '4 - 10 years',
    '10+ years (Veteran)'
  ];

  return (
    <div className="min-h-screen bg-white text-black pt-[100px] px-4 pb-20">
      {/* Tabs and Save button */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-6">
        <div className="flex space-x-4 overflow-x-auto">
          {['About', 'Education', 'Experience', 'Socials'].map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-md font-medium border ${
                tab === 'About'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <button
          onClick={saveChanges}
          className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600"
        >
          Save
        </button>
      </div>

      {/* Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side Form */}
        <div className="col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-medium text-sm">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="w-full border border-gray-300 px-4 py-2 mt-1 rounded-md"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="font-medium text-sm">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="w-full border border-gray-300 px-4 py-2 mt-1 rounded-md"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
              {/* Phone */}
              <div className="col-span-2">
                <label className="font-medium text-sm">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border border-gray-300 px-4 py-2 mt-1 rounded-md"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              {/* Gender / City / State */}
              <div>
                <label className="font-medium text-sm">Gender</label>
                <select
                  name="gender"
                  className="w-full border border-gray-300 px-4 py-2 mt-1 rounded-md"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="font-medium text-sm">City</label>
                <input
                  type="text"
                  name="city"
                  className="w-full border border-gray-300 px-4 py-2 mt-1 rounded-md"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="font-medium text-sm">State</label>
                <input
                  type="text"
                  name="state"
                  className="w-full border border-gray-300 px-4 py-2 mt-1 rounded-md"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              {/* Bio Full Width */}
              <div className="col-span-3">
                <label className="font-medium text-sm">Bio</label>
                <textarea
                  name="bio"
                  className="w-full border border-gray-300 px-4 py-2 mt-1 rounded-md"
                  rows="3"
                  value={formData.bio}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-white border rounded-lg shadow-sm p-6 space-y-3">
            <div className="flex items-center justify-between">
              <label className="font-medium text-sm">Degree</label>
              <label className="flex items-center gap-2 text-sm">
                No Formal Education
                <input
                  type="checkbox"
                  name="noEducation"
                  checked={formData.noEducation}
                  onChange={handleChange}
                />
              </label>
            </div>
            {!formData.noEducation && (
              <>
                <input
                  type="text"
                  name="degree"
                  placeholder="Enter your degree"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={formData.degree}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="institute"
                  placeholder="Educational Institute"
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                  value={formData.institute}
                  onChange={handleChange}
                />
              </>
            )}
          </div>

          {/* Gaming Experience */}
          <div className="bg-white border rounded-lg shadow-sm p-6">
            <label className="font-medium text-sm mb-2 block">Gaming Experience</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {gamingOptions.map((option, i) => (
                <label key={i} className="flex items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="gamingExp"
                    value={option}
                    checked={formData.gamingExp === option}
                    onChange={handleChange}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Instagram URL</label>
              <input
                type="text"
                name="instagram"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
                value={formData.instagram}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm font-medium">Discord URL</label>
              <input
                type="text"
                name="discord"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
                value={formData.discord}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="text-sm font-medium">X (Twitter) URL</label>
              <input
                type="text"
                name="twitter"
                className="w-full border border-gray-300 px-3 py-2 rounded-md"
                value={formData.twitter}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Right Side - Avatar & Bio */}
        <div className="space-y-6">
          <div className="bg-white border rounded-lg shadow-sm p-6 text-center">
            <div className="mx-auto w-28 h-28 rounded-full overflow-hidden border border-gray-300 mb-4">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              className="bg-gray-100 font-semibold text-sm px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              Upload
            </button>
          </div>

          <div className="bg-white border rounded-lg shadow-sm p-6">
            <label className="text-sm font-medium mb-1 block">About</label>
            <textarea
              name="bio"
              rows="5"
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              value={formData.bio}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;