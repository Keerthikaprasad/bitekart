import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FoodList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Fetch data from backend API
    const fetchRestaurants = async () => {
      try {
        const res = await axios.get("/api/restaurants");
        setRestaurants(res.data);
      } catch (err) {
        console.error("Error fetching restaurants:", err);
      }
    };
    fetchRestaurants();
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Restaurants & Food</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {restaurants.map((restaurant) => (
          <div
            key={restaurant._id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={restaurant.image || "/default-food.jpg"}
              alt={restaurant.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
              <p className="text-gray-500">{restaurant.cuisine}</p>
              <p className="text-yellow-500 font-bold mt-2">₹{restaurant.avgPrice}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
