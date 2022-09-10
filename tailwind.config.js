/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'main': '#00B612',
        'main-100': '#58DF66',
        'main-200': '#19db2c',
        'main3100': '#098D16',
        'main-400': '#035916',
        'main-500': '#002709',
        'brand-dark': '#2D2D2D',
        'brand-dark-100': '#3F3D3D',
        'brand-gray': '##F2F3F5',
        'brand-gray-100': '#DBDEE0',
        'brand-gray-200': '#999A9C',
        'alt': '#FFF5E5'
      },
      zIndex: {
        'infinite': '99999',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      boxShadow: {
        'custom': '0 0 10px 0 rgba(26, 26, 26, 0.12)',
      },
    },
  },
  plugins: [],
}
