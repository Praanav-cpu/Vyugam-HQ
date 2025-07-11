import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google"; // ✅ Required
import VyugamLogo from "../assets/vyugamHQ.png";
import { useAuth } from "../context/AuthContext";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "", remember: false });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://vyugamhq-backend.onrender.com/api/user/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: formData.email, password: formData.password }),
      });

      const data = await response.json();
      if (response.ok) {
        const { access, refresh } = data.token;
        localStorage.setItem("access_token", access);
        localStorage.setItem("refresh_token", refresh);
        setUser({ email: formData.email });
        navigate("/");
      } else {
        setError(data?.msg || "Invalid credentials");
      }
    } catch {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-24 px-4 bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg space-y-6">
        <div className="flex justify-center">
          <img src={VyugamLogo} alt="Vyugam Logo" className="w-32" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border px-4 py-2 rounded-md"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full border px-4 py-2 rounded-md"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-2 right-3 text-gray-500"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="text-center text-sm text-gray-400">OR</div>

        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            const idToken = credentialResponse?.credential;
            if (!idToken) return setError("Google login failed: No token.");

            try {
              const response = await fetch("https://vyugamhq-backend.onrender.com/api/user/google-auth/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id_token: idToken }),
              });

              const data = await response.json();

              if (response.ok) {
                if (data.token) {
                  localStorage.setItem("access_token", data.token.access);
                  localStorage.setItem("refresh_token", data.token.refresh);
                  setUser({ email: data.email });
                  navigate("/");
                } else if (data.email) {
                  navigate("/signup", { state: { email: data.email, google: true } });
                }
              } else {
                setError(data?.detail || "Google login failed on server.");
              }
            } catch (err) {
              console.error(err);
              setError("Unexpected error during Google login.");
            }
          }}
          onError={() => setError("Google login popup closed or failed.")}
        />

        <p className="text-xs text-gray-400 text-center">
          By signing in, you agree to our <span className="text-blue-600">Terms</span> and{" "}
          <span className="text-red-600">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Signin;
