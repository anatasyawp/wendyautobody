/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: 'var(--color-brand-dark)',
          surface: 'var(--color-brand-surface)',
          card: 'var(--color-brand-card)',
          orange: '#FF5A1F',
          'orange-hover': '#e04c17',
          border: 'var(--color-brand-border)',
          'border-light': 'var(--color-brand-border-light)',
          text: 'var(--color-brand-text)',
          muted: 'var(--color-brand-muted)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
      }
    },
  },
  plugins: [],
}
