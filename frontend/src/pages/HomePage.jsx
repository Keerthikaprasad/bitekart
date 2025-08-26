import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";
import bg1 from "../assets/bg1.jpg";
import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.jpg";
import bg4 from "../assets/bg4.jpg";
import bg5 from "../assets/bg5.jpg";
import bg6 from "../assets/bg6.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HomePage = () => {
  const navigate = useNavigate();
  const iconCount = 9;

  const handleSignUp = () => navigate("/signup");
  const handleLogin = () => navigate("/login");

  const generateIcons = () =>
    Array.from({ length: iconCount }).map((_, i) => (
      <div
        key={i}
        className="absolute top-[-50px] animate-floatIcons opacity-20 bg-white rounded-full w-8 h-8 shadow-md blur-sm"
        style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${(Math.random() * 4).toFixed(2)}s`,
          animationDuration: `${(4 + Math.random() * 4).toFixed(2)}s`,
        }}
      />
    ));

  return (
    <div className="relative bg-white text-orange-600 overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col justify-center items-center text-center text-white overflow-hidden">
  {/* Sliding Background */}
  <div className="absolute inset-0 z-0 flex animate-slideSlow w-[600%] h-full">
    {[bg1, bg2, bg3, bg4, bg5, bg6].map((bg, i) => (
      <div key={i} className="w-screen h-full shrink-0">
        <img
          src={bg}
          alt={`bg-${i}`}
          className="w-full h-full object-cover brightness-75"
        />
      </div>
    ))}
  </div>

  {/* Floating Icons */}
  <div className="absolute inset-0 overflow-hidden z-10">
    {generateIcons()}
  </div>

  {/* Hero Content */}
  <div className="z-20 flex flex-col items-center px-4 animate-fadeIn max-w-2xl text-white">
    <h1 className="text-6xl sm:text-7xl font-extrabold text-yellow-200 tracking-tight drop-shadow-xl">
      BiteKart
    </h1>

    {/* CTA Buttons */}
    <div className="mt-16 flex flex-wrap gap-6 justify-center">
      <button
        onClick={handleSignUp}
        className="relative px-8 py-3 text-orange-600 bg-white font-bold rounded-full shadow-lg hover:bg-orange-100 transition-all duration-300 group"
      >
        Sign Up
        <span className="absolute inset-0 rounded-full border border-transparent group-hover:border-orange-300 transition-all"></span>
      </button>
      <button
        onClick={handleLogin}
        className="relative px-8 py-3 bg-gradient-to-r from-orange-600 via-pink-500 to-orange-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:brightness-110 transition-all duration-300 overflow-hidden group"
      >
        <span className="relative z-10">Log In</span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </button>
    </div>
  </div>
</section>

      {/* 👨‍🍳 Animated Chef Intro */}
      <section className="bg-orange-50 py-20 text-center animate-fadeInUp">
        <h2 className="text-4xl font-extrabold mb-6">Meet Our Master Chefs</h2>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Handpicked culinary legends crafting delicious experiences every day. From gourmet classics to healthy bites, our chefs redefine online dining.
        </p>
        <div className="mt-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
            alt="chef"
            className="mx-auto w-40 h-40 animate-bounce"
          />
        </div>
      </section>

      {/* 🍽️ Featured Restaurants */}
      <section className="py-20 bg-white text-orange-700 animate-fadeInUp border-t border-orange-100">
        <h2 className="text-4xl font-extrabold text-center mb-12">🍽️ Featured Restaurants</h2>
        <div className="flex flex-wrap justify-center gap-10 px-4">
          {["Urban Dine", "Green Bowl"].map((name, i) => (
            <div
              key={i}
              className="bg-orange-50 p-6 rounded-2xl shadow-xl w-72 text-center hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="mt-2 text-sm text-gray-600">
                {i === 0 ? "Delicious Pizza & Pasta" : "Healthy Salads & Bowls"}
              </p>
              <button className="mt-5 bg-orange-600 text-white px-5 py-2 rounded-full hover:bg-pink-400 transition-all shadow-md">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 🍛 Dish Categories Carousel */}
      <section className="py-20 bg-orange-50 animate-fadeInUp border-t border-orange-100">
        <h2 className="text-4xl font-extrabold text-center mb-12">🍛 Explore Categories</h2>
        <div className="max-w-4xl mx-auto">
          <Carousel
            autoPlay
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showArrows
            interval={3000}
            centerMode
            centerSlidePercentage={33}
          >
            {[
              { title: "Indian Delights", img: bg1 },
              { title: "Chinese Bites", img: bg2 },
              { title: "Italian Pizzas", img: bg3 },
              { title: "Continental", img: bg4 },
              { title: "Healthy Salads", img: bg5 },
              { title: "Sweet Treats", img: bg6 },
            ].map((dish, i) => (
              <div key={i} className="px-2">
                <img src={dish.img} alt={dish.title} className="rounded-xl shadow-md h-56 object-cover" />
                <p className="legend text-xl font-semibold">{dish.title}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 💬 Auto-play Testimonials */}
      <section className="py-20 bg-white text-orange-800 animate-fadeInUp border-t border-orange-100">
        <h2 className="text-4xl font-extrabold text-center mb-12">💬 What Our Customers Say</h2>
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={5000}
        >
          {[
            {
              name: "Aarav Mehta",
              quote: "Absolutely loved the presentation and delivery speed. 5-star taste!",
            },
            {
              name: "Priya Nair",
              quote: "Top-tier experience. BiteKart feels like fine dining at home.",
            },
            {
              name: "Rahul Dev",
              quote: "Chef-curated meals, timely delivery, and super fresh. I’m hooked!",
            },
          ].map((t, i) => (
            <div key={i} className="px-6">
              <p className="text-lg italic max-w-3xl mx-auto text-center">“{t.quote}”</p>
              <h4 className="mt-4 font-semibold text-center">{t.name}</h4>
            </div>
          ))}
        </Carousel>
      </section>

      {/* 🌟 Top Picks */}
      <section className="py-20 bg-orange-50 text-orange-800 animate-fadeInUp border-t border-orange-100">
        <h2 className="text-4xl font-extrabold text-center mb-12">🌟 Today's Top Picks</h2>
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 px-4">
          {[
            { name: "Sambar Rice", tag: "🔥 Trending", desc: "The taste of South India in a single Plate.", img: bg3 },
            { name: "Chicken Bowl", tag: " Trending", desc: "Tonight's forecast:100% chance of deliciousness.", img: bg5 },
            { name: "Indian cuisine dishes", tag: "⏱️ Fast Delivery", desc: "Spicy, savory, and soul-satisfying.", img: bg2 },
          ].map((item, i) => (
            <div key={i} className="bg-white w-80 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300">
              <img src={item.img} alt={item.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">{item.tag}</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
                <button className="mt-4 w-full bg-orange-600 text-white py-2 rounded-full hover:bg-pink-500 transition-all">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
