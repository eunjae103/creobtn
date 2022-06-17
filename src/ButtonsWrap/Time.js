import { Component } from "react";
import moment from "moment";

class Time extends Component {
  state = {
    time: 0,
    isStarted: false,
  };

  startTimer = () => {
    this.setState({
      isStarted: true,
      time: this.state.time,
    });

    this.timer = setInterval(
      () =>
        this.setState({
          time: this.state.time + 1,
        }),
      1000
    );
  };

  stopTimer = () => {
    this.setState({
      isStarted: false,
    });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      time: 0,
      isStarted: false,
    });
  };

  render() {
    return (
      <div className="timer">
        <h4>{moment().minute(0).second(this.state.time).format("mm : ss")}</h4>
        <button onClick={this.startTimer}> start </button>
        <button onClick={this.stopTimer}> stop </button>
        <button onClick={this.resetTimer}> reset </button>
      </div>
    );
  }
}

export default Time;

// const Time = () => {
//   const [time, setTime] = useState(moment.duration(0));
//   const [timeTick, setTimeTick] = useState(null);

//   const startTimer = () => {
//     const tick = () =>
//       setTime((prevTime) => prevTime.clone().add(1, "seconds"));
//     const timeTick = setInterval(() => {
//       tick();
//     }, 1000);
//     setTimeTick(timeTick);
//   };

//   const pauseTimer = () => {
//     if (timeTick) {
//       clearInterval(timeTick);
//     }
//   };

//   const stopTimer = () => {
//     pauseTimer();
//     setTime(moment.duration(0));
//   };

//   return (
//     <div className="App">
//       <h1>타이머</h1>
//       <p>{moment(time.asSeconds(), "s").format("mm:ss")}</p>
//       <button type="button" onClick={() => startTimer()}>
//         시작
//       </button>
//       <button type="button" onClick={() => pauseTimer()}>
//         일시정지
//       </button>
//       <button type="button" onClick={() => stopTimer()}>
//         정지
//       </button>
//     </div>
//   );
// };
