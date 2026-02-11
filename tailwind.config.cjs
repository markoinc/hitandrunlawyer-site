/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4a2c6a',
          light: '#5d3a82',
          dark: '#3a2254',
        },
        secondary: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        accent: {
          DEFAULT: '#c0c0c0',
          silver: '#c0c0c0',
          purple: '#6b4d8a',
          green: '#10b981',
        }
      },
    },
  },
  plugins: [],
}
