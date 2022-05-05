import { View, StyleSheet } from "react-native";
import Pomodoro from "./components/Pomodoro";

const App = () => {
  return (
    <View style={styles.container}>
      <Pomodoro />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000'
  },
});

export default App;