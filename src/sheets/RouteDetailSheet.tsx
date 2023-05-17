import { Button, Text, VStack, View, useTheme } from 'native-base'
import ActionSheet, { SheetProps } from 'react-native-actions-sheet'
import { useColorScheme } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react'
import { PickerButton } from '../components/PickerButton'
import { useStations } from '../hooks/useStations'

type Props = {
  destAbbr: string
  originStation: Station
}

export const RouteDetailSheet = (props: SheetProps<Props>) => {
  const isDarkMode = useColorScheme() === 'dark'
  const { colors } = useTheme()

  const [destination, setDestination] = useState<Station | undefined>(undefined)
  const { data: stations } = useStations()

  // TODO: Get all stations on route

  return (
    <ActionSheet id={props.sheetId} containerStyle={{ backgroundColor: isDarkMode ? colors.gray[500] : colors.white }}>
      {stations ? (
        <VStack paddingX="24px" paddingY="16px" space="16px">
          {/* Origin */}
          <Text variant="headline" color="white">
            {`Origin: ${props.payload?.originStation.name}`}
          </Text>

          {/* Destination */}
          <Text variant="headline" color="white">
            Destination
          </Text>
          {/* Destination Picker Button */}
          <PickerButton
            selectedOption={destination?.name ?? ''}
            options={stations.map(s => s.name)}
            onValueChange={val => setDestination(stations.find(s => s.name === val))}
          />

          {/* Upcoming */}
          <Text variant="headline" color="white">
            Upcoming Trains
          </Text>
        </VStack>
      ) : (
        <></>
      )}
    </ActionSheet>
  )
}
