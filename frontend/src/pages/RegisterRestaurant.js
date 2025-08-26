import React, { useState } from "react";

// Main component
const RegisterRestaurant = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    ownerName: "",
    contactNumber: "",
    email: "",
    address: "",
    gstNumber: "",
  });

  const [files, setFiles] = useState({
    restaurantImage: null,
    panCard: null,
    fssaiLicense: null,
    bankDetails: null,
    menuImage: null,
  });

  // Handle text input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file uploads
  const handleFileUpload = (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [fileType]: file,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData, files);
    alert("Restaurant registered successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <header className="w-full max-w-3xl text-center mb-12 p-8 bg-white shadow-md rounded-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Partner with BiteKart and grow your business
        </h1>
        <p className="text-lg text-gray-600">
          0% commission for the first month! Valid for new restaurant partners in select cities.
        </p>
      </header>

      <form className="w-full max-w-3xl bg-white shadow-md rounded-md p-8" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Register Your Restaurant</h2>

        {/* Text Inputs */}
        <div className="space-y-6">
          <input
            type="text"
            name="restaurantName"
            placeholder="Restaurant Name"
            value={formData.restaurantName}
            onChange={handleInputChange}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            value={formData.ownerName}
            onChange={handleInputChange}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            type="text"
            name="contactNumber"
            placeholder="Contact Number"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            type="text"
            name="address"
            placeholder="Restaurant Address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />

          <input
            type="text"
            name="gstNumber"
            placeholder="GST Number (if applicable)"
            value={formData.gstNumber}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
        </div>

        {/* File Uploads */}
        <div className="space-y-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">Restaurant Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, "restaurantImage")}
              required
              className="w-full p-4 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {files.restaurantImage && (
              <img
                src={URL.createObjectURL(files.restaurantImage)}
                alt="Restaurant Preview"
                className="mt-4 w-24 h-24 object-cover rounded-md"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">PAN Card</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFileUpload(e, "panCard")}
              required
              className="w-full p-4 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">FSSAI License</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFileUpload(e, "fssaiLicense")}
              required
              className="w-full p-4 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Bank Account Details</label>
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFileUpload(e, "bankDetails")}
              required
              className="w-full p-4 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Menu & Profile Food Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileUpload(e, "menuImage")}
              required
              className="w-full p-4 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            {files.menuImage && (
              <img
                src={URL.createObjectURL(files.menuImage)}
                alt="Menu Preview"
                className="mt-4 w-24 h-24 object-cover rounded-md"
              />
            )}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 mt-8 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Register Restaurant
        </button>
      </form>
    </div>
  );
};

export default RegisterRestaurant;
