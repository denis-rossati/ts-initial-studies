"use strict";
const form = document.querySelector('form');
const nameInput = document.querySelector('.nameInput');
const genderInput = document.querySelector('#gender');
const messageInput = document.querySelector('#messageInput');
const ageInput = document.querySelector('#ageInput');
const sendMessage = (evt) => {
    evt.preventDefault();
    const { value: name } = nameInput;
    const { value: gender } = genderInput;
    const { value: message } = messageInput;
    const { valueAsNumber: age } = ageInput;
    console.log(`${name}, a ${gender} that is ${age} years old, have sended this message to mars:`, message);
};
form.addEventListener('submit', sendMessage);
