import React, { useState, useEffect } from "react";
import "../styles/Profile.scss";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    profilePic: "https://via.placeholder.com/150",
    phone: "+1234567890",
    address: "123 Main Street, City, Country",
  });

  useEffect(() => {
    // Fetch user details from API (Mock example)
    // fetch("/api/user/profile").then(res => res.json()).then(data => setUser(data));
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.profilePic} alt="Profile" className="profile-pic" />
        <h2>{user.name}</h2>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Address: {user.address}</p>
        <button className="edit-button">Edit Profile</button>
      </div>
    </div>
  );
};

export default Profile;
