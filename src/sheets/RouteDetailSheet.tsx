import { Text, VStack, View, useTheme } from 'native-base'
import ActionSheet, { SheetProps } from 'react-native-actions-sheet'
import { useColorScheme } from 'react-native'

type Props = {
  destAbbr: string
}

export const RouteDetailSheet = (props: SheetProps<Props>) => {
  const isDarkMode = useColorScheme() === 'dark'
  const { colors } = useTheme()

  return (
    <ActionSheet id={props.sheetId} containerStyle={{ backgroundColor: isDarkMode ? colors.gray[500] : colors.white }}>
      <VStack paddingX="24px" paddingY="16px" space="16px">
        <Text variant="headline" color="white">
          Origin
        </Text>
        <Text variant="headline" color="white">
          Destination
        </Text>
        <Text variant="headline" color="white">
          Upcoming Trains
        </Text>
      </VStack>
    </ActionSheet>
  )
}
