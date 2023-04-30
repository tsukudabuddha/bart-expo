import { Button, HStack, View } from 'native-base'
import { Text } from '../../../core-ui/Text'
import { Ionicons } from '@expo/vector-icons'
import { SheetManager } from 'react-native-actions-sheet'
import { Sheets } from '../../../sheets/sheets'

// TODO: Take in text and only show when there's something other than no delays reported

type Props = {
  text: string
}

const NO_DELAYS_TEXT = 'No delays reported.'

export const AdvisoryAlert = ({ text }: Props) => {
  // const shouldShow = text !== NO_DELAYS_TEXT
  const shouldShow = true
  return shouldShow ? (
    <HStack
      backgroundColor="yellow.400"
      borderRadius="md"
      marginX="24px"
      justifyContent="space-between"
      alignItems="center"
      marginBottom="24px"
      marginTop="24px"
      padding="16px"
    >
      <View borderRadius="md" h="40px" w="40px" backgroundColor="yellow.500" justifyContent="center" alignItems="center">
        <Ionicons name="alert-outline" color="white" />
      </View>
      <Text variant="headline" alignment="left">
        Service advisory
      </Text>
      <Button borderRadius="2xl" bgColor="yellow.600" onPress={() => SheetManager.show(Sheets.SERVICE_ADVISORY, { payload: { text } })}>
        Expand
      </Button>
    </HStack>
  ) : (
    <></>
  )
}
