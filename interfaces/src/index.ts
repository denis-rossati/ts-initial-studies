import { handleAdd } from './classes/createLi.js';
const form = document.querySelector('form') as HTMLFormElement;
const taskList = document.querySelector('ul') as HTMLUListElement;
const taskInput = document.querySelector('#task-name-input') as HTMLInputElement;
const [
  submitButton,
  removeCompleted,
  removeAllButton,
  removeSelected,
] = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  const addLi = new handleAdd();
  const newLI = new handleAdd().createLi(taskInput.value);
  addLi.render(newLI, taskList)
});
