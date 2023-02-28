"use strict";

function getProductsObject() {
    return JSON.parse(data).reduce((result, product) => {
        return {
            ...result,
            [product.id]: product,
        };
    }, {});
}

// 1 : {id: '1', image: 'img/product_1.jpg', name: 'Down jacket', description: 'Known for her sculptural takes on traditional tail…r of cool Kym Ellery teams up with Moda Operandi.', price: '52.00'}
// 2 : {id: '2', image: 'img/product_2.jpg', name: 'Costume', description: 'Known for her sculptural takes on traditional tail…r of cool Kym Ellery teams up with Moda Operandi.', price: '34.00'}
// 3 : {id: '3', image: 'img/product_3.jpg', name: 'Sweater', description: 'Known for her sculptural takes on traditional tail…r of cool Kym Ellery teams up with Moda Operandi.', price: '22.00'}
// 4 : {id: '4', image: 'img/product_4.jpg', name: 'T-Shirt', description: 'Known for her sculptural takes on traditional tail…r of cool Kym Ellery teams up with Moda Operandi.', price: '15.00'}
// 5 : {id: '5', image: 'img/product_5.jpg', name: 'Blazer', description: 'Known for her sculptural takes on traditional tail…r of cool Kym Ellery teams up with Moda Operandi.', price: '28.00'}
// 6 : {id: '6', image: 'img/product_6.jpg', name: 'Blouse', description: 'Known for her sculptural takes on traditional tail…r of cool Kym Ellery teams up with Moda Operandi.', price: '52.00'}




const data = `[
    {
        "id": "1",
        "image": "img/product_1.jpg",
        "name": "Down jacket",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00"
    },
    {
        "id": "2",
        "image": "img/product_2.jpg",
        "name": "Costume",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "34.00"
    },
    {
        "id": "3",
        "image": "img/product_3.jpg",
        "name": "Sweater",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "22.00"
    },
    {
        "id": "4",
        "image": "img/product_4.jpg",
        "name": "T-Shirt",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "15.00"
    },
    {
        "id": "5",
        "image": "img/product_5.jpg",
        "name": "Blazer",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "28.00"
    },
    {
        "id": "6",
        "image": "img/product_6.jpg",
        "name": "Blouse",
        "description": "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
        "price": "52.00"
    }
]`