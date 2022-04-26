import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const AddTodo = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const addTodo = () => {
    if (!title) {
      Alert.alert("Error");
    } else {
      onSubmit({ title, completed });
      setTitle("");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTitle(text)}
        value={title}
        placeholder="Add todo"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Add" onPress={addTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 10
  },
  input: {
    width: '80%',
    fontSize: 18,
    padding: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "red",
  },
});

export default AddTodo;
