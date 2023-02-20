function updateClock() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  var timeString = `${addZeroBefore(hours)}:${addZeroBefore(minutes)}:${addZeroBefore(seconds)}`;
  var clock = document.getElementById("clock");
  clock.textContent = timeString;
}

function addZeroBefore(num) {
  return (num < 10 ? "0" : "") + num;
}

updateClock();
setInterval(updateClock, 1000);
