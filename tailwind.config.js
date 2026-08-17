/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'qd-bg':       '#080a0f',
        'qd-panel':    '#0d1117',
        'qd-surface':  '#131920',
        'qd-border':   '#1e2a3a',
        'qd-accent':   '#3ecf8e',
        'qd-accent2':  '#2dd4bf',
        'qd-teal':     '#14b8a6',
        'qd-cyan':     '#22d3ee',
        'qd-blue':     '#3b82f6',
        'qd-amber':    '#f59e0b',
        'qd-red':      '#ef4444',
        'qd-text':     '#e2e8f0',
        'qd-muted':    '#64748b',
        'qd-dim':      '#334155',
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'terminal-blink': 'terminal-blink 1.2s step-end infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.6s ease-out forwards',
        'slide-right': 'slide-right 0.6s ease-out forwards',
        'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
        'ticker': 'ticker 30s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'data-flow': 'data-flow 2s ease-in-out infinite',
        'counter-up': 'counter-up 2s ease-out forwards',
        'scan-line': 'scan-line 4s linear infinite',
      },
      keyframes: {
        'terminal-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-right': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        'ticker': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 5px rgba(62, 207, 142, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(62, 207, 142, 0.4)' },
        },
        'data-flow': {
          '0%': { opacity: '0.3', transform: 'translateY(-4px)' },
          '50%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0.3', transform: 'translateY(4px)' },
        },
        'counter-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
