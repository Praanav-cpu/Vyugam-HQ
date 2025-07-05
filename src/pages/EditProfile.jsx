import React, { useRef, useState } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    gender: "",
    city: "",
    state: "",
    bio: "",           // short status, under name
    about: "",         // full about section under image
    degree: "",
    institute: "",
    noEducation: false,
    gamingExp: "",
    instagram: "",
    discord: "",
    twitter: "",
    profileImage: "",
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, profileImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const saveChanges = () => {
    console.log("Saved form data:", formData);
    // Add your API integration logic here
  };

  const gamingOptions = [
    "Less than a year",
    "1 - 3 years",
    "4 - 10 years",
    "10+ years (Veteran)",
  ];

  const aboutRef = useRef(null);
  const educationRef = useRef(null);
  const experienceRef = useRef(null);
  const socialsRef = useRef(null);

  const handleScrollTo = (ref) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-black pt-[100px] px-4 pb-20">
      {/* Tabs */}
      <div className="max-w-6xl mx-auto flex items-center justify-between mb-6">
        <div className="flex space-x-4 overflow-x-auto">
          {[
            { label: "About", ref: aboutRef },
            { label: "Education", ref: educationRef },
            { label: "Experience", ref: experienceRef },
            { label: "Socials", ref: socialsRef },
          ].map(({ label, ref }) => (
            <button
              key={label}
              onClick={() => handleScrollTo(ref)}
              className="px-4 py-2 rounded-md font-medium border bg-gray-100 text-gray-700 hover:bg-gray-200 transition"
            >
              {label}
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

      {/* Page Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left (Main Content) */}
        <div className="col-span-2 space-y-6">
          {/* ABOUT */}
          <div
            ref={aboutRef}
            className="scroll-mt-28 bg-white border rounded-lg shadow-sm p-6 space-y-4"
          >
            <h2 className="text-lg font-bold text-red-600 mb-3">Basic Info</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="phone"
                className="col-span-2 border border-gray-300 px-4 py-2 rounded-md"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <select
                name="gender"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              <input
                type="text"
                name="city"
                placeholder="City"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
                value={formData.city}
                onChange={handleChange}
              />
              <input
                type="text"
                name="state"
                placeholder="State"
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
                value={formData.state}
                onChange={handleChange}
              />
            </div>

            {/* Keep bio under this section */}
            <div>
              <label className="text-sm font-medium text-gray-700">Bio </label>
              <textarea
                name="bio"
                rows={3}
                placeholder="Short intro or gaming title i.e. Diamond IV BGMI"
                className="w-full border border-gray-300 px-3 py-2 mt-1 rounded-md"
                value={formData.bio}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* EDUCATION */}
          <div
            ref={educationRef}
            className="scroll-mt-28 bg-white border rounded-lg shadow-sm p-6 space-y-4"
          >
            <h2 className="text-lg font-bold text-red-600 mb-3">Education</h2>
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium">Degree</label>
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
                  placeholder="Degree"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                  value={formData.degree}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="institute"
                  placeholder="Institution"
                  className="w-full border border-gray-300 px-3 py-2 rounded"
                  value={formData.institute}
                  onChange={handleChange}
                />
              </>
            )}
          </div>

          {/* EXPERIENCE */}
          <div
            ref={experienceRef}
            className="scroll-mt-28 bg-white border rounded-lg shadow-sm p-6 space-y-4"
          >
            <h2 className="text-lg font-bold text-red-600 mb-3">Experience</h2>
            <label className="text-sm font-medium">Gaming Experience</label>
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

          {/* SOCIALS */}
          <div
            ref={socialsRef}
            className="scroll-mt-28 bg-white border rounded-lg shadow-sm p-6 space-y-4"
          >
            <h2 className="text-lg font-bold text-red-600 mb-3">Social Links</h2>
            <input
              name="instagram"
              placeholder="Instagram"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.instagram}
              onChange={handleChange}
            />
            <input
              name="discord"
              placeholder="Discord"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.discord}
              onChange={handleChange}
            />
            <input
              name="twitter"
              placeholder="X / Twitter"
              className="w-full border border-gray-300 rounded px-3 py-2"
              value={formData.twitter}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Right Panel - Avatar + About Me */}
        <div className="space-y-6">
          <div className="bg-white border rounded-lg shadow-sm p-6 text-center">
            <div className="mx-auto w-28 h-28 rounded-full border overflow-hidden mb-4">
              <img
                src={
                  formData.profileImage ||
                  "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                }
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <button
              onClick={triggerFileSelect}
              className="bg-gray-100 font-semibold text-sm px-4 py-2 rounded-full hover:bg-gray-200 transition"
            >
              Upload
            </button>
          </div>

          {/* About Me Section */}
          <div className="bg-white border rounded-lg shadow-sm p-4">
            <label className="text-sm font-semibold">About Me</label>
            <textarea
              name="about"
              rows={5}
              className="w-full border border-gray-300 mt-2 px-3 py-2 rounded-md"
              value={formData.about}
              onChange={handleChange}
              placeholder="Tell us more about your skills, gaming highlights, passions..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;