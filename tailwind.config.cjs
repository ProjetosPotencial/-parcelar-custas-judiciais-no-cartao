/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/lp-template.html', './src/**/*.{ts,tsx,js,jsx}'],
  corePlugins: { preflight: false }, // já temos reset próprio em styles.css/lp-inline.css
  theme: {
    extend: {
      fontFamily: {
        heading: ['Kufam', 'system-ui', 'sans-serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        button: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: { brand: {
        yellow: '#ffb800', 'yellow-01': '#ffcb31', 'yellow-light': '#ffd666', 'yellow-dark': '#e6ac00',
        brown: '#371b01', black: '#111111', 'text-primary': '#371b01', 'text-secondary': '#2e2e2e',
        'text-muted': '#6f6f6f', 'beige-light': '#f8f6f0', green: '#0f7b3a',
      }},
      borderRadius: { sm: '8px', md: '12px', lg: '16px', xl: '24px' },
      boxShadow: {
        card: '0 0 16px 0 rgba(0,0,0,0.08), 0 0 4px 0 rgba(0,0,0,0.08), 0 4px 24px 0 rgba(0,0,0,0.08)',
        soft: '0 2px 8px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}
