import { StyleSheet, View, Text } from "react-native";

const Navbar = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red",
    height: 80, 
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'lowercase'
  },
});

export default Navbar;
