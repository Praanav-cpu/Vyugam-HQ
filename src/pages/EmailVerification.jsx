import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VyugamLogo from "../assets/Vyugam.png";

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

      const response = await fetch("http://127.0.0.1:8000/api/user/sendcode/", {
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

      const response = await fetch("http://127.0.0.1:8000/api/user/verifycode/", {
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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-[80px] bg-white">
      <img src={VyugamLogo} alt="Vyugam Logo" className="w-40 mb-6" />

      {step === 1 && (
        <div className="w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-xl font-bold">Enter your email</h2>

          <input
            type="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            onClick={sendVerificationCode}
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition"
          >
            {loading ? "Sending..." : "Send Verification Code"}
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="w-full max-w-md bg-white border border-gray-300 rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-xl font-bold">Verify your email</h2>

          <input
            type="text"
            maxLength={6}
            placeholder="Enter 6-digit code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2"
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            onClick={verifyCode}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition"
          >
            {loading ? "Verifying..." : "Verify and Continue"}
          </button>
        </div>
      )}
    </div>
  );
};

export default EmailVerification;
