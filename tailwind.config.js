/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens:{
        xs:'300px',
        sm:'600px',
        md:'850px',
        lg:'1200px'
      }
    },
  },
  plugins: [],
};
