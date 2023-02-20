// ЗАДАНИЕ 1
// 1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль

const link = document.querySelectorAll('p');
console.log(link[0].textContent);

// 2. Получите ссылку на первый абзац с классом www. и вывести его в консоль

const link2 = document.querySelectorAll('.www'); // если нужно обратиться к какому-то конкретному элементу с таким классом
console.log(link2[0].textContent);


// ЗАДАНИЕ 2
// Дан тег <a class="link" href="#">link text html</a>
// 1. Необходимо поменять текст внутри ссылки на “link text js”

const linkEl = document.querySelector('.link');
linkEl.textContent = 'link text js';


// 2. Заменить href, на значение https://developer.mozilla.org/ru/ 

linkEl.href = 'https://developer.mozilla.org/ru/';
console.log(linkEl);

// 3. Дан тег <img class="photo" src="" alt=""> 
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета

const linkImg = document.querySelector('.photo');
linkImg.src = 'https://logodix.com/logo/414483.jpg'
console.log(linkImg);



// ЗАДАНИЕ 3
// 1. Дан тег <div class="content"></div> 
// 2. Создайте новый элемент p
// 3. Добавьте в него текст “Новый текстовый элемент”
// 4. Добавьте созданный элемент внутри <div class="content"></div>
// 5. Удалите добавленный узел 

// const textEl = document.createElement('p');
// textEl.textContent = 'Новый текстовый элемент';
// const contentEl = document.querySelector('.content');
// contentEl.appendChild(textEl);
// console.log(textEl);
// contentEl.removeChild(textEl);


// ЗАДАНИЕ 4
// Создать элемент button, добавить в блок <div class="content"></div>
// При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку

const buttonEl = document.createElement('button');
const buttonResetEl = document.createElement('button');
const textCounter = document.createElement('p');

buttonEl.textContent = 'Отправить';
buttonResetEl.textContent = 'Сбросить счетчик';

const divElem = document.querySelector('.content')

divElem.appendChild(buttonEl);
divElem.appendChild(buttonResetEl);
divElem.appendChild(textCounter);

let counter = 0;

buttonEl.onclick = function () {
    counter++;
    textCounter.textContent = (`Кнопка нажата ${counter} раз`);
    buttonEl.textContent = 'Отправлено';
}

buttonResetEl.onclick = function () {
    counter = 0;
    textCounter.textContent = ('');
    buttonEl.textContent = 'Отправить';
}

