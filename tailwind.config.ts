import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#1a237e',
        'electric-blue': '#2196f3',
        'tech-white': '#f8f9fa',
        'circuit-green': '#4caf50',
        'signal-orange': '#ff5722',
      },
      fontFamily: {
        heading: ['var(--font-space-grotesk)'],
        body: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
}

export default config
