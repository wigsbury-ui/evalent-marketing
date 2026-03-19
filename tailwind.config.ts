import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#07112e', 50: '#e8effe', 600: '#0d52dd' },
        brand: { DEFAULT: '#002ec1', mid: '#0d52dd' }
      },
      fontFamily: {
        sans: ['Figtree', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
export default config
