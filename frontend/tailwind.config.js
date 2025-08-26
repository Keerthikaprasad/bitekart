/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#FACC15",
        darkText: "#1F2937",
        lightText: "#6B7280",
        bgLight: "#F9FAFB",
        bgDark: "#111827",
      },
      fontSize: {
        '2xs': '0.65rem',
        'hero': '2.75rem',
      },
      spacing: {
        13: '3.25rem',
        18: '4.5rem',
        'header': '72px',
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0, 0, 0, 0.05)",
        medium: "0 8px 20px rgba(0, 0, 0, 0.08)",
        large: "0 12px 32px rgba(0, 0, 0, 0.12)",
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      animation: {
        floatDown: "floatDown 5ms linear infinite",
        fadeIn: "fadeIn 0.4s ease-in-out",
        slideUp: "slideUp 0.4s ease-in-out",
        floatIcons: "floatIcons 6s ease-in-out infinite",
        fadeInUp: "fadeInUp 1s ease-out both",
        slideSlow: 'slideSlow 60s linear infinite',
      },
      keyframes: {
        floatDown: {
          "0%": { transform: "translateY(-100px)" },
          "100%": { transform: "translateY(100vh)" },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        floatIcons: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideSlow: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-10%)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'),
    require('tailwindcss-animate'),
  ],
};
