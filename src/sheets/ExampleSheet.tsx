import { Text, View } from 'native-base'
import ActionSheet, { SheetProps } from 'react-native-actions-sheet'
function ExampleSheet(props: SheetProps) {
  return (
    <ActionSheet id={props.sheetId}>
      <View>
        <Text>Hello World</Text>
      </View>
    </ActionSheet>
  )
}

export default ExampleSheet
