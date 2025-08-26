import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // Ensure correct path

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Floating Food Icons Effect
  useEffect(() => {
    const icons = ["🍔", "🍕", "🍜", "🍣", "🥤", "🍩"];
    const container = document.getElementById("icons-container");

    const createIcon = () => {
      if (!container) return;

      const icon = document.createElement("div");
      icon.className = "absolute opacity-70 animate-floatDown"; // Apply the floating animation
      icon.textContent = icons[Math.floor(Math.random() * icons.length)];
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.fontSize = `${Math.random() * 24 + 24}px`;
      icon.style.animationDuration = `${Math.random() * 10 + 5}s`; // Random animation speed
      container.appendChild(icon);

      // Remove icon after animation ends
      setTimeout(() => {
        container.removeChild(icon);
      }, 15000); // Remove after animation ends (based on the duration)
    };

    const interval = setInterval(createIcon, 2000); // Create a new icon every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="flex justify-between items-center p-6 bg-gradient-to-r from-red-700 via-red-800 to-orange-600 sticky top-0 z-50">
      {/* Left Section - Logo and Title */}
      <div className="flex items-center gap-8 flex-grow">
        <img
          src={logo}
          alt="BiteKart Logo"
          className="w-16 h-16 rounded-full bg-white p-3 shadow-lg transform transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-3xl font-semibold text-white tracking-wide uppercase">
          BiteKart
        </h1>
      </div>

      {/* Right Section - Menu Icon, Authentication, and Action Buttons */}
      <div className="flex items-center gap-8 relative">
        {/* Menu Button */}
        <button
          className="bg-transparent border-none cursor-pointer p-2 relative z-20"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        <div
          ref={menuRef}
          className={`absolute top-14 right-0 bg-white shadow-md rounded p-2 w-40 opacity-0 transform transition-all duration-300 ease-out ${menuOpen ? "opacity-100 translate-y-0 visible" : "translate-y-[-10px] invisible"}`}
        >
          <ul className="list-none p-0 m-0">
            <li className="py-2 px-3 text-left hover:bg-gray-100">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li className="py-2 px-3 text-left hover:bg-gray-100">
              <Link to="/register-restaurants" onClick={() => setMenuOpen(false)}>
                Restaurants
              </Link>
            </li>
            <li className="py-2 px-3 text-left hover:bg-gray-100">
              <Link to="/orders" onClick={() => setMenuOpen(false)}>
                My Orders
              </Link>
            </li>
            <li className="py-2 px-3 text-left hover:bg-gray-100">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Action Buttons: Add Restaurant and Cart */}
        <div className="flex gap-6">
          <Link
            to="/register-restaurant"
            className="bg-transparent border-none cursor-pointer p-2 relative z-20"
            title="Add Restaurant"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M280-80v-366q-51-14-85.5-56T160-600v-280h80v280h40v-280h80v280h40v-280h80v280q0 56-34.5 98T360-446v366h-80Zm400 0v-320H560v-280q0-83 58.5-141.5T760-880v800h-80Z" />
            </svg>
          </Link>

          <button className="bg-transparent border-none cursor-pointer p-2 relative z-20" title="Cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating Food Icons */}
      <div id="icons-container" className="absolute w-full h-full top-0 left-0 overflow-hidden"></div>
    </nav>
  );
};

export default Navbar;
