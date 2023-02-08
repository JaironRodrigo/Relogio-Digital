// Chronometer
let sec = 00;
let min = 00;
let hour = 00;
let chronometer;

function zero(number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
}

function time() {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
    if (min == 60) {
      hour++;
      min = 0;
    }
  }

  document.getElementById("chrono").innerText =
    zero(hour) + ":" + zero(min) + ":" + zero(sec);
}

function start() {
  time();
  chronometer = setTimeout(start, 1000);
  preventDefault(start);
}

function pause() {
  clearInterval(chronometer);
}

function stop() {
  clearInterval(chronometer);
  sec = 0;
  min = 0;
  hour = 0;
  document.getElementById("chrono").innerText = "00:00:00";
}
