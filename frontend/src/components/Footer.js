import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-red-700 via-red-800 to-orange-600 text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12">
        {/* Logo & About Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start mb-8">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-4xl font-semibold mb-2">BiteKart</h2>
            <p className="text-xl">Food at your fingertips 🍔🍕🍜</p>
          </div>

          {/* Quick Links Section */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Menu</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Icons Section */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-3xl hover:text-blue-500"><FaFacebook /></a>
              <a href="#" className="text-3xl hover:text-pink-500"><FaInstagram /></a>
              <a href="#" className="text-3xl hover:text-blue-400"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm opacity-70">
          <p>&copy; {new Date().getFullYear()} BiteKart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
