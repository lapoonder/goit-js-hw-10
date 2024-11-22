'use strict';
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import errorImage from '../img/error.png';
import okImage from '../img/ok.png';

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

let delay, state;
const form = document.querySelector('.form'),
  btn = document.querySelector('button'),
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

btn.addEventListener('click', readingParams);

const result = (delay, state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state == 'rejected') {
        reject(`Rejected promise in ${delay}ms`);
      }
      resolve(`Fulfilled promise in ${delay}ms`);
    }, delay);
  });
};

function readingParams(e) {
  e.preventDefault();
  delay = form.elements.delay.value;
  state = form.elements.state.value;
  result(delay, state)
    .then(resolve => fulfilledMessage(resolve))
    .catch(rejected => rejectedMessage(rejected));
  form.reset();
}

function rejectedMessage(textMessage) {
  iziToast.error({
    class: 'error_message',
    title: 'Error',
    iconUrl: `${errorImage}`,
    message: textMessage,
  });
}

function fulfilledMessage(textMessage) {
  iziToast.success({
    class: 'ok_message',
    backgroundColor: '#59A10D',
    progressBarColor: '#326101',
    title: 'OK',
    iconUrl: `${okImage}`,
    message: textMessage,
  });
}
