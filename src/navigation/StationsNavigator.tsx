import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LocationProvider } from '../hooks/useLocation';
import { StationsProvider } from '../hooks/useStations';
import { Text, useColorScheme } from 'react-native'
import { Home } from '../screens/home/Home';
import { AllStations } from '../screens/stations/AllStations';

const Stack = createStackNavigator();

export default function StationsNavigator() {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = isDarkMode ? 'black' : 'white'

  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor }}}>
      <Stack.Screen name="Stations" component={AllStations} />
    </Stack.Navigator>
  );
}
