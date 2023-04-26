import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, useColorScheme } from 'react-native'
import { AllStations } from '../screens/stations/AllStations'
import { Station } from '../screens/stations/Station'
import { Screens } from '../constants/screens'
import { ParamList } from '../constants/paramlist'

const Stack = createStackNavigator<ParamList>()

export default function StationsNavigator() {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = isDarkMode ? 'black' : 'white'

  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor }, headerTintColor: 'white' }}>
      <Stack.Screen name={Screens.ALL_STATIONS} component={AllStations} options={{ title: 'All Stations' }} />
      <Stack.Screen name={Screens.STATION} component={Station} options={{ headerTintColor: 'white' }} />
    </Stack.Navigator>
  )
}
