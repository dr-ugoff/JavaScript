// ЗАДАНИЕ 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

// ЗАДАНИЕ 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).

const userData = JSON.parse(data);

const contentBox = document.querySelector('.content__box');

userData.forEach(element => {
    const userContent = document.createElement('div');
    userContent.classList.add('user__content');

    const userPhoto = document.createElement('img');
    userPhoto.classList.add('user__photo');
    userPhoto.src = element.photo;
    userPhoto.setAttribute('alt', element.name)

    const userName = document.createElement('h2');
    userName.classList.add('user__name');
    userName.textContent = element.name;

    const userContact = document.createElement('h3');
    userContact.classList.add('user__contact');
    userContact.textContent = 'Contact:';

    const userEmail = document.createElement('p');
    userEmail.classList.add('user__email');
    userEmail.textContent = `Email: ${element.email}`;

    const userAge = document.createElement('p');
    userAge.classList.add('user__age');
    userAge.textContent = `Age: ${element.age}`;

    const userPhone = document.createElement('p');
    userPhone.classList.add('user__phone');
    userPhone.textContent = `Phone: ${element.phone}`;

    const userAdress = document.createElement('p');
    userAdress.classList.add('user__adress');
    userAdress.textContent = `Adress: ${element.adress}`;

    contentBox.appendChild(userContent);
    userContent.appendChild(userPhoto);
    userContent.appendChild(userName);
    userContent.appendChild(userAge);
    userContent.appendChild(userContact);
    userContent.appendChild(userEmail);
    userContent.appendChild(userPhone);
    userContent.appendChild(userAdress);
});

