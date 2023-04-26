import { ActivityIndicator, View, useColorScheme } from 'react-native'
import { Timetable } from '../../timetable/Timetable'
import useLocation from '../../hooks/useLocation'
import { useStations } from '../../hooks/useStations'
import { getNearestStation } from './utils/getNearestStation'
import { useNavigation } from '@react-navigation/native'
import { useEffect } from 'react'

export const Home = () => {
  const location = useLocation()
  const { data } = useStations()
  const nearestStation = data && location ? getNearestStation(data, location.coords) : undefined
  const isDarkMode = useColorScheme() === 'dark'

  // TODO: Show loading indicator when nearestStation is undefined

  if (!nearestStation) {
    return <ActivityIndicator />
  }

  return (
    <View style={{ flex: 1, backgroundColor: isDarkMode ? 'black' : 'white' }}>
      <Timetable abbreviation={nearestStation.abbr} />
    </View>
  )
}
