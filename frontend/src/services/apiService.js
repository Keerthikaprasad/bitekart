import axios from "axios";

// Base URL for your backend (Render deployment)
const BASE_URL = "https://bitekart-csif.onrender.com"; // Replace with your Render backend URL

// API URL for user-related endpoints
const API_URL = `${BASE_URL}/api/users`;

// Function to sign up a new user
export const signup = (user) => axios.post(`${API_URL}/signup`, user);

// Function to login a user
export const login = (credentials) => axios.post(`${API_URL}/login`, credentials);

// Function to send OTP to the mobile number
export const sendOtp = async (mobileNumber) => {
  try {
    const response = await axios.post(`${BASE_URL}/send-otp`, { mobileNumber });

    if (response.status === 200) return response.data;
    throw new Error("Failed to send OTP");
  } catch (error) {
    console.error("Error sending OTP:", error);
    throw new Error(error.response?.data?.message || "Failed to send OTP");
  }
};

// Function to verify OTP
export const verifyOtp = async (mobileNumber, otp) => {
  try {
    const response = await axios.post(`${BASE_URL}/verify-otp`, { mobileNumber, otp });

    if (response.status === 200) return response.data;
    throw new Error("OTP verification failed");
  } catch (error) {
    console.error("Error verifying OTP:", error);
    throw new Error(error.response?.data?.message || "OTP verification failed");
  }
};
