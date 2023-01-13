import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputFieldEl: document.querySelector('.form'),
};

refs.inputFieldEl.addEventListener('submit', onCreatePromises);

function createPromise(position, delay) {
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

function onCreatePromises(e) {
  e.preventDefault();

  let delay = e.currentTarget.elements.delay.value;
  const step = e.currentTarget.elements.step.value;
  const amount = e.currentTarget.elements.amount.value;

  for (let i = 1; i <= amount; i += 1) {
    // delay += step;
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}
