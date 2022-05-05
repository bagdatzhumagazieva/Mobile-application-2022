import { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Buttons = (props) => {
  if (props.running === true) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={props.pause}
        >
          <Text style={styles.buttonText}>Stop</Text>
        </TouchableOpacity>
      </View>
    );
  } 
  else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={props.play}
        >
          <Text style={styles.buttonText}>Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  buttonStyle: {
    alignItems: "center",
    backgroundColor: "#FFA500",
    padding: 20,
    flexDirection: "row",
    marginRight: 10,
    height: 80,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    fontWeight: "300",
  },
});

export default Buttons;
