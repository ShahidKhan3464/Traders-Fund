/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '769px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      boxShadow: {
        'custom-spread': '0 0 20px 6px rgba(110, 253, 235, 0.3)',
      },
      colors: {
        mainColor: '#6EFDEB',
        mainTheme: '#141518',
        secTheme: '#1C1D20',
        mainBlue: '#00A4E6',
        mainGreen: '#26BD7E',
        grayTheme: '#262729',
        secGrayTheme: '#3B3C3D'
      }
    },

    fontFamily: {
      urbanist: ['Urbanist', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      anton: ['Anton', 'sans-serif'],
      matter: ['Matter', 'sans-serif'],
      work: ['Work Sans', 'sans-serif'],
      DM: ['DM Sans', 'sans-serif'],
    },
    extend: {
      fontFamily: {
        urbanist: ['Urbanist', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui')]
};
