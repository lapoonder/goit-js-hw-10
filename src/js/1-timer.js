'use strict';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

iziToast.settings({
  timeout: 5000,
  resetOnHover: true,
  icon: 'material-icons',
  animateInside: false,
  transitionIn: 'fadeIn',
  transitionOut: 'fadeOut',
  position: 'topRight',
  titleColor: '#fff',
  titleLineHeight: '24',
  backgroundColor: '#ef4040',
  progressBarColor: '#b51b1b',
  messageColor: '#fff',
  messageSize: '16',
  messageLineHeight: '24',
});

let userSelectedDate, intervalId, timerElement;
const statusbtn = document.querySelector('button[data-start]'),
  inputField = document.querySelector('#datetime-picker'),
  errorImage = '../img/error.png',
  options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      userSelectedDate = selectedDates[0];
      checkingDate();
    },
  };

flatpickr('#datetime-picker', options); //Подключаю библиотеку отображения выбора даты и времени
statusbtn.disabled = true; //Делаю кнопку запуска отсчета не активной

statusbtn.addEventListener('click', () => {
  if (checkingDate()) {
    inputField.disabled = true; // Поле выбора даты делаю не активным
    changeTimeOnSite(); //Сразу после клика отобразит оставшееся время
    intervalId = setInterval(changeTimeOnSite, 1000); // Запуск счетчика с интервалом 1 секунда
  }
  statusbtn.disabled = true; //Делаю кнопку запуска отсчета не активной
});

function checkingDate() {
  //Если выбрана дата из прошлого
  if (Date.now() - userSelectedDate.getTime() > 0) {
    statusbtn.disabled = true; //Делаю кнопку запуска отсчета не активной
    // Отобразить уведомление о необходимости выбрать дату из будущего
    iziToast.error({
      class: 'error_message',
      title: 'Error',
      iconUrl: `${errorImage}`,
      message: 'Please choose a date in the future',
    });
    return false;
  } else {
    statusbtn.disabled = false; //Делаю кнопку запуска отсчета активной
    return true;
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function changeTimeOnSite() {
  const timeToEnd = userSelectedDate.getTime() - Date.now();

  if (timeToEnd > 0) {
    const timeItNow = convertMs(timeToEnd),
      // Создаю клон существующего таймера, вношу в него текущее оставшееся время и делаю замену текущего счетчика на готовый клон
      timerOriginal = document.querySelector('.timer'),
      timerClone = timerOriginal.cloneNode(true);
    for (let key in timeItNow) {
      timerElement = timerClone.querySelector(`[data-${key}]`);
      timerElement.textContent = timeItNow[key].toString().padStart(2, '0');
    }
    timerOriginal.replaceWith(timerClone);
  } else {
    clearInterval(intervalId);
    inputField.disabled = false;
  }
}
