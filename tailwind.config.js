/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      fredoka: ["Fredoka", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      mage: {
        orange: "#FF9437",
        blue: "#132777",
        pink: "#E14CB3",
      },
      purple: {
        1: "#493187",
        2: "#6F56B4",
        3: "#713E79",
        4: "#1B181F",
      },
      pink: {
        1: "#E553A8",
      },
      orange: {
        1: "#D79273",
        2: "#F77F5A",
        3: "#FE874F",
        4: "#FFC291",
        5: "#FFE1C9",
      },
      red: {
        1: "#FF4646",
      },
      dark: "#1E1E1E",
      light: "#FFFFFF",
      black: "#000000",
    },
    extend: {
      backgroundImage: () => ({
        "blue-purple-orange":
          "linear-gradient(90deg, #435ECF 0%, #E24BB3 35%, #FF9433 100%)",
        "transparent-white-1":
          "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(255, 255, 255, 0.1) 100%)",
        "transparent-white-2":
          "linear-gradient(rgba(255, 255, 255, 1) 0%, rgba(0, 0, 0, 0) 75%)",
        "yellow":
          "linear-gradient(90deg, #FAF000 0%, #FAF000 100%)",
        "yellow-purple-orange":
          "linear-gradient(180deg, #FAF000 0%, #FF9433 20%)",
        "pcb":
          "linear-gradient(180deg, rgba(250, 240, 0, 0.5) 0%, rgba(255, 148, 51, 0.5) 20%), url('src/assets/brand/pcb1.png')",
      }),
      width: {
        'responsive-container': '100%',
        'max-container': '1000px',
      },
      dropShadow: {
        "glow-white-2": [
          "0 0px 20px rgba(255, 255, 255, 1)",
          "0 0px 30px rgba(255, 255, 255, 0.9)",
        ],
        "glow-white-1-5": [
          "0 0px 15px rgba(255, 255, 255, 1)",
          "0 0px 18px rgba(255, 255, 255, 0.9)",
        ],
        "glow-white-1": "0 0px 10px rgba(255,255, 255, 1)",
        "glow-white-full": [
          "0 0px 20px rgba(255,255, 255, 1)",
          "0 0px 30px rgba(255, 255,255, 0.9)",
          "0 0px 40px rgba(255, 255,255, 0.8)",
          "0 0px 50px rgba(255, 255,255, 0.7)",
        ],
        "glow-dark-1": "0 0px 10px rgba(0, 0, 0, 1)"
      },
      boxShadow: {
        "black-1": "2px 2px 4px rgba(0, 0, 0, 0.4);"
      },
      margin: {
        "mt-70": '70px',
      }
    },
  },
  plugins: [],
};
