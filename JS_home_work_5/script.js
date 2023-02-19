// ЗАДАНИЕ 1
// Дан объект numbers. Необходимо в консоль вывести все значения больше или равные 3.

const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

// Вариант 1 (через цикл)
for (const key in numbers) {
    const value = numbers[key];
    if (value >= 3) {
        console.log(value);
    }
}

// Вариант 2 (через фильтрацию массива)
const values = Object.values(numbers);
const result = values.filter(value => value >= 3);
console.log(result);



/*------ Конец задания 1 -----*/



// ЗАДАНИЕ 2
// Необходимо из объекта, который лежит в константе post вывести значения, к которым приписан комментарий, в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};


for (const key in post) {
    const element = post[key];
    if (element == 'John') {
        console.log(element);
    }
}

for (const keyRating in post.comments[0].rating) {
    const elementRaring = post.comments[0].rating[keyRating];
        if (elementRaring == 2) {
            console.log(elementRaring);
        } 
}

for (const keyComments in post.comments[1]) {
    const elementComments = post.comments[1][keyComments];
    if (elementComments == 5 || elementComments == 'lorem ipsum 2') {
        console.log(elementComments);
    }
}




/*------ Конец задания 2 -----*/



// ЗАДАНИЕ 3
// Дан массив products, необходимо уменьшить price на 15%.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// Вариант 1
for (let i = 0; i < products.length; i++) {
    products[i].price *= 0.85;
}
console.log(products);

// Вариант2 
products.forEach(item => {
    item.price *= 0.85;
});
console.log(products);



/*------ Конец задания 3 -----*/



// ЗАДАНИЕ 4
// 1. Необходимо вывести в консоль массив продуктов в котором есть хоть одна фотография используя метод filter. Исходные данные - массив products.
// 2. Необходимо отсортировать массив products используя метод sort по цене, начиная с самой маленькой, заканчивая самой большой ценой, после чего вывести отсортированный массив в консоль.

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg",
        ],
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);
console.log(productsWithPhotos);

// СОРТИРОВКА - вариант 1

products.sort((a, b) => a.price - b.price);
console.log(products);


// СОРТИРОВКА - вариант 2

function compare(a, b) {
    let comparison = 0;
    if (a.price > b.price) {
        comparison = 1;
    } else if (b.price > a.price) {
        comparison = -1;
    }
    return comparison;
}

console.log(products.sort(compare));



/*------ Конец задания 4 -----*/



// ЗАДАНИЕ 5
// Дано 2 массива 
// Вам необходимо объединить 2 этих массива, чтобы значения первого массива были ключами, а значения второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const weekDays = {};

for (let i = 0; i < en.length; i++) {
    weekDays[en[i]] = ru[i];
}

console.log(weekDays);