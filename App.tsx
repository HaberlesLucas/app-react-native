import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hola mundo</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7800',
    alignItems: 'center',
    fontSize: 84,
    justifyContent: 'center',
  },
  text: {
    backgroundColor: 'black',
    color: 'white',
    fontSize: 24,
  }
});
