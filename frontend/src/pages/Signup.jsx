import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../services/apiService';
import { motion } from 'framer-motion';
import '../styles/Signup.css';

const FloatingFoodIcon = ({ emoji, top, left }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    style={{ top, left }}
    className="absolute text-4xl floating-icon"
  >
    {emoji}
  </motion.div>
);

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
    gender: '',
    address: '',
    mobileNumber: '',
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signup(formData);
      alert(res.data.message);
      navigate('/login');
    } catch (error) {
      setError(error.response?.data?.error || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-yellow-50 relative flex items-center justify-center font-poppins px-4 pt-28 pb-24 overflow-hidden">

      {/* Floating Emojis */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingFoodIcon top="20%" left="10%" emoji="🍕" />
        <FloatingFoodIcon top="60%" left="80%" emoji="🍔" />
        <FloatingFoodIcon top="40%" left="50%" emoji="🍩" />
        <FloatingFoodIcon top="75%" left="20%" emoji="🍣" />
        <FloatingFoodIcon top="30%" left="75%" emoji="🍜" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-container relative z-10 shadow-2xl p-10 rounded-3xl grid md:grid-cols-2 gap-10 backdrop-blur-lg"
      >
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center items-center text-center space-y-6 px-4">
          <motion.h2
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-extrabold text-orange-600"
          >
            Welcome to <span className="text-amber-600">BiteKart</span> 🍕
          </motion.h2>
          <p className="text-gray-700 text-base">
            Sign up and dive into a world of flavors. From crispy delights to spicy treats — we’ve got your cravings covered! 🍟🍛🍩
          </p>
        </div>

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-amber-600 mb-6">
            🍽️ Join the BiteKart Family
          </h2>

          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit} className="grid gap-5">
            <InputField label="👤 Full Name" name="name" type="text" placeholder="John Foodie" value={formData.name} onChange={handleChange} />
            <InputField label="📧 Email Address" name="email" type="email" placeholder="chef@example.com" value={formData.email} onChange={handleChange} />
            <InputField label="🔒 Password" name="password" type="password" placeholder="••••••••" value={formData.password} onChange={handleChange} />

            <SelectField label="🎓 Role" name="role" value={formData.role} onChange={handleChange} options={["Customer", "Admin"]} />
            <SelectField label="🧑 Gender" name="gender" value={formData.gender} onChange={handleChange} options={["Male", "Female", "Other"]} />

            <InputField label="📱 Mobile Number" name="mobileNumber" type="text" placeholder="9876543210" value={formData.mobileNumber} onChange={handleChange} />

            <div>
              <label htmlFor="address" className="label-style">📍 Address</label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Food Street, Flavor Town"
                rows="3"
                required
                className="input-style"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-400 text-white font-semibold rounded-xl shadow-md hover:from-yellow-600 hover:to-orange-500 transition-all"
            >
              🍴 Sign Up & Start Ordering
            </motion.button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account? <a href="/login" className="text-orange-500 hover:underline">Log in</a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

const InputField = ({ label, name, type, placeholder, value, onChange }) => (
  <div>
    <label htmlFor={name} className="label-style">{label}</label>
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="input-style"
    />
  </div>
);

const SelectField = ({ label, name, value, onChange, options }) => (
  <div>
    <label htmlFor={name} className="label-style">{label}</label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      required
      className="input-style"
    >
      <option value="">-- Select --</option>
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  </div>
);

export default Signup;
