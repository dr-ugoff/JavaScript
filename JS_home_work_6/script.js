// ЗАДАНИЕ
// 1. Найти по id, используя getElementById, элемент с id равным "super_link" и вывести этот элемент в консоль.
// 2. Внутри всех элементов на странице, которые имеют класс "card-link", поменяйте текст внутри элемента на "ссылка".
// 3. Найти все элементы на странице с классом "card-link", которые лежат в элементе с классом "card-body" и вывести полученную коллекцию в консоль.
// 4. Найти первый попавшийся элемент на странице у которого есть атрибут "data-number" со значением 50 и вывести его в консоль.
// 5. Выведите содержимое тега "title" в консоль.
// 6. Получите элемент с классом "card-title" и выведите его родительский узел в консоль.
// 7. Создайте тег "p", запишите внутри него текст "Привет" и добавьте созданный тег в начало элемента, который имеет класс "card".
// 8. Удалите тег "h6" на странице.



// 1.
const linkEl = document.querySelector('#super_link');
console.log(linkEl);

// 2.
const linkElem = document.querySelectorAll('.card-link');

for (let i = 0; i < linkElem.length; i++) {
    linkElem[i].textContent = 'ссылка';
    console.log(linkElem[i]);
}
// 3.
const сardBodyEl = document.querySelectorAll('.card-body .card-link');
console.log(сardBodyEl); // возвращает элементы в коллекции NodeList

for (let i = 0; i < сardBodyEl.length; i++) { 
    сardBodyEl[i].textContent = 'ссылка';
    console.log(сardBodyEl[i]);
} // возвращает элементы списком

// 4.
const dataNumberEl = document.querySelector('[data-number="50"]');
console.log(dataNumberEl);

// 5.
const textEl = document.querySelector('title');
console.log(textEl.textContent);

// 6.
const cardTitleElem = document.querySelector('.card-title');
console.log(cardTitleElem.parentElement);

// 7.
const paragrathEl = document.createElement('p');
paragrathEl.textContent = 'Привет';
const classCardEl = document.querySelector('.card');
classCardEl.prepend(paragrathEl);

// 8.
const headingElem = document.querySelector('h6');
headingElem.remove();