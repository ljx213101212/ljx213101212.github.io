const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{html,js,tsx,jsx}'],
  corePlugins: {
    gap: true,
    p: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    safeList: [],
    content: ['./index.html', './src/**/*.jsx', './src/**/*.js', './src/**/*.tsx', './src/**/*.ts'],
  },
  theme: {
    extend: {
      fontWeight: ['hover', 'focus'],
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      none: 'none',
      'gold-prev': '1 1 33.3333%',
      'gold-after': '1 1 66.6666%',
      5: '1 1 41.6667%;',
      7: '1 1 58.3333%',
    },
    colors: {
      gray: colors.neutral,
      slate: colors.slate,
    },
  },
  safelist: [
    {
      pattern: /.*/,
      variants: [
        'first',
        'last',
        'odd',
        'even',
        'visited',
        'checked',
        'empty',
        'read-only',
        'group-hover',
        'group-focus',
        'focus-within',
        'hover',
        'focus',
        'focus-visible',
        'active',
        'disabled',
      ],
    },
  ],
  plugins: [],
};
