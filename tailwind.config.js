const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}', './public/**/*.{html}'],
  theme: {
    fontFamily: {
      sans: ['Roboto', ...defaultTheme.fontFamily.sans],
      serif: [
        'Merriweather',
        ...defaultTheme.fontFamily.sans,
      ],
    },
    fontSize: {
      xs: [],
      sm: [],
      md: [],
      lg: [],
      xl: [],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.01em',
          fontWeight: '500',
        },
      ],
      '3xl': [
        '1.875rem',
        {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
          fontWeight: '700',
        },
      ],
      '4xl': [],
      '5xl': [],
      '6xl': [
        '2.125rem',
        {
          lineHeight: '1.235',
          letterSpacing: '0.00735em',
          fontWeight: '400',
        },
      ],
      '7xl': [
        '3rem',
        {
          lineHeight: '1.167',
          letterSpacing: '0em',
          fontWeight: '400',
        },
      ],
      '8xl': [
        '3.75rem',
        {
          lineHeight: '1.2',
          letterSpacing: '-0.00833em',
          fontWeight: '300',
        },
      ],
      '9xl': [
        '6rem',
        {
          lineHeight: '1.167',
          letterSpacing: '-0.01562em',
          fontWeight: '300',
        },
      ],
    },
    extend: {},
  },
  plugins: [],
};
