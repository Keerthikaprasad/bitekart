import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage"; // import your HomePage component
import Signup from "./pages/Signup"; // adjust the path as per your folder structure
import Login from "./pages/Login"; // same here
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import RegisterRestaurant from "./pages/RegisterRestaurant";
import ShareFood from "./pages/ShareFood";
import FoodList from "./pages/FoodList";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register-restaurant" element={<RegisterRestaurant />} />
        <Route path="/foodlist" element={<FoodList />} />
        {/* Add other routes here if necessary */}
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
