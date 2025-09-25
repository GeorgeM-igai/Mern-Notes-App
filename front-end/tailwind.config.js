import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',                  // Ensure it includes index.html
    './src/**/*.{js,jsx,ts,tsx}',     // Add support for .jsx and .tsx files
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["night"],
  },
}
