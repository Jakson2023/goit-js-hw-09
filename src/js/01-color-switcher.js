const buttonStart = document.querySelector ('.button[data-start]');
const buttonStop = document.querySelector('.button[data-stop]');

buttonStart.addEventListener('click', startClick);
buttonStop.addEventListener('click', stopClick);
function startClick() {
    console.log(startClick);
}