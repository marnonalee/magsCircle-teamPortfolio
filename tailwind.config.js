/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
        playfair: ['Playfair Display', 'serif'], 
        montserrat: ['Montserrat', 'sans-serif'], 
        merriweather: ['Merriweather', 'serif'],
        poppins: ['Poppins', 'sans-serif'], 
      },
      textShadow: {
        glow: '0px 0px 30px rgba(138, 43, 226, 1)',
      },
      fontSize: {
        '10vw': '10vw',
        '12vw': '12vw',
        '8vw': '8vw',
        '7vw': '7vw',
      },
      blur: {
        '4xl': '80px',
      },
      colors: {
        'purple-400': '#9f7aea',
        'pink-500': '#ec4899',
        'blue-500': '#3b82f6',
        'lime-300': '#bef264',
      },
      boxShadow: {
        'text-glow': '0px 0px 30px rgba(138, 43, 226, 1)',
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      keyframes: {
        moveShape: {
          '0%': { transform: 'translateX(0) translateY(0)' },
          '25%': { transform: 'translateX(100px) translateY(-50px)' },
          '50%': { transform: 'translateX(-100px) translateY(100px)' },
          '75%': { transform: 'translateX(-50px) translateY(200px)' },
          '100%': { transform: 'translateX(200px) translateY(0)' },
        },
      },
      animation: {
        moveShape: 'moveShape 10s infinite linear',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
