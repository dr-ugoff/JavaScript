const productData = JSON.parse(data);

const productBox = document.querySelector('.product__box');
console.log(productBox);

productData.forEach(element => {
    const productEl = document.createElement('div');
    productEl.classList.add('product');

    const productButtonDel = document.createElement('button');
    productButtonDel.classList.add('btn__del');
    productButtonDel.setAttribute('type', "button");
    productButtonDel.textContent = 'Удалить';

    const productContent = document.createElement('div');
    productContent.classList.add('product__content');

    const productImg = document.createElement('img');
    productImg.classList.add('product__img');
    productImg.src = element.image;
    productImg.setAttribute('alt', element.name);

    const productDesc = document.createElement('div');
    productDesc.classList.add('product__desc')
    
    const productName = document.createElement('h2');
    productName.classList.add('product__name');
    productName.textContent = element.name;

    const productPriceLable = document.createElement('p');
    productPriceLable.classList.add('product__price_label');
    productPriceLable.textContent = `Price: `;

    const productPrice = document.createElement('span');
    productPrice.classList.add('product__price');
    productPrice.textContent = element.price;

    const productColor = document.createElement('p');
    productColor.classList.add('product__color');
    productColor.textContent = `Color: ${element.color}`;

    const productSize = document.createElement('p');
    productSize.classList.add('product__size');
    productSize.textContent = `Size: ${element.size}`;

    const productQuantity = document.createElement('div');
    productQuantity.classList.add('product__qty');

    const productInputLabel = document.createElement('label');
    productInputLabel.classList.add('input__label');
    productInputLabel.textContent = "Quantity:";

    const productInputQty = document.createElement('input');
    productInputQty.classList.add('input__quantity');
    productInputQty.setAttribute('type', "text");
    productInputQty.setAttribute('value', element.quantity);

    productBox.appendChild(productEl);
    productEl.appendChild(productButtonDel);
    productEl.appendChild(productContent);
    productContent.appendChild(productImg);
    productContent.appendChild(productDesc);
    productDesc.appendChild(productName);
    productDesc.appendChild(productPriceLable);
    productPriceLable.appendChild(productPrice);
    productDesc.appendChild(productColor);
    productDesc.appendChild(productSize);
    productDesc.appendChild(productQuantity);
    productQuantity.appendChild(productInputLabel);
    productQuantity.appendChild(productInputQty);
});











