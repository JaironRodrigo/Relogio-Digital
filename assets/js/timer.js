const playTimer = document.getElementById("playTimer");

playTimer.addEventListener("click", () => {
  const hours = document.getElementById("hourTimer");
  const min = document.getElementById("minTimer");
  const sec = document.getElementById("secTimer");

  let duration =
    parseInt(hours.value) * 60 * 60 +
    parseInt(min.value) * 60 +
    parseInt(sec.value);

  display = document.getElementById("clockTimer");
  timer(duration, display);
});
const timer = (duration, display) => {
  let timer = duration;
  let hours, min, sec;

  let interval = setInterval(() => {
    hours = Math.floor(timer / 60 / 60);
    min = Math.floor(timer / 60 - hours * 60);
    sec = Math.floor(timer % 60);

    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    display.innerHTML = `${hours}:${min}:${sec}`;

    timer -= 1;

    if (timer < 0) {
      display.innerHTML = "TIME UP";
      clearInterval(interval);
    }
  }, 1000);
};
