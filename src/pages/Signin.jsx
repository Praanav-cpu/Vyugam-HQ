import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VyugamLogo from "../assets/vyugamHQ.png";
import { useAuth } from "../context/AuthContext";

const Signin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [resetEmail, setResetEmail] = useState("");
  const [showResetModal, setShowResetModal] = useState(false);
  const [error, setError] = useState("");
  const [resetError, setResetError] = useState("");
  const [resetSuccess, setResetSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
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
      const response = await fetch("https://vyugamhq-backend.onrender.com/api/user/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const { access, refresh } = data.token;
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
        setUser({ email: formData.email });
        navigate("/");
      } else {
        setError(data?.errors?.non_field_errors?.[0] || data?.msg || "Invalid credentials");
      }
    } catch {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const sendResetLink = async () => {
    setResetError("");
    setResetSuccess("");

    if (!resetEmail.includes("@")) {
      setResetError("Please enter a valid email.");
      return;
    }

    try {
      const response = await fetch("https://vyugamhq-backend.onrender.com/api/user/resetpasswordemail/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: resetEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setResetSuccess("Reset link sent! Check your email.");
      } else {
        setResetError(data?.detail || "Failed to send reset link.");
      }
    } catch {
      setResetError("Server error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-[100px] bg-white">
      <img src={VyugamLogo} alt="Vyugam Logo" className="w-40 mb-6" />

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-lg p-8 space-y-6"
      >
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <div className="flex justify-between items-center text-sm text-gray-600">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="remember"
              checked={formData.remember}
              onChange={handleChange}
              className="mr-2"
            />
            Remember me
          </label>

          <button
            type="button"
            onClick={() => setShowResetModal(true)}
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        <p className="text-center text-xs text-gray-500 mt-2">
          By signing in, you agree to our{" "}
          <a href="#" className="text-blue-600 underline">Terms & Conditions</a> and{" "}
          <a href="#" className="text-red-500 underline">Privacy Policy</a>.
        </p>
      </form>

      {/* 🔐 Forgot Password Modal */}
      {showResetModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg space-y-4 relative">
            <button
              onClick={() => setShowResetModal(false)}
              className="absolute top-2 right-4 text-gray-400 hover:text-red-500 text-xl"
            >
              ×
            </button>

            <h2 className="text-xl font-semibold">Forgot your password?</h2>
            <p className="text-sm text-gray-500">
              Enter your registered email and we’ll send a reset link.
            </p>

            <input
              type="email"
              placeholder="you@example.com"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            />

            {resetError && <p className="text-sm text-red-500">{resetError}</p>}
            {resetSuccess && <p className="text-sm text-green-600">{resetSuccess}</p>}

            <button
              onClick={sendResetLink}
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md font-semibold"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;