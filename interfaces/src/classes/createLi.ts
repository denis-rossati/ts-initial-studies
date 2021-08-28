import { createLiFormat } from "../interfaces/createLiFormat.js";

export class handleAdd implements createLiFormat {
  constructor() {};

  createLi(_task: string,) {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    
    const liText = document.createElement('p');
    liText.textContent = _task;

    const container = document.createElement('div');
    container.classList.add('li-content');
    container.appendChild(liText);
    container.appendChild(checkbox);

    const newLi = document.createElement('li');
    newLi.appendChild(container);
    return newLi;
  }

  render(newElement: HTMLLIElement, parentNode: HTMLUListElement) {
    parentNode.appendChild(newElement);
  }
}