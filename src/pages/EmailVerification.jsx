import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VyugamLogo from "../assets/vyugamHQ.png";

const EmailVerification = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const sendVerificationCode = async () => {
    if (!email.includes("@")) {
      setError("Please enter a valid email");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://vyugamhq-backend.onrender.com/api/user/sendcode/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("pendingEmail", email);
        setStep(2);
      } else {
        setError(data?.email?.[0] || data?.detail || "Failed to send code");
      }
    } catch (err) {
      setError("Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const verifyCode = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("https://vyugamhq-backend.onrender.com/api/user/verifycode/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/signup", { state: { email } });
      } else {
        setError(data?.detail || "Invalid or expired code.");
      }
    } catch (err) {
      setError("Server error during verification.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-[80px] relative overflow-hidden bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#4b5563]">
      {/* Shiny neon circle */}
      <div className="absolute top-[-200px] right-[-200px] w-[400px] h-[400px] bg-purple-500 opacity-30 rounded-full blur-3xl"></div>

      {/* SVG blob background */}
      <svg
        className="absolute bottom-0 w-full max-h-[200px]"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#d946ef"
          fillOpacity="0.1"
          d="M0,160L60,149.3C120,139,240,117,360,112C480,107,600,117,720,106.7C840,96,960,64,1080,69.3C1200,75,1320,117,1380,138.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>

      <img src={VyugamLogo} alt="Vyugam Logo" className="w-40 mb-8 opacity-90 drop-shadow-lg" />

      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-2xl transition-all duration-300 ring-1 ring-white/20">
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">Enter your Email</h2>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-white/30 bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg outline-none focus:border-purple-400 transition placeholder:text-gray-300"
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              onClick={sendVerificationCode}
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:brightness-110 text-white py-2.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-purple-500/60"
            >
              {loading ? "Sending Code..." : "Send Verification Code"}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white text-center">Verify Code</h2>
            <input
              type="text"
              maxLength={6}
              placeholder="Enter 6-digit code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full border border-white/30 bg-white/5 backdrop-blur-sm text-white px-4 py-3 rounded-lg outline-none focus:border-green-400 transition placeholder:text-gray-300 tracking-widest"
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <button
              onClick={verifyCode}
              disabled={loading}
              className="w-full bg-gradient-to-r from-green-500 via-lime-500 to-emerald-500 hover:brightness-110 text-white py-2.5 rounded-lg font-semibold transition-all shadow-lg hover:shadow-green-400/50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-1 animate-pulse">
                  <span className="h-2 w-2 bg-white rounded-full animate-bounce"></span>
                  <span>Verifying...</span>
                </span>
              ) : (
                "Verify and Continue"
              )}
            </button>
          </div>
        )}
      </div>

      <p className="text-xs text-gray-400 mt-8 text-center font-mono">
        © {new Date().getFullYear()} VyugamHQ — All rights reserved.
      </p>
    </div>
  );
};

export default EmailVerification;