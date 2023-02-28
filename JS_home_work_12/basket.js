"use strict";

const basket = {};
const products = getProductsObject();

// Находим нужные элементы для работы с корзиной в html
const basketEl = document.querySelector(".basket");
const basketListEl = document.querySelector(".basketList");
const basketCounterEl = document.querySelector(".cart__icon[data-count]");
const basketTotalValueEl = document.querySelector(".basketTotalValue");

// Вешаем обработчик событий на иконку корзины (отслеживаем клики)
document.querySelector(".cart__icon").addEventListener("click", () => {
  // Метод  classList.toggle() используем для включения и выключения класса "hidden"
  // Показать содержание корзины или скрыть содержание при нажатии на иконку корзины
  basketEl.classList.toggle("hidden");
});

//Вешаем обработчик событий на контейнер с товарами (отслеживаем клики)
document.querySelector(".products__box").addEventListener("click", (e) => {
  // Отслеживаем события 'e.target', нас интересуют клики только по кнопке 'Add to Cart'
  // 'closest' находит конкретный элемент с классом ".button__cart" - это кнопка 'Add to Cart'
  const addToCartEl = e.target.closest(".button__cart");
  // Если клик был не по кнопке, то игнорируем такие клики
  if (!addToCartEl) {
    return;
  }
  // Если клик по кнопке, то вызываем функцию добавления товара в корзину
  // 'addToCartEl.dataset.id' - это значение 'id' товара в атрибуте 'data-id' (см. productBtnCart.setAttribute('data-id', element.id) в файле script.js)
  addToBasket(addToCartEl.dataset.id);
  // Перерисовываем корзину после добавления товара, чтобы показать его в корзине
  renderBasketContent();
});

// Функция добавления товара в корзину (требует параметр 'id')
function addToBasket(id) {
  // Проверяем, есть ли товар с таким 'id' в корзине (id in basket)
  // Если нет, то создаем объект с данными этого товара ('id', 'name', 'price' и количество 'count')
  if (!(id in basket)) {
    basket[id] = {
      id: id,
      name: products[id].name,
      price: products[id].price,
      count: 0,
    };
  }
  // Если есть товар с таким 'id' в корзине, тогда увеличиваем его количество на +1 'count++'
  basket[id].count++;
}
// Вешаем обработчик событий на кнопку удалить в корзине (отслеживаем клики)
basketEl.addEventListener("click", (e) => {
  // Если клик не по кнопке, то игнорируем событие (выходим из функции)
  if (!e.target.classList.contains("productRemove")) {
    return;
  }
  // Если клик по кнопке class="productRemove", то вызываем функцию удаления товара из корзины
  removeFromBasket(e.target.closest(".basketRow").dataset.id);
  // Перерисовываем корзину после удаления товара
  renderBasketContent();
});
// Функция удаления товара из корзины (требует параметр 'id')
function removeFromBasket(id) {
  // Удаляем позицию товара из корзины с таким 'id'
    delete basket[id];
 
}
// Функция отрисовывает контент корзины
// Свойство 'innerHTML' вернёт содержимое каждого объекта с товаром в корзине в виде HTML-строки
function renderBasketContent() {
  basketListEl.innerHTML = Object.values(basket).reduce(
    (result, product) => result + getBasketProductMarkup(product),
    ""
  );
  // Присваиваем новое количество товаров у значка корзины
  basketCounterEl.dataset.count = getTotalBasketCount().toString();
  // Присваиваем новую общую стоимость товаров в корзине 
  // Метод toFixed() преобразует число в строку с указанным количеством знаков после запятой
  basketTotalValueEl.textContent = getTotalBasketPrice().toFixed(2);
}
// Функция для подсчета общего количества товаров в корзине, которое она и возвращает
function getTotalBasketCount() {
  return Object.values(basket).reduce((result, product) => result + product.count, 0);
}
// Функция для подсчета итоговой цены всех добавленных продуктов, которую она и возвращает
function getTotalBasketPrice() {
  return Object.values(basket).reduce(
    (result, product) => result + product.price * product.count,
    0
  );
}
// Функция возвращает html разметку товара в корзине.
function getBasketProductMarkup(product) {
  return `
      <div class="basketRow" data-id="${product.id}">
        <div>${product.name}</div>
        <div  class="productCountBtn">
          <button class="productRemoveOne" data-id="${product.id}">-</button>
          <span class="productCount">${product.count}</span>
          <button class="productAddOne" data-id="${product.id}">+</button>
        </div>
        <div>$${product.price}</div>
        <div>
          <span class="productTotalRow">
            $${(product.price * product.count).toFixed(2)}
          </span>
        </div>
        <div><button class="productRemove"></button></div>
      </div>
    `;
}







// Функционал кнопок - и + единица товара в корзине 


//Вешаем обработчик событий на кнопку '+' в корзине (отслеживаем клики)
document.querySelector(".basketList").addEventListener("click", (e) => {
  const addOneToCartEl = e.target.closest(".productAddOne");
  if (!addOneToCartEl) {
    return;
  }

  addOneToBasket(addOneToCartEl.dataset.id);
  renderBasketContent();
});

// Функция добавления единицы товара в корзину (требует параметр 'id')
function addOneToBasket(id) {
  basket[id].count++;
}

// Вешаем обработчик событий на кнопку удалить в корзине (отслеживаем клики)
document.querySelector(".basketList").addEventListener("click", (e) => {
  const removeOneToCartEl = e.target.closest(".productRemoveOne");
  if (!removeOneToCartEl) {
    return;
  }
  console.log(removeOneToCartEl.dataset.id);

  removeOneFromBasket(removeOneToCartEl.dataset.id);
  renderBasketContent();
});

// Функция удаления единицы товара из корзины (требует параметр 'id')
function removeOneFromBasket(id) {
  // Если товара меньше, чем 1 шт. удаляем позицию с товаром из корзины
  if (basket[id].count <= 1) {
    delete basket[id];
  } else {
    // Если больше, чем 1 шт., то уменьшаем количество на -1 шт. ('count--')
    basket[id].count--;
  }
}

