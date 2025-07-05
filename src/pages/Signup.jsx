import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import VyugamLogo from  "../assets/vyugamHQ.png";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const navigate = useNavigate();
  const { setUser } = useAuth();
  const location = useLocation();
  const verifiedEmail = location.state?.email || "";

  const [formData, setFormData] = useState({
    email: verifiedEmail,
    firstName: "",
    lastName: "",
    vyugamhq_username: "",
    password: "",
    password2: "",
    receiveUpdates: true,
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!verifiedEmail) {
      navigate("/signup"); // or wherever your EmailVerification page is
    }
  }, [verifiedEmail]);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://vyugamhq-backend.onrender.com/api/user/completeregistration/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          first_name: formData.firstName,
          last_name: formData.lastName,
          vyugamhq_username: formData.vyugamhq_username,
          password: formData.password,
          password2: formData.password2,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser({ username: formData.vyugamhq_username });
        navigate("/");
      } else {
        setError(data?.detail || "Registration failed. Check inputs.");
      }
    } catch (err) {
      setError("Server error during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-[100px] bg-white">
      <img src={VyugamLogo} alt="Vyugam Logo" className="w-40 mb-6" />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-lg p-8 space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold mb-1">First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Last Name</label>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">VyugamHQ Username</label>
          <input type="text" name="vyugamhq_username" value={formData.vyugamhq_username} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Set a password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Confirm password</label>
          <input type="password" name="password2" value={formData.password2} onChange={handleChange} required className="w-full border border-gray-300 rounded-md px-3 py-2" />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex items-start">
          <input type="checkbox" name="receiveUpdates" checked={formData.receiveUpdates} onChange={handleChange} className="mr-2 mt-1" />
          <span className="text-sm">
            I want to receive email updates for the upcoming tournaments
          </span>
        </div>

        <button type="submit" disabled={loading} className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition">
          {loading ? "Registering..." : "Save"}
        </button>

        <p className="text-center text-xs text-gray-500 mt-2">
          By continuing, you agree to the{" "}
          <a href="#" className="text-blue-600 underline">Terms of Use</a> and{" "}
          <a href="#" className="text-red-500 underline">Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
};

export default Signup;
