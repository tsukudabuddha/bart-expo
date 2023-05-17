import { Picker } from '@react-native-picker/picker'
import { Button, View } from 'native-base'
import { useState } from 'react'

type Props = {
  selectedOption?: string
  options: string[]
  onValueChange: (value: string, index: number) => void
}

export const PickerButton = <T,>({ selectedOption, options, onValueChange }: Props) => {
  const [showPicker, setShowPicker] = useState(false)

  const togglePicker = () => {
    setShowPicker(!showPicker)
  }

  return (
    <View>
      <Button onPress={togglePicker}>{selectedOption}</Button>
      {/* Picker */}
      {showPicker && (
        <Picker selectedValue={selectedOption} onValueChange={onValueChange}>
          {options.map((option, index) => (
            <Picker.Item key={index} label={option} value={option} />
          ))}
        </Picker>
      )}
    </View>
  )
}
