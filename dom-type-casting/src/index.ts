// veja essa aula para explicações melhores: https://www.youtube.com/watch?v=hcuKd-Q_tP8&list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI&index=11
const form = document.querySelector('form') as HTMLFormElement;
const nameInput = document.querySelector('.nameInput') as HTMLInputElement;
const genderInput = document.querySelector('#gender') as HTMLSelectElement;
const ageInput = document.querySelector('#ageInput') as HTMLInputElement;
const messageInput = document.querySelector('#messageInput') as HTMLTextAreaElement;
const messageMonitors = document.querySelector('div') as HTMLDivElement;

type sendFormType = Event;

type capsuleTypes = {
  name: string,
  gender: string,
  age: number,
  message: string,
}

type capsuleInfoTypes = {
  name: string,
  gender: string,
  age: string,
  message: string,
}


const launchThroughTheSpace = (message: string) => {
  const marsWillReceive = document.createElement('p');
  marsWillReceive.textContent = message;
  marsWillReceive.className = "terraqueousMessage";
  messageMonitors.appendChild(marsWillReceive);
  return "Mensagem enviada!!!!!";
}


const createMessage = (evt: sendFormType): string => {
  evt.preventDefault();

  console.log("May God's love be with you")

  const { name, gender, age, message }: capsuleTypes = {
    name: nameInput.value,
    gender: genderInput.value,
    age: ageInput.valueAsNumber,
    message: messageInput.value,
  }

  const transmission: string =`${name}, um ${gender} que tem ${age} anos, enviou essa mensagem: "${message}"`;
  
  return launchThroughTheSpace(transmission);
}

form.addEventListener('submit', createMessage);