import { ActivityIndicator, View } from 'react-native'
import { Timetable } from "../timetable/Timetable"
import useLocation from '../hooks/useLocation';
import { useStations } from '../hooks/useStations';
import { getNearestStation } from './utils/getNearestStation';

export const Home = () => {
  const location = useLocation()
  const { data } = useStations()
  const nearestStation = data && location ? getNearestStation(data, location.coords) : undefined

  // TODO: Show loading indicator when nearestStation is undefined

  if (!nearestStation) {
    return <ActivityIndicator/>
  }

  return (
    <View style={{flex: 1}}>
      <Timetable abbreviation={nearestStation.abbr}/>
    </View>
  )
}