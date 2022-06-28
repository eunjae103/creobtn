// import { useState } from "react";
// import moment from "moment";

// const Timer = () => {
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

//       <p>{moment(time.seconds(), "s").format("mm:ss")}</p>
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
// export default Timer;

import React, { useState, useEffect } from "react";
import moment from "moment";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setSeconds(0);
    setIsActive(false);
  }

  setInterval(() => {
    setSeconds((seconds) => seconds + 1);
  }, 1000);

  // useEffect(() => {
  //   let interval = null;
  //   if (isActive) {
  //     interval = setInterval(() => {
  //       setSeconds((seconds) => seconds + 1);
  //     }, 1000);
  //   } else if (!isActive && seconds !== 0) {
  //     clearInterval(interval);
  //   }
  //   return () => clearInterval(interval);
  // }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {moment().minute(0).second(seconds).format("mm : ss")}
      </div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? "active" : "inactive"
          }`}
          onClick={toggle}
        >
          {isActive ? "Pause" : "Start"}
        </button>
        <button className="button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
