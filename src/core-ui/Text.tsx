import { PropsWithChildren } from 'react'
import { Text as RNText, StyleProp, TextStyle, useColorScheme } from 'react-native'

type TextVariant = 'headline' | 'body' | 'footnote'

type Props = PropsWithChildren & {
  style?: StyleProp<TextStyle>
  variant?: TextVariant
  alignment?: TextStyle['textAlign']
  color?: string
}

const getStyles = (variant: TextVariant): StyleProp<TextStyle> => {
  switch (variant) {
    case 'headline':
      return { fontSize: 17, fontWeight: '600' } // semibold
    case 'body':
      return { fontSize: 17, fontWeight: '400' } // regular
    case 'footnote':
      return { fontSize: 13, fontWeight: '400' } // regular
  }
}

export const Text = ({ style, variant = 'body', alignment = 'auto', color, children }: Props) => {
  const isDarkMode = useColorScheme() === 'dark'
  const textStyle = getStyles(variant)
  const textColor = color ? color : isDarkMode ? 'white' : 'black'
  return <RNText style={[style, textStyle, { textAlign: alignment }, { color: textColor }]}>{children}</RNText>
}
