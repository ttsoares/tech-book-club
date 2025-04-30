/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './utils/**/*.{js,ts,jsx,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      backgroundImage: {
        'light-grad': 'linear-gradient(90deg, #FFE3D2 0%, #FFF4EE 100%)',
        'dark-grad': 'linear-gradient(90deg, #364757 0%, #082831 100%)',
      },
      fontSize: {
        p1: ['3.875rem', { lineHeight: '120%', letterSpacing: '-2px', fontWeight: '700' }],
        p1m: ['2.375rem', { lineHeight: '120%', letterSpacing: '-2px', fontWeight: '700' }],
        p2: ['3.125rem', { lineHeight: '130%', letterSpacing: '-2px', fontWeight: '600' }],
        p2m: ['2.125rem', { lineHeight: '130%', letterSpacing: '-2px', fontWeight: '600' }],
        p3: ['2.125rem', { lineHeight: '130%', letterSpacing: '-1px', fontWeight: '600' }],
        p3m: ['1.5rem', { lineHeight: '110%', letterSpacing: '-1px', fontWeight: '600' }],
        p4: ['1.5rem', { lineHeight: '110%', letterSpacing: '-1px', fontWeight: '600' }],
        p4r: ['1.5rem', { lineHeight: '110%', letterSpacing: '-1px', fontWeight: '500' }],
        p5: ['1.25rem', { lineHeight: '140%', letterSpacing: '-0.5px', fontWeight: '500' }],
        p5sm: ['1.25rem', { lineHeight: '140%', letterSpacing: '-0.5px', fontWeight: '600' }],
        p6: ['1.125rem', { lineHeight: '130%', letterSpacing: '-1px', fontWeight: '600' }],
        p6m: ['1.rem', { lineHeight: '130%', letterSpacing: '-1px', fontWeight: '600' }],
        p7: ['0.875rem', { lineHeight: '120%', letterSpacing: '-1px', fontWeight: '500' }],
      },
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1440px',
      },
      colors: {
        c_n_9: 'rgb(6, 38, 48)',
        c_n_7: 'rgb(56, 81, 89)',
        c_n_2: 'rgb(230, 225, 223)',
        c_n_1: 'rgb(250, 245, 243)',
        c_n_0: 'rgb(255, 255, 255)',
        c_s_5: 'rgb(254, 163, 111)',
        c_s_1: 'rgb(255, 226, 229)',
        c_s_0: 'rgb(255, 245, 239)',
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
        InterIt: ['InterIt', 'sans-serif'],
        Martian: ['Martian', 'sans-serif'],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.text-gradient-brand': {
          backgroundImage: 'linear-gradient(107deg, #FF9A60 -11.37%, #062630 61.84%)',
          webkitBackgroundClip: 'text',
          backgroundClip: 'text',
          color: 'transparent',
        },
        '.bg-grad-norm': {
          backgroundImage: 'linear-gradient(90deg, #FFE2D1 0%, #FFF5EF 100%)',
        },
      });
    }),
  ],
};
