import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F9F6EE',
        secondary: '#002C59',
        accent: '#FFE100',
        tertiary: '#592D00',
      },
      borderRadius: {
        sm: '0.625rem',
        DEFAULT: '1rem',
      },
      fontFamily: {
        anton: ['var(--font-anton)'],
        lato: ['var(--font-lato)'],
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
export default config;
