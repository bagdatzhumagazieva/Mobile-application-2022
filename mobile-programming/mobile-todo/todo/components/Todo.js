import { View, Text, TouchableOpacity, Image ,StyleSheet } from "react-native";
import Checkbox from 'expo-checkbox';

const Todo = ({ todo, onCheck, onDelete }) => {
  return (
    <View style={styles.container}>
      <Checkbox value={todo.completed} onValueChange={() => onCheck(todo.id)}/>
      <Text style={todo.completed ? styles.checked : styles.text} key={todo.id}>{todo.title}</Text>
      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <Image style={styles.deleteBtn} source={require('../assets/delete.png')}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
    marginBottom: 10,
  },
  text: {
    width: '70%',
    fontSize: 18,
    textDecorationLine: 'none'
  },
  deleteBtn: {
    width: 30,
    height: 30
  },
  checked: {
    width: '70%',
    fontSize: 18,
    textDecorationLine: 'line-through'
  }
});

export default Todo;
