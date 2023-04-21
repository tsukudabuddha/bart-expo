import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './src/home/Home';
import { LocationProvider } from './src/hooks/useLocation';
import { StationsProvider } from './src/hooks/useStations';

const queryClient = new QueryClient()

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <QueryClientProvider client={queryClient}>
      <LocationProvider>
        <StationsProvider>
          <SafeAreaView style={{backgroundColor: isDarkMode ? 'black' : 'white', flex: 1}}>
            <StatusBar/>
            <Home />
          </SafeAreaView>
        </StationsProvider>
      </LocationProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
