const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', handleBtnStartClick);
refs.stopBtn.addEventListener('click', handleBtnStopClick);

function handleBtnStartClick(evt) {
  timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.setAttribute('disabled', 'disabled');
}

function handleBtnStopClick(evt) {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
