import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Home } from './src/home/Home';

const queryClient = new QueryClient()

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{backgroundColor: isDarkMode ? 'black' : 'white'}}>
        <StatusBar/>
        <Home />
    </SafeAreaView>
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
