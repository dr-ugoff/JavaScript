// ЗАДАНИЕ
// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.


// 1.
const inputEl = document.querySelector('#from');
const spanEl = document.querySelector('span');

inputEl.addEventListener('input', (e) => {
    spanEl.innerText = e.target.value;
});

// 2.
const messageBtnEl = document.querySelector('.messageBtn');
const divMessageEl = document.querySelector('.message');

messageBtnEl.addEventListener('click', () => {
    divMessageEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    divMessageEl.style.visibility = 'visible';
});

// 3.
const formElem = document.querySelector('form');
const formFields = formElem.querySelectorAll('.form-control');
const buttonElem = formElem.querySelector('button');

buttonElem.addEventListener('click', (e) => {
    // Проверка заполненности полей при нажатии на кнопку "Отправить"
    let isFormValid = true;
    formFields.forEach((field) => {
        if (field.value === '') {
            // Пустым полям добавляем класс error
            field.classList.add('error');
            isFormValid = false;
        } else {
            // Заполненным полям удаляем класс error
            field.classList.remove('error');
        }
    });
    // Если форма не валидна, отменяем отправку
    if (!isFormValid) {
        e.preventDefault();
    }
});

// Обработчик событий для проверки заполненности полей при вводе пользователем
formFields.forEach(input => {
    input.addEventListener('input', () => {
        if (input.value === '') {
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
});


