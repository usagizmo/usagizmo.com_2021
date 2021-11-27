module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: `futura-pt, YuGothic, 'Yu Gothic Medium', 'Yu Gothic', Verdana, Meiryo, sans-serif`,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
