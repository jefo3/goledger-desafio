import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        primary: {
          base: '#3498db',
          light: '#65b4e4',
          dark: '#1f5a7b',
        },
        secundary: {
          base: '#9b59b6',
          light: '#b878d1',
          dark: '#7e419a',
        },
        error: colors.red[400],
      },
    },
  },
  plugins: [],
}
export default config
