import Notiflix from 'notiflix';

Notiflix.Notify.init({
  width: '350px',
  position: 'center-top',
  distance: '10px',
  opacity: 1,
  
});

const btn = document.querySelector('button[type="submit"]');
btn.style.textAlign = "center";
btn.style.width = "auto";
btn.style.height = "auto";
btn.style.fontSize = "16px";
    


const inputForm = document.querySelector('.form');

function createPromise(position, delay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        res({ position, delay });
      } else {
        // Reject
        rej({ position, delay });
      }
    }, delay);
  });
}

function onClick(evt) {
  evt.preventDefault();
  let delay = Number(inputForm.delay.value);
  let amount = Number(inputForm.amount.value);
  let step = Number(inputForm.step.value);
  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}

inputForm.addEventListener('submit', onClick);
