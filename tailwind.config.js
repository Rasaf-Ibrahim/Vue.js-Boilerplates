module.exports = {
  
  mode: 'jit',
   

  // purge: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],

  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },


  darkMode: 'class', // or 'media' or 'class'

  theme: {

    extend: {
  
    },
  },


  variants: {

    extend: {

    },

  },


  plugins: [],
}