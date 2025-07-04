import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [uid, setUid] = useState("");
  const [token, setToken] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const uidParam = query.get("uid");
    const tokenParam = query.get("token");

    if (uidParam && tokenParam) {
      setUid(uidParam);
      setToken(tokenParam);
    } else {
      setMessage("Invalid or missing reset link.");
    }
  }, [location]);

  const handleReset = async () => {
    setMessage("");

    if (!password || password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`https://vyugamhq-backend.onrender.com/api/user/resetpassword/${uid}/${token}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, password2: confirmPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Password successfully changed. Redirecting to sign in...");
        setTimeout(() => navigate("/signin"), 3000);
      } else {
        setMessage(data?.detail || "Failed to reset password.");
      }
    } catch {
      setMessage("Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4 bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md space-y-6 border border-gray-200">
        <h2 className="text-2xl font-bold text-center">Reset Your Password</h2>

        {message && (
          <p
            className={`text-sm text-center ${
              message.startsWith("✅") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <div>
          <label className="block mb-1 text-sm font-medium">New Password</label>
          <input
            type="password"
            placeholder="Enter new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-red-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-red-500"
          />
        </div>

        <button
          onClick={handleReset}
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 rounded-md transition"
        >
          {loading ? "Saving..." : "Reset Password"}
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
