"use strict";
// veja essa aula para explicações melhores: https://www.youtube.com/watch?v=hcuKd-Q_tP8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=11
const form = document.querySelector('form');
const nameInput = document.querySelector('.nameInput');
const genderInput = document.querySelector('#gender');
const ageInput = document.querySelector('#ageInput');
const messageInput = document.querySelector('#messageInput');
const messageMonitors = document.querySelector('div');
const launchThroughTheSpace = (message) => {
    const marsWillReceive = document.createElement('p');
    marsWillReceive.textContent = message;
    marsWillReceive.className = "terraqueousMessage";
    messageMonitors.appendChild(marsWillReceive);
    return "Mensagem enviada!!!!!";
};
const createMessage = (evt) => {
    evt.preventDefault();
    console.log("May God's love be with you");
    const { name, gender, age, message } = {
        name: nameInput.value,
        gender: genderInput.value,
        age: ageInput.valueAsNumber,
        message: messageInput.value,
    };
    const transmission = `${name}, um ${gender} que tem ${age} anos, enviou essa mensagem: "${message}"`;
    return launchThroughTheSpace(transmission);
};
form.addEventListener('submit', createMessage);
