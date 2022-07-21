module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  // To purge CSS in .ts .tsx files
  // prefix: 'tw-',
  // mode: 'jit',
  preflight: false,
  // To purge CSS in .ts .tsx files
  content: ['src/**/*.{js,ts,jsx,tsx,html}'],
  // darkMode: "media", // Use media queries for dark mode
  // variants: {}, // activate any variant you want here
  plugins: [],
  theme: {
    fontFamily: {
      display: ['Poppins', 'sans-serif'],
    },
    extend: {
      screens: {
        md: '768px',
        xl: '1440px',
        '3xl': '1900px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      colors: {
        'baxus-gold': '#dd9c27',
        'baxus-black': '#131416',
        'dark-gray': '#1A1B1D',
        'baxus-gray': '#323232',
        'baxus-light-gray': '#707070',
      },
      animation: {
        scroll: 'scroll 8s infinite',
      },
      keyframes: {
        scroll: {
          '15%, 25%': { transform: 'translateY(-100%)' },
          '40%, 50%': { transform: 'translateY(-200%)' },
          '65%, 75%': { transform: 'translateY(-300%)' },
          '90%, 100%': { transform: 'translateY(-400%)' },
        },
      },
    },
  },
};
