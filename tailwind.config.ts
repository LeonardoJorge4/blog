import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        background: 'hsl(var(--background))',
        'background-secondary': 'var(--background-secondary)',
        card: 'var(--card)',

        // Text
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        label: 'var(--label)',

        // Borders & Separators
        border: 'var(--border)',

        // Primary & Highlight Colors
        primary: 'var(--primary)',
        'primary-hover': 'var(--primary-hover)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: ['2rem', { lineHeight: '1.2', fontWeight: '700' }], // 32px
        h2: ['1.75rem', { lineHeight: '1.2', fontWeight: '700' }], // 28px
        h3: ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }], // 24px
        h4: ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }], // 20px
        base: ['1rem', { lineHeight: '1.6', fontWeight: '400' }], // 16px
        small: ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }], // 14px
        tiny: ['0.75rem', { lineHeight: '1.4', fontWeight: '400' }], // 12px
      },
    },
  },
  plugins: [],
} satisfies Config;
