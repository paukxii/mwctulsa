/** @type {import('tailwindcss').Config} */
import WindiCSS from 'vite-plugin-windicss'

export default {
  
  plugins: [
    WindiCSS(),
  ],
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('../imgs/front_page.jpg')",
      }),

      colors: {
        'mwc-nav-orange': '#f09300',
        'mwc-gold': '#a76600',
        'mwc-red': '#d30000',
      },

      screens: {
        'sm': {'min': '320px', 'max': '742px'},
        'md': {'min': '743px', 'max': '1135px'},
        'lg': {'min': '1136px'},
      },
    },
  },
}