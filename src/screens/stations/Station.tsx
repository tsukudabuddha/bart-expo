import { ParamList, Screens } from "../../navigation/StationsNavigator"
import { Timetable } from "../../timetable/Timetable"
import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { View, useColorScheme } from 'react-native'

type Props = {
  route: RouteProp<ParamList, Screens.STATION>
  navigation: StackNavigationProp<ParamList>
}

export const Station = ({route, navigation}: Props) => {
  const { abbr } = route.params

  navigation.setOptions({ title: abbr })

  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = isDarkMode ? 'black' : 'white'
  return <View style={{backgroundColor, flex: 1, borderTopWidth: 0, paddingTop: 24}}><Timetable abbreviation={abbr} hideTitle={true} hasNavigationHeader={true}/></View>
}