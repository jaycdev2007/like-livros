/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          700: "#543320"
        }
      },
      backgroundImage: {
        "img-fundo": "url('https://media.graphassets.com/output=format:jpg/resize=width:400,height:200,fit:crop/E3JoNlPkQ1WMyrPDFq8S')",
      }

    },
  },
  plugins: [],
}
