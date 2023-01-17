const refs = {
  btnStart: document.querySelector('.js-btn-start'),
  btnStop: document.querySelector('.js-btn-stop'),
  body: document.querySelector('body'),
};
let timerID = null;
// console.log(timerID);

refs.btnStart.addEventListener('click', changeColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  refs.btnStart.disabled = true;
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

refs.btnStop.addEventListener('click', () => {
  refs.btnStart.disabled = false;
  clearInterval(timerId);
});
