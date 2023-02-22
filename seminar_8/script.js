// ЗАДАНИЕ 1
// 1. В html создать кнопку button
// 2. После загрузки страницы вывести в консоль текст “страница загрузилась”
// 3. Добавить событие onclick которое выводит в консоль текст “событие onclick”
// 4. Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

// 1. 2.
window.addEventListener('load', function (e) {
    console.log('Страница загрузилась');
})

// 3.
const button1El = document.querySelector('.btn');

button1El.onclick = function () {
    console.log('Cобытие onclick');
}

// 4.
document.addEventListener('click', function (e) {
    console.log('событие addEventListener');
})


// ЗАДАНИЕ 2
// 1. Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// 2. Добавить клик на кнопку , чтобы в консоль выводилась именно та кнопка на которую мы нажали
// 3. Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту кнопку выводит в консоль
// 4. Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту кнопку”

// 1. 2.
document.addEventListener('click', function (e) {
    console.log(e.target.className);
})

// 3.
const button4El = document.querySelector('.button4');
let counter = 0;
button4El.onclick = function () {
    counter++;
    console.log(`\"Кнопка 4\" Количество нажатий - ${counter}`);
}

// 4.
const button5El = document.querySelector('.button5');
button5El.onclick = function () {
    button5El.textContent = 'Вы нажали на эту кнопку';
}


// ЗАДАНИЕ 3
// 1. Создать кнопку, которая добавляет заголовок h1 с текстом, “Новый заголовок, данный элемент нужно расположить после кнопки
// 2. Создать вторую кнопку, которая будет удалять созданный заголовок h1
// 3. Создать третью кнопку, при наведении на которую в консоль будет выводиться текст “вы навели на данную кнопку” , как только вы убираем курсор мыши с кнопки, в консоли должен появиться текст “Наведения на кнопку больше нет”

// 1. 2.
const buttonEl = document.querySelector('.button6');
const buttonDeleteH1El = document.querySelector('.button7');

const h1El = document.createElement('h1');
buttonEl.parentElement.appendChild(h1El);

buttonEl.onclick = function () {
    h1El.textContent = 'Новый заголовок';
}

buttonDeleteH1El.onclick = function () {
    h1El.textContent = '';
}

// 3.
const buttonElem = document.querySelector('.button8');

buttonElem.addEventListener('mouseover', function () {
    console.log('Вы навели на данную кнопку');
})

buttonElem.addEventListener('mouseout', function () {
    console.log('Наведения на кнопку больше нет');
})


// ЗАДАНИЕ 4
// 1. Создать в html список состоящий из 3-х произвольных элементов li
// 2. Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// 3. Создать кнопку, которая будет удалять первый элемент из созданного списка
// 4. Создать кнопку, при клике на которую ей добавляется класс “click”

// 1. 2.
const buttonAddEl = document.querySelector('.button9');
const listEl = document.querySelector('ul');

buttonAddEl.onclick = function () {
    // Вариант 1
    listEl.appendChild(document.createElement('li'));
    listEl.children[listEl.children.length - 1].textContent = 'Новый элемент списка';

    // Вариант 2
    // const newLiEl = listEl.appendChild(document.createElement('li'));
    // newLiEl.textContent = 'Новый элемент списка';
}

// 3.
const buttonDeleteEl = document.querySelector('.button10');
buttonDeleteEl.onclick = function () {
    listEl.children[0].remove();
}

//4.

const buttonAddClassEl = document.querySelector('.button11');
buttonAddClassEl.onclick = function() {
    buttonAddClassEl.classList.add('click'); // добавляет еще один класс элементу
    // buttonAddClassEl.className = 'click'; // меняет текущий класс элемента (так сделали на семинаре)
};
console.log(buttonAddClassEl);


// ЗАДАНИЕ 5
// 1. Создайте с помощью javascript новый элемент button
// 2. Добавьте текст для кнопки “Отправить”
// 3. При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”

const divContentEl = document.querySelector('.content');

const buttonInDivEl =document.createElement('button');
divContentEl.appendChild(buttonInDivEl);
buttonInDivEl.textContent = 'Отправить';

buttonInDivEl.onclick = function () {
    buttonInDivEl.textContent = 'Текст отправлен';
}