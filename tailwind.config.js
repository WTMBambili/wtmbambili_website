/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#4285F4',
        'secondary':'#1CE9B6',
        'accent':'#00BFA5',
        'light_accent':'#4FC3F7',
        'title':'#3F4043',
        'destructive':'#FF7370',
        'light':'#ffffff',
        'footer':'#051736',
        'footer_links':'#dfFfFf'

      }
    },
  },
  plugins: [],
}

