import { extendTheme } from 'native-base'
import { TYPOGRAPHY } from './typography'

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#E3F2F9',
      100: '#C5E4F3',
      200: '#A2D4EC',
      300: '#7AC1E4',
      400: '#47A9DA',
      500: '#0088CC',
      600: '#007AB8',
      700: '#006BA1',
      800: '#005885',
      900: '#003F5E',
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: '#d97706',
    },
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: 'dark',
  },
  fonts: TYPOGRAPHY.FONTS,
  letterSpacings: TYPOGRAPHY.LETTER_SPACINGS,
  lineHeights: TYPOGRAPHY.LINE_HEIGHTS,
  fontSizes: TYPOGRAPHY.FONT_SIZES,
  fontConfig: TYPOGRAPHY.FONT_CONFIG,
  components: {
    Text: TYPOGRAPHY.TEXT,
  },
})

// 2. Get the type of the CustomTheme
type ThemeType = typeof theme

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends ThemeType {}
}
