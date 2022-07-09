import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

const delayEl = document.querySelector('[name="delay"]');
const stepEl = document.querySelector('[name="step"]');
const amountEl = document.querySelector('[name="amount"]');

formEl.addEventListener('submit', submitCreatePromises);

function submitCreatePromises(e) {
  e.preventDefault();

  let delay = delayEl.valueAsNumber;
  const stepVal = stepEl.valueAsNumber;
  const amountVal = amountEl.valueAsNumber;

  for (let i = 1; i <= amountVal; i += 1) {
    onCreatePromises(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${i} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`❌ Rejected promise ${i} in ${delay}ms`);
      });
    delay += stepVal;
  }
}

function onCreatePromises(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
