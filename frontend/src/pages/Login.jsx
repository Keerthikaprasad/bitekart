import React, { useState } from "react";
import { login, verifyOtp, sendOtp } from "../services/apiService";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = { email, password };

    try {
      const response = await login(userData);
      console.log("Login success:", response);
      navigate("/share-food"); // ✅ Redirect to Share Food page
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await sendOtp(mobileNumber);
      setOtpSent(true);
      console.log("OTP sent:", response);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    try {
      const response = await verifyOtp(mobileNumber, otp);
      console.log("OTP verified:", response);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 flex items-center justify-center font-poppins px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-container shadow-2xl p-10 rounded-3xl w-full max-w-md backdrop-blur-lg"
      >
        <h2 className="text-3xl font-bold text-center text-amber-600 mb-6">
          🍔 Welcome Back to BiteKart
        </h2>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        {!isForgotPassword ? (
          <form onSubmit={handleLogin} className="grid gap-5">
            <div>
              <label htmlFor="email" className="label-style">📧 Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="you@example.com"
                className="input-style"
              />
            </div>

            <div>
              <label htmlFor="password" className="label-style">🔒 Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••"
                className="input-style"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="relative overflow-hidden w-full py-3 text-white font-semibold rounded-xl shadow-lg 
                        bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-500 
                        hover:from-yellow-600 hover:via-orange-500 hover:to-yellow-600 
                        transition-all duration-300 ease-in-out group"
            >
              <span className="relative z-10">🔐 Login</span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/20 via-white/10 to-transparent 
                              transform -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out blur-sm" />
              <span className="absolute inset-0 rounded-xl border border-transparent group-hover:border-white/30 transition-all duration-300"></span>
            </motion.button>

            <p
              className="text-center text-sm text-orange-600 cursor-pointer hover:underline"
              onClick={() => setIsForgotPassword(true)}
            >
              Forgot Password?
            </p>

           <p className="text-center text-sm mt-2">
  <span className="text-black">Don't have an account? </span>
  <span
    className="text-amber-600 cursor-pointer hover:underline"
    onClick={() => navigate("/signup")}
  >
    Sign Up
  </span>
</p>

          </form>
        ) : (
          <>
            <form onSubmit={handleForgotPassword} className="grid gap-5 mb-6">
              <div>
                <label htmlFor="mobileNumber" className="label-style">📱 Mobile Number</label>
                <input
                  type="text"
                  id="mobileNumber"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  required
                  placeholder="9876543210"
                  className="input-style"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-semibold rounded-xl shadow-md hover:from-yellow-600 hover:to-orange-500 transition-all"
              >
                📨 Send OTP
              </motion.button>
            </form>

            {otpSent && (
              <form onSubmit={handleOtpVerification} className="grid gap-5">
                <div>
                  <label htmlFor="otp" className="label-style">🧾 Enter OTP</label>
                  <input
                    type="text"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    placeholder="Enter received OTP"
                    className="input-style"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-semibold rounded-xl shadow-md hover:from-yellow-600 hover:to-orange-500 transition-all"
                >
                  ✅ Verify OTP
                </motion.button>
              </form>
            )}
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Login;
