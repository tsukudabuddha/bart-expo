export const TYPOGRAPHY = {
  LETTER_SPACINGS: {
    xs: '-0.02em',
    sm: '-0.01em',
    md: '-0.005em',
    lg: 0,
    xl: '.04em',
    '2xl': '.08em',
  },
  FONT_SIZES: {
    '3xs': 6.4,
    '2xs': 8,
    xs: 10,
    sm: 11,
    md: 12,
    lg: 13,
    xl: 15,
    '2xl': 16,
    '3xl': 17,
    '4xl': 20,
    '5xl': 22,
    '6xl': 28,
    '7xl': 34,
  },
  LINE_HEIGHTS: {
    '3xs': 9.6,
    '2xs': 12,
    xs: 16,
    sm: 18,
    md: 20,
    lg: 21,
    xl: 22,
    '2xl': 25,
    '3xl': 28,
    '4xl': 34,
    '5xl': 40,
  },
  // FONTS: {
  //   heading: 'Epilogue-Medium',
  //   body: 'Inter-Regular',
  //   mono: 'Inter-Medium',
  // },
  // FONT_CONFIG: {
  //   'Inter-Regular': {
  //     400: {
  //       normal: 'Inter-Regular',
  //     },
  //   },
  //   'Epilogue-Medium': {
  //     500: {
  //       normal: 'Epilogue-Medium',
  //     },
  //   },
  // },
  TEXT: {
    baseStyle: {
      fontWeight: '400',
      // fontFamily: 'Inter-Regular',
      fontSize: '3xl', // default is out body variant
      lineHeight: 'xl', // default is out body variant
      letterSpacing: 'xs', // default is out body variant
    },
    variants: {
      largeTitle: {
        // fontFamily: 'Epilogue-Medium',
        fontWeight: '500',
        fontSize: '7xl',
        lineHeight: '5xl',
      },
      title1: {
        // fontFamily: 'Epilogue-Medium',
        fontWeight: '500',
        fontSize: '6xl',
        lineHeight: '4xl',
      },
      title2: {
        // fontFamily: 'Epilogue-Medium',
        fontWeight: '500',
        fontSize: '5xl',
        lineHeight: '3xl',
      },
      title3: {
        // fontFamily: 'Epilogue-Medium',
        fontWeight: '500',
        fontSize: '4xl',
        lineHeight: '2xl',
      },
      headline: {
        // fontFamily: 'Epilogue-Medium',
        fontWeight: '500',
        fontSize: '3xl',
        lineHeight: 'xl',
      },
      callout: {
        fontSize: '2xl',
        lineHeight: 'lg',
      },
      subhead: {
        // fontFamily: 'Epilogue-Medium',
        fontWeight: '500',
        fontSize: 'xl',
        lineHeight: 'md',
      },
      footnote: {
        fontSize: 'lg',
        lineHeight: 'sm',
        letterSpacing: 'sm',
      },
      caption1: {
        fontSize: 'md',
        lineHeight: 'xs',
        letterSpacing: 'md',
      },
      caption1Caps: {
        // fontFamily: 'Inter-Medium',
        fontSize: 'md',
        lineHeight: 'xs',
        letterSpacing: '2xl',
        textTransform: 'uppercase',
      },
      caption2: {
        fontSize: 'sm',
        lineHeight: '2xs',
        letterSpacing: 'md',
      },
      caption2Caps: {
        // fontFamily: 'Inter-Medium',
        fontSize: 'sm',
        lineHeight: '2xs',
        letterSpacing: 'xl',
        textTransform: 'uppercase',
      },
      caption3: {
        fontSize: 'xs',
        lineHeight: '2xs',
        letterSpacing: 'lg',
      },
      caption3Caps: {
        // fontFamily: 'Inter-Medium',
        fontSize: '2xs',
        lineHeight: '2xs',
        letterSpacing: 'xl',
        textTransform: 'uppercase',
      },
    },
  },
}
