/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@tremor/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  prefix: '',
  theme: {
    transparent: 'transparent',
    current: 'currentColor',
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        tremor: {
          brand: {
            faint: '#eff6ff', // blue-50
            muted: '#bfdbfe', // blue-200
            subtle: '#60a5fa', // blue-400
            DEFAULT: '#3b82f6', // blue-500
            emphasis: '#1d4ed8', // blue-700
            inverted: '#ffffff', // white
          },
          background: {
            muted: '#f9fafb', // gray-50
            subtle: '#f3f4f6', // gray-100
            DEFAULT: '#ffffff', // white
            emphasis: '#374151', // gray-700
          },
          border: {
            DEFAULT: '#e5e7eb', // gray-200
          },
          ring: {
            DEFAULT: '#e5e7eb', // gray-200
          },
          content: {
            subtle: '#9ca3af', // gray-400
            DEFAULT: '#6b7280', // gray-500
            emphasis: '#374151', // gray-700
            strong: '#111827', // gray-900
            inverted: '#ffffff', // white
          },
        },
        // dark mode
        darkTremor: {
          brand: {
            faint: '#0B1229', // custom
            muted: '#172554', // blue-950
            subtle: '#1e40af', // blue-800
            DEFAULT: '#3b82f6', // blue-500
            emphasis: '#60a5fa', // blue-400
            inverted: '#030712', // gray-950
          },
          background: {
            muted: '#131A2B', // custom
            subtle: '#1f2937', // gray-800
            DEFAULT: '#111827', // gray-900
            emphasis: '#d1d5db', // gray-300
          },
          border: {
            DEFAULT: '#1f2937', // gray-800
          },
          ring: {
            DEFAULT: '#1f2937', // gray-800
          },
          content: {
            subtle: '#4b5563', // gray-600
            DEFAULT: '#6b7280', // gray-600
            emphasis: '#e5e7eb', // gray-200
            strong: '#f9fafb', // gray-50
            inverted: '#000000', // black
          },
        },

        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      boxShadow: {
        // light
        tremorInput: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        tremorCard:
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        tremorDropdown:
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        // dark
        darkTremorInput: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        darkTremorCard:
          '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        darkTremorDropdown:
          '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      },
      fontSize: {
        tremorLabel: ['0.75rem'],
        tremorDefault: ['0.875rem', { lineHeight: '1.25rem' }],
        tremorTitle: ['1.125rem', { lineHeight: '1.75rem' }],
        tremorMetric: ['1.875rem', { lineHeight: '2.25rem' }],
      },
      borderRadius: {
        tremorSmall: '0.375rem',
        tremorDefault: '0.5rem',
        tremorFull: '9999px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-satoshi)'],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        accordionDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 12px))" },
        },
        orbit: {
          "0%": {
              transform: "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
              transform: "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
      },
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
        },
        animation: {
          accordionDown: 'accordion-down 0.2s ease-out',
          accordionUp: 'accordion-up 0.2s ease-out',
          marquee: "marquee 20s linear infinite",
          orbit: "orbit calc(var(--duration)*1s) linear infinite",
          "accordion-down": "accordion-down 0.2s ease-out",
          "accordion-up": "accordion-up 0.2s ease-out",
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  safelist: [
    {
      pattern:
        /^(bg-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(text-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(border-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
      variants: ['hover', 'ui-selected'],
    },
    {
      pattern:
        /^(ring-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(stroke-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
    {
      pattern:
        /^(fill-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950))$/,
    },
  ],
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
    require('@headlessui/tailwindcss'),
    require('@tailwindcss/forms'),
  ],
};
