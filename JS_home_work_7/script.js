// ЗАДАНИЕ
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// 4. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// 5. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// 6. Удалите атрибут type у элемента с классом "dropdown-toggle".


// 1.
const dropdownItemEl = document.querySelectorAll('.dropdown-item');
dropdownItemEl.forEach(element => {
    element.classList.add('super-dropdown');
});
console.log(dropdownItemEl);

// 2.
const btnEl = document.querySelector('.btn');
btnEl.classList.remove('btn-secondary');
console.log(btnEl);

// 3. 
// --- Для любого количества элементов с классом "menu" ---
const dropdownMenuEl = document.querySelectorAll('.menu');
dropdownMenuEl.forEach(element => {
    element.classList.remove('dropdown-menu');
});
console.log(dropdownMenuEl);

// --- Если только один элемент с классом "menu" (в противном случае, будет обработан только первый элемент) ---
const dropdownMenuElem = document.querySelector('.menu');
dropdownMenuElem.classList.remove('dropdown-menu');
console.log(dropdownMenuElem);

// 4.
const dropdownButtonEl = document.querySelector('#dropdownMenuButton');
dropdownButtonEl.id = 'superDropdown';
console.log(dropdownButtonEl);

// 5.
const dropdownButtonElem = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
dropdownButtonElem.dataset.dd = '3';
console.log(dropdownButtonElem);

// 6.
const dropdownToggleEl = document.querySelector('.dropdown-toggle');
dropdownToggleEl.removeAttribute('type');
console.log(dropdownToggleEl);