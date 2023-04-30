import { Text, View } from 'native-base'
import ActionSheet, { SheetProps } from 'react-native-actions-sheet'

type Props = {
  text: string
}

export const ServiceAdvisorySheet = (props: SheetProps<Props>) => {
  return (
    <ActionSheet id={props.sheetId}>
      <View>
        <Text>{props.payload?.text}</Text>
      </View>
    </ActionSheet>
  )
}
