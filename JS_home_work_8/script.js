// ЗАДАНИЕ
// 1. Необходимо вывести сообщение в консоль "все теги прогрузились", когда все теги будут созданы браузером.
// 2. Необходимо вывести сообщение в консоль "страница загрузилась", когда все ресурсы страницы будут загружены.
// 3. При клике на какой-либо тег на странице в консоль должно выводиться сообщение наподобие:
// - Класс "super_element" присутствует в элементе "div".
// - Cообщение должно определять присутствует или отсутствует класс "super_element" у элемента, а также выводить в нижнем регистре верный тег в данной строке, по которому был совершен клик.
// - Необходимо использовать делегирование.
// 4. Сделайте, чтобы при наведении на textarea в консоли появлялось сообщение: "Вы навели на textarea."
// 5. Необходимо повесить событие клика на тег ul. В обработчике события в консоль необходимо выводить текст, который записан внутри элемента кнопки, по которой был произведен клик. Если клик был не по кнопке, то ничего выводить не нужно. Необходимо использовать делегирование.
// 6. Вопрос: Почему в console.log пишется сначала текст из 5 задания и только потом выводится текст из 3 задания, если мы кликаем по кнопкам в ul? Ответ необходимо написать здесь же, под этим комментарием, своими словами.
// 7. С помощью JS необходимо изменить цвет заднего фона каждого второго тега li.


// 1.
document.addEventListener('DOMContentLoaded', function (e) {
    console.log('все теги прогрузились');
})

// 2.
window.addEventListener('load', function (e) {
    console.log('страница загрузилась');
})

// 3.
document.addEventListener('click', function (e) {
    let element = e.target;
    let hasClass = element.classList.contains('super_element');
    if (hasClass) {
        console.log(`Класс "super_element" присутствует в элементе "${element.tagName.toLowerCase()}".`);
    }
    else {
        console.log(`Класс "super_element" отсутствует в элементе "${element.tagName.toLowerCase()}".`);
    }
});

// 4.
const textAreaEl = document.querySelector('textarea');

textAreaEl.addEventListener('mouseover', function () {
    console.log('Вы навели на textarea');
})

// 5.
const ulElem = document.querySelector('ul');

ulElem.addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() == 'button') {
    console.log(e.target.textContent);
  }
});

// 6.
// Очередность захвата события происходит сверху вниз по структуре DOM, а фаза всплытия события наоборот снизу вверх.
// Обработчик (п.5) установленный на элемент "ul" находится ниже в иерархической структуре DOM интерфейсов, чем обработчик (п.3) установленный на объект "document".
// Поэтому в консоль сначала выводится событие на элементе "ul", а затем на "document"

// 7.
const liTags = document.querySelectorAll('li');

liTags.forEach(function (li, index) {
  if (index % 2 === 0) {
    li.style.backgroundColor = '#f5f5f5';
  }
});

