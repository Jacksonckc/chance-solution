import type { Config } from 'tailwindcss';

export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Source Code Pro', 'Monaco', 'monospace'],
        rounded: ['Quicksand', 'system-ui', 'sans-serif'],
        modern: ['Montserrat', 'system-ui', 'sans-serif']
      },
      colors: {
        // Light Pink Theme
        pink: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724'
        },
        // Light Blue Theme
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554'
        },
        // Neutral/Gray Theme
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a'
        },
        // Theme-specific colors
        primary: {
          pink: {
            light: '#fce7f3',
            DEFAULT: '#ec4899',
            dark: '#be185d',
            accent: '#f472b6'
          },
          blue: {
            light: '#dbeafe',
            DEFAULT: '#3b82f6',
            dark: '#1d4ed8',
            accent: '#60a5fa'
          },
          neutral: {
            light: '#f5f5f5',
            DEFAULT: '#737373',
            dark: '#404040',
            accent: '#a3a3a3'
          }
        },
        secondary: {
          pink: {
            light: '#fdf2f8',
            DEFAULT: '#f9a8d4',
            dark: '#db2777',
            accent: '#fbcfe8'
          },
          blue: {
            light: '#eff6ff',
            DEFAULT: '#93c5fd',
            dark: '#2563eb',
            accent: '#bfdbfe'
          },
          neutral: {
            light: '#fafafa',
            DEFAULT: '#d4d4d4',
            dark: '#525252',
            accent: '#e5e5e5'
          }
        },
        background: {
          pink: {
            light: '#fdf2f8',
            DEFAULT: '#fce7f3',
            dark: '#831843'
          },
          blue: {
            light: '#eff6ff',
            DEFAULT: '#dbeafe',
            dark: '#1e3a8a'
          },
          neutral: {
            light: '#fafafa',
            DEFAULT: '#f5f5f5',
            dark: '#171717'
          }
        },
        surface: {
          pink: {
            light: '#ffffff',
            DEFAULT: '#fdf2f8',
            dark: '#9d174d'
          },
          blue: {
            light: '#ffffff',
            DEFAULT: '#eff6ff',
            dark: '#1e40af'
          },
          neutral: {
            light: '#ffffff',
            DEFAULT: '#fafafa',
            dark: '#262626'
          }
        },
        text: {
          pink: {
            light: '#831843',
            DEFAULT: '#be185d',
            dark: '#fce7f3'
          },
          blue: {
            light: '#1e3a8a',
            DEFAULT: '#1d4ed8',
            dark: '#dbeafe'
          },
          neutral: {
            light: '#171717',
            DEFAULT: '#404040',
            dark: '#f5f5f5'
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      },
      boxShadow: {
        soft: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-pink':
          '0 2px 15px -3px rgba(236, 72, 153, 0.1), 0 10px 20px -2px rgba(236, 72, 153, 0.05)',
        'soft-blue':
          '0 2px 15px -3px rgba(59, 130, 246, 0.1), 0 10px 20px -2px rgba(59, 130, 246, 0.05)'
      },
      gradientColorStops: {
        'pink-gradient': {
          from: '#fce7f3',
          to: '#f9a8d4'
        },
        'blue-gradient': {
          from: '#dbeafe',
          to: '#93c5fd'
        },
        'neutral-gradient': {
          from: '#f5f5f5',
          to: '#d4d4d4'
        }
      }
    }
  },
  plugins: []
} satisfies Config;
