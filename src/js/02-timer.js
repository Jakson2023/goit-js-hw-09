import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const selectors = {
  input: document.querySelector('input[type="text"]'),
  startButton: document.querySelector('button[data-start]'),
  days: document.querySelector('.field [data-days]'),
  hours: document.querySelector('.field [data-hours]'),
  minutes: document.querySelector('.field [data-minutes]'),
  seconds: document.querySelector('.field [data-seconds]'),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    valueSelectedDates(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

let differenceTime = 0;
let formatDate = null;
let timerId = null;
function valueSelectedDates(selectedDates) {
  const currentDate = new Date();
  if (selectedDates <= currentDate) {
    selectors.startButton.disabled = true;
    return window.alert('Please choose a date in the future');
  } else {
    selectors.startButton.disabled = false;
  }
differenceTime = selectedDates.getTime() - currentDate;
formatDate = convertMs(differenceTime);
console.log(formatDate);
}



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
  
  console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}




  function onClick(){
     timerId =  setInterval(timerStart, 1000);
      function timerStart (){
      differenceTime -= 1000;
          
      }

  }
  selectors.startButton.addEventListener ('click', onClick);


  console.log(timerStart);



