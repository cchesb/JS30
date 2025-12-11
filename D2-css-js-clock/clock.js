
function setDate() {
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  {
    seconds === 0
      ? (secondHand.style.transition = "none")
      : (secondHand.style.transition = "all 0.05s");
  }

  const minutes = now.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  {
    minutes === 0
      ? (minuteHand.style.transition = "none")
      : (minuteHand.style.transition = "all 0.05s");
  }

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  {
    hours === 0
      ? (hourHand.style.transition = "none")
      : (hourHand.style.transition = "all 0.05s");
  }
}
setInterval(setDate, 1000);

function currentTime(){
    const currentTime = document.querySelector('.current-time')
    const now = new Date().toLocaleTimeString(); 
    console.log(now);
    currentTime.innerText = `${now}`
}
currentTime()