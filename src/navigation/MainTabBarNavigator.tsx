import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LocationProvider } from '../hooks/useLocation'
import { StationsProvider } from '../hooks/useStations'
import { Text, useColorScheme } from 'react-native'
import { Home } from '../screens/home/Home'
import StationsNavigator from './StationsNavigator'
import { Screens } from '../constants/screens'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

function SettingsScreen() {
  return <Text>Settings Screen</Text>
}

export default function MainTabBarNavigator() {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = isDarkMode ? 'black' : 'white'

  return (
    <LocationProvider>
      <StationsProvider>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor, borderTopWidth: 0 } }}>
          <Tab.Screen
            name={Screens.HOME_MAIN}
            component={Home}
            options={{
              title: 'Home',
              headerShown: false,
              tabBarIcon: ({ color }) => <Ionicons name="home" size={25} color={color} />,
            }}
          />
          <Tab.Screen
            name={Screens.STATIONS_MAIN}
            component={StationsNavigator}
            options={{ title: 'Stations', tabBarIcon: ({ color }) => <Ionicons name="list-outline" size={25} color={color} /> }}
          />
        </Tab.Navigator>
      </StationsProvider>
    </LocationProvider>
  )
}
