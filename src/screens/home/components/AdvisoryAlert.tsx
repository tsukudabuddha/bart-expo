import { Button, HStack, Text, View } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import { SheetManager } from 'react-native-actions-sheet'
import { Sheets } from '../../../sheets/sheets'
import { TouchableOpacity } from 'react-native'

// TODO: Take in text and only show when there's something other than no delays reported

type Props = {
  text: string
}

const NO_DELAYS_TEXT = 'No delays reported.'

export const AdvisoryAlert = ({ text }: Props) => {
  const shouldShow = text !== NO_DELAYS_TEXT

  return shouldShow ? (
    <TouchableOpacity onPress={() => SheetManager.show(Sheets.SERVICE_ADVISORY, { payload: { text } })}>
      <HStack
        backgroundColor="yellow.400"
        borderRadius="md"
        marginX="24px"
        space="16px"
        alignItems="center"
        marginBottom="24px"
        marginTop="24px"
        paddingX="16px"
        paddingY="12px"
      >
        <View borderRadius="md" h="30px" w="30px" backgroundColor="yellow.500" justifyContent="center" alignItems="center">
          <Ionicons name="alert-outline" color="white" />
        </View>
        <Text variant="headline">Service advisory</Text>
      </HStack>
    </TouchableOpacity>
  ) : (
    <></>
  )
}
