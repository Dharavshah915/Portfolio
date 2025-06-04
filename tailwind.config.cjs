/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        "primary": "#242424",    // Slightly lighter dark grey for main content
        "secondary": "#f3f3f3",
        "slate": "#1A1A1A",      // Darker grey for sidebar
        "glow": "rgba(255, 255, 215, 0.4)",  // Off-white color for glow effect
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "ping-slow": {
          '75%, 100%': {
            transform: 'scale(1.5)',
            opacity: '0'
          }
        },
        "scroll-wheel": {
          '0%': {
            opacity: '0',
            transform: 'translateY(0)'
          },
          '50%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(10px)'
          }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ping-slow": "ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "scroll-wheel": "scroll-wheel 1.5s ease-in-out infinite"
      },
      textShadow: {
        'glow': '0 0 20px var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow': {
          'text-shadow': '0 0 30px var(--tw-shadow-color), 0 0 50px var(--tw-shadow-color)',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}
