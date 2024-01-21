"use strict"
const inputTask = document.querySelector('.input'),
buttonForm = document.querySelector('.button_form'),
noTask = document.querySelector('.task'),
newTask = document.querySelector('.new_task'),
clearButton = document.querySelector('.button');

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

        saveValue();

        newInput.addEventListener('click', function () {
            newLi.classList.toggle('completed');
        });
        clearButton.disabled = false;
}
if(inputTask.value !== ''){
    createTask();
}
const saveValue = function(){
    // const arrValue = [];
    // for (let element of newTask.querySelectorAll('li')) {
    //     arrValue.push(element.innerHTML);
    // }JSON.stringify(arrValue)
    localStorage.setItem('task', newTask.innerHTML);
}
function getItem(){
    // const savedItems = JSON.parse(localStorage.getItem('task'));
    newTask.innerHTML += localStorage.getItem('task');
    if (newTask.innerHTML !== ''){
        noTask.classList.add('hide');
        clearButton.disabled = false;
    }
}
getItem();
function clearNewTask() {
    newTask.innerHTML = '';
    noTask.classList.remove('hide');
    clearButton.disabled = false;
    localStorage.clear();
}

buttonForm.addEventListener("click", createTask);
clearButton.addEventListener("click", clearNewTask);

