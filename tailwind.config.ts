import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: '#3498db',
        secundary: '#9b59b6',
      },
    },
  },
  plugins: [],
}
export default config
