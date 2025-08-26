import axios from "axios";

// Base URL for your API (adjust as needed for your environment)
const BASE_URL = "https://your-api-endpoint.com";  // Replace with your actual backend URL

// API URL for user-related endpoints
const API_URL = "http://localhost:5000/api/users";  // Adjust this for your user-related API

// Function to sign up a new user
export const signup = (user) => axios.post(`${API_URL}/signup`, user);

// Function to login a user
export const login = (credentials) => axios.post(`${API_URL}/Login`, credentials);

// Function to send OTP to the mobile number
export const sendOtp = async (mobileNumber) => {
  try {
    const response = await axios.post(`${BASE_URL}/send-otp`, {
      mobileNumber: mobileNumber,
    });

    if (response.status === 200) {
      return response.data; // Return success data if OTP is sent successfully
    } else {
      throw new Error("Failed to send OTP");
    }
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error(error.response?.data?.message || "Failed to send OTP");
  }
};

// Function to verify OTP
export const verifyOtp = async (mobileNumber, otp) => {
  try {
    const response = await axios.post(`${BASE_URL}/verify-otp`, {
      mobileNumber: mobileNumber,
      otp: otp,
    });

    if (response.status === 200) {
      return response.data; // Return success data if OTP is verified successfully
    } else {
      throw new Error("OTP verification failed");
    }
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw new Error(error.response?.data?.message || "OTP verification failed");
  }
};

// Optional: Add other API functions here (e.g., reset password, etc.)
