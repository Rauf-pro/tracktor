/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '468px',
      sm: '600px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px',
    },
    extend: {
      fontFamily: {
        "lexend-bold": ["Lexend Bold", "normal"],
        "lexend-semibold": ["Lexend Semibold", "normal"],
        "lexend-medium": ["Lexend Medium", "normal"],
        "lexend-light": ["Lexend Light", "normal"],
        "lexend-regular": ["Lexend Regular", "normal"],
      },
      
      colors: {
        yellowColor: "#FFE500",
        whiteColor: "#FFFFFF",
        dark: "#000000",
        grayColor:"#5E626A",
        lightColor: "#B5BAC5",
        formBg: "#282828"
      },
      boxShadow: {
        'yellowShadow': '0px 0px 20px rgba(255, 229, 0, 0.5)', 
      },
      backgroundImage:{
        'banner-bg': "url('/img/banner-bg-img.png')",
        
        
      }
    },
  },
  plugins: [],
};
