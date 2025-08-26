// components/KorosWave.jsx
const KorosWave = ({ position = "bottom", color = "#fff" }) => (
    <svg
      className={`absolute w-full ${position === "bottom" ? "bottom-0" : "top-0"} z-0`}
      viewBox="0 0 1440 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d="M0,0 C360,80 1080,0 1440,80 L1440,0 L0,0 Z"
        fill={color}
      />
    </svg>
  );
  
  export default KorosWave;
  