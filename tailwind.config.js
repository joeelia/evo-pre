/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
//const colors = require('tailwindcss/colors')
module.exports = {
  theme: {
    extend: {
      // colors: {
      //   // Add the colors you want
      //   orange: colors.orange,
      //   rose: colors.rose,
      // },
      fontFamily: {
        exo: ['"Exo 2"', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/ui')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
