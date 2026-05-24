/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nx-green': '#0D2818',
        'nx-green-deep': '#061811',
        'nx-green-soft': '#143524',
        'nx-green-line': '#1f4030',
        'nx-cream': '#F5EFE0',
        'nx-cream-soft': '#FAF6EB',
        'nx-cream-line': '#E6DFCC',
        'nx-ink': '#0A1A12',
        'nx-muted': '#6B7E72',
        'nx-accent': '#B8C9A8',
      },
      fontFamily: {
        display: ['Sora', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'nx': '4px',
      },
    },
  },
  plugins: [],
}
