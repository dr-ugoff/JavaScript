"use strict";

const productData = JSON.parse(data);

const productBox = document.querySelector('.products__box');

productData.forEach(element => {
    const productItem = document.createElement('div');
    productItem.classList.add('products__item');

    const productContent = document.createElement('div');
    productContent.classList.add('products__content');

    const productImgEl = document.createElement('div');
    productImgEl.classList.add('products__img');

    const productImage = document.createElement('img');
    productImage.classList.add('product__image');
    productImage.src = element.image;
    productImage.setAttribute('alt', element.name);

    const productOverlayEl = document.createElement('div');
    productOverlayEl.classList.add('overlay');

    const productBtnCart = document.createElement('button');
    productBtnCart.classList.add('button__cart');
    productBtnCart.setAttribute('data-id', element.id);
    productBtnCart.textContent = 'Add to Cart';

    const productTitle = document.createElement('h2');
    productTitle.classList.add('products__title');
    productTitle.textContent = element.name;

    const productDesc = document.createElement('p');
    productDesc.classList.add('products_description');
    productDesc.textContent = element.description;

    const productPrice = document.createElement('p');
    productPrice.classList.add('products__price');
    productPrice.textContent = element.price;

    productBox.appendChild(productItem);
    productItem.appendChild(productContent);
    productContent.appendChild(productImgEl);
    productImgEl.appendChild(productImage);
    productImgEl.appendChild(productOverlayEl);
    productImgEl.appendChild(productBtnCart);
    productContent.appendChild(productTitle);
    productContent.appendChild(productDesc);
    productContent.appendChild(productPrice);
});


