const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = null;

buttonStart.addEventListener('click', startClick);
buttonStop.addEventListener('click', stopClick);

function startClick() {
    timerId = setInterval(()=>{
        const randColor = getRandomHexColor();
  document.body.style.backgroundColor = randColor;
    },1000);
  
}
function stopClick() {
  clearInterval(timerId);
}
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
