/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        colors: {
            'primary': '#1D3A74',
            'black': '#1C1A1A',
            "gray": "#787878",
            'secondary': 'rgba(1, 8, 168, 0.3)',
        },
      borderColor: {
        DEFAULT: '#001C53',
      }
    },
  },
  plugins: [],
}
