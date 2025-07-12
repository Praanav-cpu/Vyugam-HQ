import React, { useRef, useState, useEffect } from "react";
import { fetchWithAuth } from "../utils/fetchWithAuth";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, aboutRes, eduRes, expRes, socialRes] = await Promise.all([
          fetchWithAuth("https://vyugamhq-backend.onrender.com/api/profile/"),
          fetchWithAuth("https://vyugamhq-backend.onrender.com/api/profile/about/"),
          fetchWithAuth("https://vyugamhq-backend.onrender.com/api/profile/education/"),
          fetchWithAuth("https://vyugamhq-backend.onrender.com/api/profile/experience/"),
          fetchWithAuth("https://vyugamhq-backend.onrender.com/api/profile/socials/"),
        ]);

        const resolveImageUrl = (url) => {
          if (!url) return "";
          return url.startsWith("http") ? url : `https://vyugamhq-backend.onrender.com${url}`;
        };

        if (userRes.ok) {
          const user = await userRes.json();
          setFormData((prev) => ({
            ...prev,
            first_name: user.name?.split(" ")[0] || "",
            last_name: user.name?.split(" ")[1] || "",
          }));
        }

        if (aboutRes.ok) {
          const about = await aboutRes.json();
          setFormData((prev) => ({
            ...prev,
            phone: about.phone,
            gender: about.gender,
            city: about.city,
            state: about.state,
            bio: about.bio,
            about: about.about,
            profile_pic: null,
          }));
          setPreviewPic(resolveImageUrl(about.profile_pic));
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
  }, []);


  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      if (file) {
        setFormData((prev) => ({ ...prev, profile_pic: file }));
        setPreviewPic(URL.createObjectURL(file));
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
        fetchWithAuth("https://vyugamhq-backend.onrender.com/api/profile/about/", {
          method: "PUT",
          body: aboutForm,
        }),
        fetchWithAuth("https://vyugamhq-backend.onrender.com/api/profile/education/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            degree: formData.noEducation ? "" : formData.degree,
            institute: formData.noEducation ? "" : formData.institute,
          }),
        }),
        fetchWithAuth("https://vyugamhq-backend.onrender.com/api/profile/experience/", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            gaming_experience: formData.gaming_experience,
          }),
        }),
        fetchWithAuth("https://vyugamhq-backend.onrender.com/api/profile/socials/", {
          method: "PUT",
          headers: {
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
            toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="min-h-screen bg-white text-black pt-[100px] px-4 pb-20">
        {/* Static Tab-style Header */}
        <div className="max-w-6xl mx-auto flex items-center justify-between mb-6">
          <div className="flex space-x-4 overflow-x-auto">
            {["About", "Education", "Experience", "Socials"].map((tab, index) => (
              <button
                key={index}
                className="px-4 py-2 rounded-md font-medium border bg-red-500 text-white"
              >
                {tab}
              </button>
            ))}
          </div>
          <button
            onClick={saveChanges}
            className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Side */}
          <div className="col-span-2 space-y-6">
            {/* About Section */}
            <div className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
              <h3 className="text-lg font-semibold mb-2">About</h3>
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

            {/* Education Section */}
            <div className="bg-white border rounded-lg shadow-sm p-6 space-y-4">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              <label className="flex items-center justify-between text-sm font-medium">
                Degree
                <span>
                  No Formal Education
                  <input type="checkbox" name="noEducation" checked={formData.noEducation} onChange={handleChange} className="ml-2" />
                </span>
              </label>
              {!formData.noEducation && (
                <>
                  <input name="degree" value={formData.degree} onChange={handleChange} placeholder="Degree" className="border px-4 py-2 rounded-md w-full" />
                  <input name="institute" value={formData.institute} onChange={handleChange} placeholder="Institute" className="border px-4 py-2 rounded-md w-full" />
                </>
              )}
            </div>

            {/* Experience Section */}
            <div className="bg-white border rounded-lg shadow-sm p-6 space-y-3">
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              {gamingOptions.map((opt) => (
                <label key={opt.value} className="flex items-center gap-2 text-sm">
                  <input type="radio" name="gaming_experience" value={opt.value} checked={formData.gaming_experience === opt.value} onChange={handleChange} />
                  {opt.label}
                </label>
              ))}
            </div>

            {/* Socials Section */}
            <div className="bg-white border rounded-lg shadow-sm p-6 space-y-3">
              <h3 className="text-lg font-semibold mb-2">Socials</h3>
              <input name="instagram" placeholder="Instagram" value={formData.instagram} onChange={handleChange} className="border px-4 py-2 rounded-md w-full" />
              <input name="discord" placeholder="Discord" value={formData.discord} onChange={handleChange} className="border px-4 py-2 rounded-md w-full" />
              <input name="x_url" placeholder="X / Twitter" value={formData.x_url} onChange={handleChange} className="border px-4 py-2 rounded-md w-full" />
            </div>
          </div>

          {/* Right Side - Avatar & About Me */}
          <div className="space-y-6">
            <div className="bg-white border rounded-lg shadow-sm p-6 text-center">
              <div className="mx-auto w-28 h-28 rounded-full overflow-hidden border border-gray-300 mb-4">
                <img
                  src={previewPic || "https://via.placeholder.com/150"}
                  alt="Profile Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <input type="file" name="profile_pic" ref={fileInputRef} accept="image/*" onChange={handleChange} className="hidden" />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="bg-gray-100 font-semibold text-sm px-4 py-2 rounded-full hover:bg-gray-200 transition"
              >
                Upload
              </button>
            </div>

            <div className="bg-white border rounded-lg shadow-sm p-6">
              <label className="text-sm font-medium mb-1 block">About Me</label>
              <textarea name="about" rows={5} className="w-full border border-gray-300 rounded-md px-3 py-2" value={formData.about} onChange={handleChange} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
