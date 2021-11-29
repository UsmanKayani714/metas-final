import React, { useState } from "react";
import "./CountDown.css";

const CountDown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSec, setTimerSec] = useState("00");
  const x = setInterval(() => {
    const nowdate = new Date();
    const now_utc = Date.UTC(
      nowdate.getUTCFullYear(),
      nowdate.getUTCMonth(),
      nowdate.getUTCDate(),
      nowdate.getUTCHours(),
      nowdate.getUTCMinutes(),
      nowdate.getUTCSeconds(),
      0
    );
    console.log(now_utc);

    const endDate = new Date();
    const end_utc = Date.UTC(endDate.getUTCFullYear(), 11, 10, 11, 0, 0);
    console.log(end_utc);

    let startingTime = new Date(now_utc);
    let endingTime = new Date(end_utc);

    let remainingTime = endingTime - startingTime;
    let days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    console.log(days);
    let hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    let sec = Math.floor((remainingTime % (1000 * 60)) / 1000);
    days = days < 10 ? "0" + days : days;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    sec = sec < 10 ? "0" + sec : sec;

    if (remainingTime < 0) {
      clearInterval(x);
    } else {
      setTimerDays(days);
      setTimerHours(hours);
      setTimerMinutes(minutes);
      setTimerSec(sec);
    }
  }, 1000);

  return (
    <div>
      <div className="container text-white">
        <div className="row justify-content-center text-white bold">
          {/* <div className="col-8"> */}
          <div className="box text-center col-md-2 col-3 text-center  mx-md-3">
            <h2 className="text-white">{timerDays}</h2>
            <h2 className="smallphone">Days</h2>
          </div>
          <div className="box col-md-2 col-3 text-center  mx-md-3">
            <h2 className="">{timerHours}</h2>
            <h2 className="smallphone">HOURS</h2>
          </div>
          <div className="box col-md-2 col-3 text-center  mx-md-3">
            <h2 className="">{timerMinutes}</h2>
            <h2 className="smallphone">Mins</h2>
          </div>
          <div className="box col-md-2 col-3 text-center  mx-md-3">
            <h2 className="">{timerSec}</h2>
            <h2 className="smallphone">Secs</h2>
          </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default CountDown;
