"use strict"
const inputTask = document.querySelector('.input'),
buttonForm = document.querySelector('.button_form'),
noTask = document.querySelector('.task'),
newTask = document.querySelector('.new_task'),
clearButton = document.querySelector('.button');


console.log(document.querySelectorAll('li'));
const saveValue = function(){
    const arrValue = [];
    for (let element of newTask.querySelectorAll('li')) {
        arrValue.push(element.textContent);
    }
    localStorage.setItem('task', JSON.stringify(arrValue));
}
const createTask = function(){
        const valueTask = inputTask.value;

        noTask.classList.add('hide');

        const newLi = document.createElement('li');
        newTask.append(newLi);
        inputTask.value = '';

        const newLabel = document.createElement('label');
        newLabel.textContent = valueTask;
        newLi.append(newLabel);

        const newInput = document.createElement('input');
        newInput.type = 'checkbox';
        newInput.value = valueTask;
        newLabel.append(newInput);

        newInput.addEventListener('click', function () {
            newLi.classList.toggle('completed');
        });

        clearButton.disabled = false;
        saveValue();
}
if(inputTask.value !== ''){
    createTask();
}







buttonForm.addEventListener("click", createTask);


