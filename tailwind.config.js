module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    keyframes: {
      'accordion-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-accordion-content-height)' },
      },
      'accordion-up': {
        from: { height: 'var(--radix-accordion-content-height)' },
        to: { height: 0 },
      },
      'collapsable-down': {
        from: { height: 0 },
        to: { height: 'var(--radix-collapsible-content-height)' },
      },
      'collapsable-up': {
        from: { height: 'var(--radix-collapsible-content-height)' },
        to: { height: 0 },
      },
    },
    animation: {
      'accordion-down': 'accordion-down 0.2s ease-out',
      'accordion-up': 'accordion-up 0.2s ease-out',
      'collapsable-down': 'collapsable-down 0.2s ease-out',
      'collapsable-up': 'collapsable-up 0.2s ease-out',
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
