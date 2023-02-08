// Navbar tabs
function option(clockOption) {
  let i;
  let x = document.getElementsByClassName("digital");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(clockOption).style.display = "flex";
}

// Clock
function digitalClock() {
  const clock = document.querySelector(".display");
  const date = new Date();
  const hours =
    zero(date.getHours()) +
    ":" +
    zero(date.getMinutes()) +
    ":" +
    zero(date.getSeconds());

  clock.textContent = hours;
}
function zero(number) {
  if (number < 10) {
    number = "0" + number;
  }
  return number;
}
setInterval(digitalClock, 1000);
