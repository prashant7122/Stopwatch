let milisecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let currentStatus = "stopped";
let interval = null;
let currentMilisecond = 0;
let currentSecond = 0;
let currentMinute = 0;
let currentHour = 0;
const startWatch = () => {
  milisecond++;
  if (milisecond / 100 === 1) {
    second++;
    milisecond = 0;
    if (second / 60 === 1) {
      minute++;
      second = 0;
      if (minute / 60 === 1) {
        hour++;
        minute = 0;
      }
    }
  }

  document.getElementById("display").innerHTML = `${
    hour < 10 ? "0" + hour : hour
  }: ${minute < 10 ? "0" + minute : minute}: ${
    second < 10 ? "0" + second : second
  }: ${milisecond < 10 ? "0" + milisecond : milisecond}`;
};

const start = () => {
  if (currentStatus === "stopped") {
    interval = window.setInterval(startWatch, 10);
    document.getElementById("start").innerHTML = "Stop";
    document.getElementById("result").innerHTML = "";
    document.getElementById("previous-result").innerHTML = "";
    document.getElementById("current-result").innerHTML = "";
    currentStatus = "started";
    currentMilisecond = milisecond;
    currentSecond = second;
    currentMinute = minute;
    currentHour = hour;
  } else {
    window.clearInterval(interval);
    document.getElementById("start").innerHTML = "Start";
    document.getElementById(
      "previous-result"
    ).innerHTML = `Previous : ${currentHour} Hr ${currentMinute} Min ${currentSecond} Sec ${currentMilisecond} MSec `;
    document.getElementById(
      "current-result"
    ).innerHTML = `Current : ${hour} Hr ${minute} Min ${second} Sec ${milisecond} MSec `;

    currentMilisecond = milisecond - currentMilisecond;
    currentSecond = second - currentSecond;
    currentMinute = minute - currentMinute;
    currentHour = hour - currentHour;
    if (currentMilisecond < 0) {
      currentMilisecond += 100;
      currentSecond--;
      if (currentSecond < 0) {
        currentSecond += 60;
        currentMinute--;
        if (currentMinute < 0) {
          currentMinute += 60;
          currentHour--;
        }
      }
    }
    document.getElementById(
      "result"
    ).innerHTML = `Difference : ${currentHour} Hr ${currentMinute} Min ${currentSecond} Sec ${currentMilisecond} MSec `;
    currentStatus = "stopped";
    currentMilisecond = milisecond;
    currentSecond = second;
    currentMinute = minute;
    currentHour = hour;
  }
};

const reset = () => {
  window.clearInterval(interval);
  milisecond = 0;
  second = 0;
  minute = 0;
  hour = 0;
  document.getElementById("display").innerHTML = "00: 00: 00: 00";
  document.getElementById("start").innerHTML = "Start";
  document.getElementById("result").innerHTML = "";
  document.getElementById("previous-result").innerHTML = "";
  document.getElementById("current-result").innerHTML = "";
  currentStatus = "stopped";
};
