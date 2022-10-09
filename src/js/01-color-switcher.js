const startBtn = document.querySelector("button[data-start]");
const stopBtn = document.querySelector("button[data-stop]");
const bodyCol = document.querySelector("body");
let timerId;

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function timer () {
    timerId = setInterval(() => {
       
        bodyCol.style.backgroundColor = getRandomHexColor();
    }, 1000)
  }

  startBtn.addEventListener("click", () => {
    console.log("start");
    timer(getRandomHexColor);
  })

  stopBtn.addEventListener("click", () => {
    console.log("stop");
    clearInterval(timerId);
  })