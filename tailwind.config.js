/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        "text-white": "#f3f0ee"
      },
      backgroundColor: {
        "primary-300": "#DA6D45",
        "primary-500": "#D9876A",
        "primary-700": "#823F26",
        "primary-900": "#130D0A"
      },
      fontFamily: {
        mono: ["Roboto Mono", "ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
      }
    },
  },
  plugins: [],
}

