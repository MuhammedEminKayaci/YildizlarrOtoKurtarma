/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50:  '#f6f8fb',
          100: '#eef1f7',
          200: '#dde3ee',
          300: '#aeb7c7',
          400: '#828da0',
          500: '#647084',
          600: '#454f63',
          700: '#30394a',
          800: '#1a2233',
          900: '#101624',
          950: '#080c14'
        },
        brand: {
          50:  '#fff8e7',
          100: '#ffedb8',
          200: '#ffe08a',
          300: '#ffd15a',
          400: '#ffc02e',
          500: '#f5a900',
          600: '#d08a00',
          700: '#9d6500',
          800: '#754b00'
        },
        signal: {
          400: '#34d399',
          500: '#12b981',
          600: '#059669',
          700: '#047857'
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif'
        ]
      },
      boxShadow: {
        soft:    '0 2px 8px rgb(8 12 20 / 0.04), 0 6px 24px rgb(8 12 20 / 0.08)',
        card:    '0 4px 12px rgb(8 12 20 / 0.06), 0 12px 44px rgb(8 12 20 / 0.12)',
        premium: '0 8px 24px rgb(8 12 20 / 0.10), 0 28px 80px rgb(8 12 20 / 0.20)',
        glow:    '0 0 0 3px rgb(255 201 74 / 0.35), 0 12px 48px rgb(255 201 74 / 0.22)',
        'amber-soft': '0 10px 36px rgb(245 169 0 / 0.28)'
      },
      backgroundImage: {
        'premium-radial':
          'radial-gradient(circle at 20% 10%, rgb(255 209 90 / 0.24), transparent 26rem), radial-gradient(circle at 80% 0%, rgb(18 185 129 / 0.14), transparent 24rem)',
        'amber-grad':
          'linear-gradient(135deg, #ffd15a 0%, #ffb800 45%, #f5a900 100%)'
      },
      borderRadius: {
        apple: '1.5rem'
      },
      animation: {
        float: 'float 5s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' }
        },
        'pulse-ring': {
          '0%, 100%': { transform: 'scale(0.95)', opacity: '0.5' },
          '50%':      { transform: 'scale(1.15)', opacity: '0.15' }
        }
      }
    }
  },
  plugins: []
};
