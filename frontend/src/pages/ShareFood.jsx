import React, { useState } from "react";
import { motion } from "framer-motion";

const ShareFood = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock submission - here you’ll connect to backend API
    console.log({
      title,
      description,
      location,
      image,
    });

    alert("🍴 Food shared successfully!");
    setTitle("");
    setDescription("");
    setLocation("");
    setImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100 flex items-center justify-center font-poppins px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-container shadow-2xl p-8 rounded-3xl w-full max-w-lg backdrop-blur-lg"
      >
        <h2 className="text-3xl font-bold text-center text-amber-700 mb-6">
          🥗 Share Your Food
        </h2>

        <form onSubmit={handleSubmit} className="grid gap-5">
          <div>
            <label htmlFor="title" className="label-style">🍛 Food Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Ex: Vegetable Biryani"
              className="input-style"
            />
          </div>

          <div>
            <label htmlFor="description" className="label-style">📝 Description</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              placeholder="Write a short description..."
              className="input-style"
              rows="3"
            />
          </div>

          <div>
            <label htmlFor="location" className="label-style">📍 Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              placeholder="Ex: Tirupati, Andhra Pradesh"
              className="input-style"
            />
          </div>

          <div>
            <label htmlFor="image" className="label-style">📷 Upload Image</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="input-style"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold rounded-xl shadow-md hover:from-orange-600 hover:to-yellow-500 transition-all"
          >
            🚀 Share Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default ShareFood;
