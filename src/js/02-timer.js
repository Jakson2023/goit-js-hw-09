import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '400px',
  position: 'center-top',
  distance: '20px',
  opacity: 1,
  fontSize: '30px',
});

const selectors = {
  input: document.querySelector('input[type="text"]'),
  startButton: document.querySelector('button[data-start]'),
  days: document.querySelector('.field [data-days]'),
  hours: document.querySelector('.field [data-hours]'),
  minutes: document.querySelector('.field [data-minutes]'),
  seconds: document.querySelector('.field [data-seconds]'),
};

selectors.startButton.disabled = true;
selectors.startButton.style.backgroundColor = "red";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    if (selectedDates[0] <= currentDate) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      selectors.startButton.disabled = false;
      selectors.startButton.style.backgroundColor = "green";
    }
  },
};

const fp = flatpickr('#datetime-picker', options);

let timerId = null;

function onClick() {
  const selectedDate = fp.selectedDates[0];
  timerId = setInterval(() =>{
    const currentDate = new Date();
    let differenceTime = selectedDate - currentDate;
    differenceTime -= 1000;
    selectors.startButton.disabled = true;
    selectors.startButton.style.backgroundColor = "red";
    if (differenceTime < 0) {
      clearInterval(timerId);
      selectors.startButton.disabled = false;
      return;
    }
    formatDate(convertMs(differenceTime));
  },1000)
}

selectors.startButton.addEventListener('click', onClick);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

function formatDate({ days, hours, minutes, seconds }) {
  selectors.days.textContent = addLeadingZero(days);
  selectors.hours.textContent = addLeadingZero(hours);
  selectors.minutes.textContent = addLeadingZero(minutes);
  selectors.seconds.textContent = addLeadingZero(seconds);
}
