export class handleAdd {
    constructor() { }
    ;
    createLi(_task) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const liText = document.createElement('p');
        liText.textContent = _task;
        const container = document.createElement('div');
        container.className = 'li-content';
        container.appendChild(liText);
        container.appendChild(checkbox);
        const newLi = document.createElement('li');
        newLi.appendChild(container);
        return newLi;
    }
    render(newElement, parentNode) {
        parentNode.appendChild(newElement);
    }
}
