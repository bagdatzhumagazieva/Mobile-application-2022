import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class ShowTimer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>
          {Math.floor(this.props.time / 60)
            .toString()
            .padStart(2, "0") +
            ":" +
            (this.props.time % 60).toString().padStart(2, "0")}
        </Text>
      </View>
    );
  }
}

export default ShowTimer;

const styles = StyleSheet.create({
  container: {
    margin: 24,
    padding: 24,
    alignItems: "center",
  },
  textStyle: {
    fontSize: 50,
    fontWeight: "bold",
  },
});
