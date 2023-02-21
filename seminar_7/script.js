// ЗАДАНИЕ 1
// 1. Дан блок, внутри него необходимо создать элемент div с классом item, разместить текст “Элемент внутри” и задать стили
// 2. Цвет текста синий
//    Рамка сплошная черная
//    Цвет фона #f8f8f8
//    Внутренний отступ 16px
// 3. Добавить данному блоку класс item_1 (использовать setAttribute)

// 1.
const divBlockEl = document.querySelector('.block');
const divItemEl = document.createElement('div');

divBlockEl.appendChild(divItemEl);

// 2.
divItemEl.setAttribute('class', 'item');
divItemEl.textContent = 'Элемент внутри';
divItemEl.style.color = 'blue';
divItemEl.style.border = '#000 1px solid';
divItemEl.style.backgroundColor = '#f8f8f8';
divItemEl.style.padding = '16px';
divItemEl.style.marginBottom = '30px';

// 3.
divItemEl.setAttribute('class', 'item_1');



// ЗАДАНИЕ 2
// 1. Необходимо с помощью querySelector найти параграф с классом text
// 2. Вывести в консоль соседний элемент h2
// 3. Вывести в консоль родительский элемент content
// 4. Вывести в консоль картинку
// 5. Вывести в консоль родительский элемент elem

// 1.
const divClassElem = document.querySelector('.text');

// 2.
console.log(divClassElem.previousElementSibling); // Если заранее знаем, что элемент h2 предыдущий

for (let i = 0; i < divClassElem.parentElement.children.length; i++) {
    const element = divClassElem.parentElement.children[i];
    if (element.tagName == 'H2') {
        console.log(element);
    }
} // Если заранее знаем, только что элемент h2 является соседним

// 3.
console.log(divClassElem.parentElement);

// 4.
console.log(divClassElem.parentElement.previousElementSibling);

// 5.
console.log(divClassElem.parentElement.parentElement);



// ЗАДАНИЕ 3
// С помощью querySelector найти элемент h2  и вывести в консоль всех его родителей

const h2Elem = document.querySelector('.subtitle');
let classNameParentEl = h2Elem.parentElement;
while (classNameParentEl.className) {
    console.log(classNameParentEl.className);
    classNameParentEl = classNameParentEl.parentElement;
}


// ЗАДАНИЕ 4
// Дано поле ввода и кнопка отправить, необходим реализовать функционал, если пользователь нажимает на кнопку отправить, а поле ввода пустое, то под полем ввода и кнопкой должен появиться заголовок h2 с текстом вы не заполнили поле ввода
// Цвет у рамки сделать красным

const formEl = document.querySelector('form');
const inputEl = formEl.children[0];
const buttonEl = formEl.children[1];

const h2Element = document.createElement('h2');
formEl.append(h2Element);

buttonEl.onclick = function () {
    if (inputEl.value == 0) {
        h2Element.textContent = 'Вы не заполнили поле ввода';
        inputEl.style.border = 'red 1px solid';
    }
    else {
        h2Element.textContent = '';
        inputEl.style.border = '#767676 1px solid';
    }
}


// ЗАДАНИЕ 5
// Создайте с помощью javascript новый элемент button
// Добавьте текст для кнопки “Отправить”
// При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const divContentEl = document.querySelector('.content_btn');
const buttonElem = document.createElement('button');
const buttonResetElem = document.createElement('button');

divContentEl.appendChild(buttonElem);
buttonElem.textContent = 'Отправить';

buttonElem.onclick = function () {
    buttonElem.textContent = 'Текст отправлен';
    divContentEl.appendChild(buttonResetElem);
    buttonResetElem.textContent = 'Сбросить';
}

buttonResetElem.onclick = function () {
    buttonElem.textContent = 'Отправить';
    buttonResetElem.remove();
}