import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NavigationContainer } from '@react-navigation/native'
import MainTabBarNavigator from './src/navigation/MainTabBarNavigator'
import 'react-native-gesture-handler'
import { NativeBaseProvider } from 'native-base'
import { SheetProvider } from 'react-native-actions-sheet'
import './src/sheets/sheets'

const queryClient = new QueryClient()

export default function App() {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <NativeBaseProvider>
          <SheetProvider>
            <SafeAreaView style={{ backgroundColor: isDarkMode ? 'black' : 'white', flex: 1 }}>
              <StatusBar />
              <MainTabBarNavigator />
            </SafeAreaView>
          </SheetProvider>
        </NativeBaseProvider>
      </NavigationContainer>
    </QueryClientProvider>
  )
}
