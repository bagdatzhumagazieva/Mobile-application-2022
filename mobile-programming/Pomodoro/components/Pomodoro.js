import { Component } from "react";
import Timer from "./Timer";

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      work: 0.5,
      break: 5,
      status: "work",
    };
  }

  handleTimerStatus = () => {
    if (this.state.status === "work") {
      this.setState({
        status: "break",
      });
    } else {
      this.setState({
        status: "work",
      });
    }
  };

  handleTime = () => {
    if (this.state.status === "work") {
      return this.state.work;
    } else {
      return this.state.break;
    }
  };

  render() {
    let time = this.handleTime();
    return (
      <Timer
        status={this.state.status}
        Oncomplete={this.handleTimerStatus}
        period={time}
      />
    );
  }
}
export default Pomodoro;
