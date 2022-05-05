import { Component } from "react";
import { StyleSheet, Text } from "react-native";

class Header extends Component {
  handleDisplay = () => {
    if (this.props.status === "work") {
      if (this.props.running === true) {
        return "Work";
      } else {
        return "Work";
      }
    } else {
      if (this.props.running === true) {
        return "Break time";
      } else {
        return "Break time";
      }
    }
  };
  render() {
    let texttoshow = this.handleDisplay();
    return <Text style={styles.textStyle}>{texttoshow}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 40,
    marginTop: 50,
    fontWeight: "500",
    flex: 1,
  },
});

export default Header;
