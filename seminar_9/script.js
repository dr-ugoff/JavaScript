// ЗАДАНИЕ 1
// 1. В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// 2. Добавить кнопку отправить
// 3. При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// 4. Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

const buttonEl = document.querySelector('.button');

buttonEl.onclick = function () {
    if (!document.querySelector('.check').checked) {
        const textEl = document.createElement('p');
        textEl.textContent = 'Необходимо согласиться с условиями';
        buttonEl.parentElement.appendChild(textEl);
    }
}



// ЗАДАНИЕ 2
// 1. В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// 2. Кнопка отправить
// 3. Если выбран чай, необходимо вывести сообщение “Чай закончился”
// 4. Если выбран кофе, необходимо вывести соообщение “кофе закончился”

const btnEl = document.querySelector('.btn');
console.log(btnEl.parentElement.children[0]);
console.log(btnEl.parentElement.children[2]);

btnEl.onclick = function () {
    if (btnEl.parentElement.children[0].checked) {
        alert('Чай закончился');
    } else if (btnEl.parentElement.children[2].checked) {
        alert('Кофе закончился');
    }
}



// ЗАДАНИЕ 3
// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

const passwordInput = document.querySelector('.password');
const buttonPass = document.querySelector('.button__pass');
const messageEl = document.createElement('p');

buttonPass.onclick = function() {
  if (passwordInput.value === 'пароль') {
    passwordInput.style.backgroundColor = 'green';
  } else {
    passwordInput.style.borderColor = 'red';
    buttonPass.parentElement.appendChild(messageEl);
    messageEl.textContent = 'Неверный пароль';
  }
};



// ЗАДАНИЕ 4
// 1. Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// 2. При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

const textInputEl = document.querySelector('.input__heading');
const headingEl = document.querySelector('.heading');

// textInputEl.addEventListener('keyup', () => {
//     headingEl.textContent = textInputEl.value;
// });

textInputEl.addEventListener('input', () => {
    headingEl.textContent = textInputEl.value;
});