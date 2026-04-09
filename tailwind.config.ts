import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)',    'sans-serif'],
        code:    ['var(--font-code)',    'monospace'],
      },
      colors: {
        void: { DEFAULT: '#03030a', 2: '#070712', 3: '#0c0c1c' },
        amber: {
          DEFAULT: '#ff9500',
          warm:    '#ffb340',
          dim:     'rgba(255,149,0,0.08)',
          mid:     'rgba(255,149,0,0.18)',
        },
        white:  '#f5f3f0',
        silver: '#a8a5b0',
        stone:  '#5c5a68',
        ghost:  '#2e2c3a',
      },
      animation: {
        ticker:        'ticker 28s linear infinite',
        'pulse-amber': 'pulse-amber 2.5s ease-in-out infinite',
        'fade-up':     'fade-up 0.8s ease-out both',
        scan:          'scan 4s linear infinite',
      },
      keyframes: {
        ticker:        { from: { transform: 'translate3d(0,0,0)' }, to: { transform: 'translate3d(-50%,0,0)' } },
        'pulse-amber': { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
        'fade-up':     { from: { opacity: '0', transform: 'translate3d(0,28px,0)' }, to: { opacity: '1', transform: 'translate3d(0,0,0)' } },
        scan:          { '0%': { top: '-2px' }, '100%': { top: '100%' } },
      },
    },
  },
  plugins: [],
}
export default config
