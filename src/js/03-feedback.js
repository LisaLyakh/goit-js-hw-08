import throttle from 'lodash.throttle';

const inputEmailEl = document.querySelector('input');
const inputMessageEl = document.querySelector('textarea');
const formEl = document.querySelector('form');


formEl.addEventListener('input', throttle(inLocalStoradge, 500));
formEl.addEventListener('submit', onSubmitForm);


const savedData = localStorage.getItem('feedback-form-state');
const parsedData = JSON.parse(savedData);

if (parsedData) {
    inputEmailEl.value = parsedData.email;
    inputMessageEl.value = parsedData.message;
}

console.log(localStorage);

function inLocalStoradge() {
    const email = inputEmailEl.value;
    const message = inputMessageEl.value;
    localStorage.setItem('feedback-form-state', JSON.stringify({ email, message }));
}

function onSubmitForm(event) {
    event.preventDefault();
    const email = event.currentTarget.elements.email.value;
    const message = event.currentTarget.elements.message.value;

    if (email === "" || message === "") {
        return alert('Пожалуйста, заполните все поля');
    }

    const objectData = {
        message,
        email,
    };
    console.log(objectData);

    localStorage.removeItem('feedback-form-state');
    formEl.reset();
}
