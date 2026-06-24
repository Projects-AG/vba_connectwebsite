/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1E3D',
          900: '#0B1E3D',
          800: '#142A4F',
          700: '#1C3661',
        },
        royal: {
          DEFAULT: '#1E3A8A',
          50: '#EEF2FC',
          100: '#DCE5F8',
          400: '#3B5EDB',
          500: '#2C4BC4',
          600: '#1E3A8A',
          700: '#162C68',
        },
        mist: {
          DEFAULT: '#E8EDF7',
          50: '#F7F9FC',
          100: '#EEF2FA',
          200: '#E8EDF7',
        },
        verified: '#0FA968',
        accent: {
          DEFAULT: '#E0560F',
          50: '#FDF1E9',
          100: '#FBE0CC',
          400: '#F0782F',
          500: '#E0560F',
          600: '#C2470C',
          700: '#9C3909',
        },
        leaf: {
          DEFAULT: '#1B7A43',
          50: '#EAF6EF',
          400: '#2C9A57',
          500: '#1B7A43',
          600: '#156135',
        },
        paper: {
          DEFAULT: '#FBFAF7',
          100: '#F5F3EE',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(11, 30, 61, 0.08)',
        card: '0 8px 30px -6px rgba(11, 30, 61, 0.12)',
        lift: '0 20px 45px -12px rgba(30, 58, 138, 0.25)',
        glass: '0 8px 32px 0 rgba(11, 30, 61, 0.1)',
      },
      backgroundImage: {
        'grad-brand': 'linear-gradient(135deg, #1E3A8A 0%, #2C4BC4 50%, #3B5EDB 100%)',
        'grad-radial-soft': 'radial-gradient(circle at 30% 20%, rgba(59,94,219,0.12), transparent 60%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
