import { StyleSheet, Text, View } from 'react-native';
import WelcomeView from './views/welcome.view';

export default function App() {
  return (
    <View style= {styles.container}>
      <WelcomeView></WelcomeView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
