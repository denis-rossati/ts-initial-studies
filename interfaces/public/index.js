import { handleAdd } from './classes/createLi.js';
const form = document.querySelector('form');
const taskList = document.querySelector('ul');
const taskInput = document.querySelector('#task-name-input');
const [submitButton, removeCompleted, removeAllButton, removeSelected,] = document.querySelectorAll('button');
const selectTaskOnDblClick = (e) => {
    const selected = e.target;
    const oldSelected = document.querySelector('.selected');
    if (oldSelected) {
        oldSelected.classList.remove('selected');
    }
    selected.className += 'selected';
};
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const addLi = new handleAdd();
    const newLI = new handleAdd().createLi(taskInput.value);
    addLi.render(newLI, taskList);
    document.querySelectorAll('li').forEach((li) => {
        li.addEventListener('click', selectTaskOnDblClick);
    });
});
window.onload = () => {
};
