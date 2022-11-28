/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.vue",
    "index.html"
  ],
  theme: {
    // Defining a theme. The colors object can also be a property of the extend 
    // object. Note that when you put the colors here, you *replace* the default
    // colors, so in this case you will need to define a replacement for 
    // white in bg-white, here as 'cloud'.
    colors: {
      'ocean': '#16c0b0',
      'leaf': '#84cf6a',
      'mist': '#d8d8d8',
      'midnight': '#39495c',
      'cloud': '#ffffff',
    },
    screens: {
      'md': '860px',
    },    
    extend: {
      // If colors went in here, the default colors would be useable
    },
  },
  plugins: [],
}
