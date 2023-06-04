import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import RootNavigation from './src/RootNavigation';


export default function App() {

  return (
      <RootNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
