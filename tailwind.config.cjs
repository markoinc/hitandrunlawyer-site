/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000',
          light: '#1a1a1a',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#276EF1',
          light: '#4284f5',
          dark: '#1a5ad9',
        },
        accent: {
          DEFAULT: '#09091a',
          purple: '#7B68EE',
          green: '#06c167',
        }
      },
    },
  },
  plugins: [],
}
