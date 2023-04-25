import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LocationProvider } from '../hooks/useLocation';
import { StationsProvider } from '../hooks/useStations';
import { Text, useColorScheme } from 'react-native'
import { Home } from '../screens/home/Home';
import StationsNavigator from './StationsNavigator';

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return <Text>Settings Screen</Text>;
}

export default function MainTabBarNavigator() {
  const isDarkMode = useColorScheme() === 'dark'
  const backgroundColor = isDarkMode ? 'black' : 'white'

  return (
    <LocationProvider>
      <StationsProvider>
        <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor, borderTopWidth: 0 }}}>
          <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Tab.Screen name="StationsNavigator" component={StationsNavigator} />
        </Tab.Navigator>
      </StationsProvider>
    </LocationProvider>
  );
}
