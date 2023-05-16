import { Text, View, useTheme } from 'native-base'
import ActionSheet, { SheetProps } from 'react-native-actions-sheet'
import { useColorScheme } from 'react-native'

type Props = {
  text: string
}

export const ServiceAdvisorySheet = (props: SheetProps<Props>) => {
  const isDarkMode = useColorScheme() === 'dark'
  const { colors } = useTheme()
  return (
    <ActionSheet id={props.sheetId} containerStyle={{ backgroundColor: isDarkMode ? colors.gray[500] : colors.white }}>
      <View paddingX="24px" paddingY="16px">
        <Text variant="title1" color="white" marginTop="24px">
          Service Advisory
        </Text>
        <Text color="white" marginTop="24px">
          {props.payload?.text}
        </Text>
      </View>
    </ActionSheet>
  )
}
