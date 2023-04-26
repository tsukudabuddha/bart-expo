import { FlatList, useColorScheme } from 'react-native'
import { useStations } from '../../hooks/useStations'
import { StationItem } from './StationItem'
import { ParamList, Screens } from '../../navigation/StationsNavigator'
import { StackNavigationProp } from '@react-navigation/stack'

type Props = {
  navigation: StackNavigationProp<ParamList>
}

export const AllStations = ({ navigation }: Props) => {
  const { data: stations } = useStations()
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = isDarkMode ? 'black' : 'white'

  const onPress = (abbr: string) => {
    // TODO: navigate to timetable screen
    navigation.navigate(Screens.STATION, { abbr })
  }

  return (
    <FlatList
      data={stations ?? []}
      keyExtractor={item => item.name}
      renderItem={({ item }) => <StationItem item={item} onPress={onPress} />}
      style={{ backgroundColor }}
    />
  )
}
