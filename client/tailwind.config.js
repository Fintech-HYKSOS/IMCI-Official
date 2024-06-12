module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    screens: {
      max_BeforeSm: {max : '639px'},
      sm: '640px',
      screen_services: '726px',
      max_BeforeMd: {max : '767px'},
      md: '768px',
      max_BeforeLg: {max : '1023px'},
      lg: '1024px',
      screen_navbar:'1250px',
      max_BeforeXl: {max : '1233px'},
      xl: '1234px',
    },
    extend: {
      colors: {
        primary: '#101828',
        secondary: '#7F56D9',
      },
      boxShadow: {
        1: '0px 4px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
