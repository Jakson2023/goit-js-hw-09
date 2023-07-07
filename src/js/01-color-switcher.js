const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
let timerId = null;
buttonStop.disabled = true;
buttonStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    const randColor = getRandomHexColor();
    document.body.style.backgroundColor = randColor;
  }, 1000);
  buttonStart.disabled = true;
  buttonStop.disabled = false;
});

buttonStop.addEventListener('click', () => {
  clearInterval(timerId);
  buttonStart.disabled = false;
  buttonStop.disabled = true;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
