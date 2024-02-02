import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeModules } from 'react-native';
import IncrementButton from './IncrementButton';

const { CounterModule } = NativeModules;
export default function App() {
  return (
    <View style={styles.container}>
      <IncrementButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
