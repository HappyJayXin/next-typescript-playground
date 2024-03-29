module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './features/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      willChange: {
        opacity: 'opacity'
      }
    }
  },
  plugins: []
};
