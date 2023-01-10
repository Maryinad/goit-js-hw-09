import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr('#datetime-picker', options);

const timer = {
  dedline: new Date(2023, 0, 10, 5, 3),
  intervalID: null,
  isActive: false,

  rootSelector: document.querySelector('.timer'),
  //   btnStart: document.querySelector('[data-start]'),

  //   startTimer() {
  //     btnStart.addEventListener('click', () => {
  //       this.start();
  //     });
  //   },

  start() {
    this.intervalID = setInterval(() => {
      const currentTime = Date.now();

      const diffTime = this.dedline - currentTime;

      if (diffTime <= 0) {
        this.stop();

        return;
      }
      const { days, hours, minutes, seconds } = this.convertMs(diffTime);

      this.rootSelector.querySelector('[data-days]').textContent = days;
      this.rootSelector.querySelector('[data-hours]').textContent = hours;
      this.rootSelector.querySelector('[data-minutes]').textContent = minutes;
      this.rootSelector.querySelector('[data-seconds]').textContent = seconds;

      //   console.log(days, hours, minutes, seconds);
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalID);
  },

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    // Remaining minutes
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    // Remaining seconds
    const seconds = addLeadingZero(
      Math.floor((((ms % day) % hour) % minute) / second)
    );

    return { days, hours, minutes, seconds };
  },

  // console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
  // console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
  // console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
};

// timer.start();

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

const btnStart = document.querySelector('[data-start]');

const startTimer = btnStart.addEventListener('click', e => {
  timer.start();
});
