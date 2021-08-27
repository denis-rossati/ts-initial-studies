// veja essa aula para explicações melhores: https://www.youtube.com/watch?v=hcuKd-Q_tP8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=11
const form = document.querySelector('form') as HTMLFormElement;
const nameInput = document.querySelector('.nameInput') as HTMLInputElement;
const genderInput = document.querySelector('#gender') as HTMLSelectElement;
const messageInput = document.querySelector('#messageInput') as HTMLTextAreaElement;
const ageInput = document.querySelector('#ageInput') as HTMLInputElement;

type sendFormType = Event;

const sendMessage = (evt: sendFormType): void => {
  evt.preventDefault();
  const { value: name } = nameInput;
  const { value: gender } = genderInput;
  const { value: message } = messageInput;
  const { valueAsNumber: age } = ageInput;

  console.log(
    `${name}, a ${gender} that is ${age} years old, have sended this message to mars:`,
    message
  );
}

form.addEventListener('submit', sendMessage);