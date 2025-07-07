import React, { useRef, useState, useEffect } from "react";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    gender: "",
    city: "",
    state: "",
    bio: "",
    about: "",
    profile_pic: null,
    degree: "",
    institute: "",
    noEducation: false,
    gaming_experience: "",
    instagram: "",
    discord: "",
    x_url: "",
  });

  const [previewPic, setPreviewPic] = useState("");
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ message: "", type: "" });

  const fileInputRef = useRef(null);
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const [aboutRes, eduRes, expRes, socialRes] = await Promise.all([
          fetch("https://vyugamhq-backend.onrender.com/api/profile/about/", { headers }),
          fetch("https://vyugamhq-backend.onrender.com/api/profile/education/", { headers }),
          fetch("https://vyugamhq-backend.onrender.com/api/profile/experience/", { headers }),
          fetch("https://vyugamhq-backend.onrender.com/api/profile/socials/", { headers }),
        ]);

        if (aboutRes.ok) {
          const about = await aboutRes.json();
          setFormData((prev) => ({
            ...prev,
            ...about,
            profile_pic: null,
          }));
          setPreviewPic(about.profile_pic); // Direct URL
        }

        if (eduRes.ok) {
          const edu = await eduRes.json();
          setFormData((prev) => ({
            ...prev,
            degree: edu.degree,
            institute: edu.institute,
            noEducation: !edu.degree && !edu.institute,
          }));
        }

        if (expRes.ok) {
          const exp = await expRes.json();
          setFormData((prev) => ({
            ...prev,
            gaming_experience: exp.gaming_experience,
          }));
        }

        if (socialRes.ok) {
          const socials = await socialRes.json();
          setFormData((prev) => ({
            ...prev,
            instagram: socials.instagram,
            discord: socials.discord,
            x_url: socials.x_url,
          }));
        }
      } catch (err) {
        console.error("Fetch error:", err);
        showToast("Failed to load profile", "error");
      }
    };

    fetchData();
  }, [token]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        setFormData((prev) => ({ ...prev, profile_pic: file }));
        setPreviewPic(URL.createObjectURL(file)); // Live preview
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  const saveChanges = async () => {
    try {
      setLoading(true);
      const authHeader = { Authorization: `Bearer ${token}` };

      const aboutForm = new FormData();
      Object.entries({
        first_name: formData.first_name,
        last_name: formData.last_name,
        phone: formData.phone,
        gender: formData.gender,
        city: formData.city,
        state: formData.state,
        bio: formData.bio,
        about: formData.about,
      }).forEach(([key, val]) => aboutForm.append(key, val));

      if (formData.profile_pic) {
        aboutForm.append("profile_pic", formData.profile_pic);
      }

      await Promise.all([
        fetch("https://vyugamhq-backend.onrender.com/api/profile/about/", {
          method: "PUT",
          headers: authHeader,
          body: aboutForm,
        }),
        fetch("https://vyugamhq-backend.onrender.com/api/profile/education/", {
          method: "PUT",
          headers: {
            ...authHeader,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            degree: formData.noEducation ? "" : formData.degree,
            institute: formData.noEducation ? "" : formData.institute,
          }),
        }),
        fetch("https://vyugamhq-backend.onrender.com/api/profile/experience/", {
          method: "PUT",
          headers: {
            ...authHeader,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gaming_experience: formData.gaming_experience,
          }),
        }),
        fetch("https://vyugamhq-backend.onrender.com/api/profile/socials/", {
          method: "PUT",
          headers: {
            ...authHeader,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            instagram: formData.instagram,
            discord: formData.discord,
            x_url: formData.x_url,
          }),
        }),
      ]);

      showToast("✅ Profile updated successfully!", "success");
    } catch (err) {
      console.error("Update error:", err);
      showToast("❌ Update failed!", "error");
    } finally {
      setLoading(false);
    }
  };

  const gamingOptions = [
    { value: "<1", label: "Less than a year" },
    { value: "1-3", label: "1 - 3 years" },
    { value: "4-10", label: "4 - 10 years" },
    { value: "10+", label: "10+ years (Veteran)" },
  ];

  return (
    <>
      {toast.message && (
        <div
          className={`fixed top-6 right-6 z-50 px-4 py-2 rounded-md font-medium shadow-lg transition-all duration-300 ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="min-h-screen bg-white text-black pt-[100px] px-4 pb-20">
        <div className="max-w-6xl mx-auto flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Edit Profile</h2>
          <button
            onClick={saveChanges}
            className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left */}
          <div className="col-span-2 space-y-6">
            <div className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="first_name" value={formData.first_name} onChange={handleChange} placeholder="First Name" className="border px-4 py-2 rounded-md" />
                <input name="last_name" value={formData.last_name} onChange={handleChange} placeholder="Last Name" className="border px-4 py-2 rounded-md" />
                <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="col-span-2 border px-4 py-2 rounded-md" />
                <select name="gender" value={formData.gender} onChange={handleChange} className="border px-4 py-2 rounded-md">
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
                <input name="city" value={formData.city} onChange={handleChange} placeholder="City" className="border px-4 py-2 rounded-md" />
                <input name="state" value={formData.state} onChange={handleChange} placeholder="State" className="border px-4 py-2 rounded-md" />
                <textarea name="bio" value={formData.bio} onChange={handleChange} placeholder="Short Bio (Gaming title, etc.)" rows={2} className="col-span-2 border px-4 py-2 rounded-md" />
              </div>
            </div>

            {/* Education */}
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <label className="flex items-center justify-between mb-2 font-medium text-sm">
                Degree
                <span>
                  No Formal Education
                  <input
                    type="checkbox"
                    name="noEducation"
                    checked={formData.noEducation}
                    onChange={handleChange}
                    className="ml-2"
                  />
                </span>
              </label>
              {!formData.noEducation && (
                <>
                  <input
                    name="degree"
                    value={formData.degree}
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-md mb-2 w-full"
                    placeholder="Degree"
                  />
                  <input
                    name="institute"
                    value={formData.institute}
                    onChange={handleChange}
                    className="border px-4 py-2 rounded-md w-full"
                    placeholder="Institute"
                  />
                </>
              )}
            </div>

            {/* Gaming Experience */}
            <div className="bg-white border rounded-lg shadow-sm p-6">
              <label className="block mb-2 font-medium text-sm">Gaming Experience</label>
              {gamingOptions.map((opt, i) => (
                <label key={i} className="flex items-center mb-1 text-sm">
                  <input
                    type="radio"
                    name="gaming_experience"
                    value={opt.value}
                    checked={formData.gaming_experience === opt.value}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  {opt.label}
                </label>
              ))}
            </div>

            {/* Socials */}
            <div className="bg-white border rounded-lg shadow-sm p-6 space-y-3">
              <input name="instagram" placeholder="Instagram" value={formData.instagram} onChange={handleChange} className="border px-4 py-2 rounded-md w-full" />
              <input name="discord" placeholder="Discord" value={formData.discord} onChange={handleChange} className="border px-4 py-2 rounded-md w-full" />
              <input name="x_url" placeholder="X / Twitter" value={formData.x_url} onChange={handleChange} className="border px-4 py-2 rounded-md w-full" />
            </div>
          </div>

          {/* Right */}
          <div className="space-y-6">
            <div className="bg-white border rounded-lg shadow-sm p-6 text-center">
              <div className="mx-auto w-28 h-28 rounded-full border overflow-hidden mb-4">
                <img
                  src={
                    previewPic ||
                    "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
                  }
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <input
                type="file"
                name="profile_pic"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleChange}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-gray-100 font-semibold text-sm px-4 py-2 rounded-full hover:bg-gray-200 transition"
              >
                Upload
              </button>
            </div>

            <div className="bg-white border rounded-lg shadow-sm p-6">
              <label className="text-sm font-medium mb-1 block">About Me</label>
              <textarea
                name="about"
                rows={5}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                value={formData.about}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
