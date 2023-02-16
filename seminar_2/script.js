// let age = prompt('Ваш возраст?');
// alert(`Вам ${age} лет`);
// let userName = prompt('Ваше имя?');
// alert('Добро пожаловать на сайт ' + userName);

// let a = 13;
// let b = 5;
// console.log(`Остаток от деления 13 / 5 = ${a % b}`);

// let a;
// alert(a); //undefined

// alert('abc' * 3); //NaN

// alert( 1 / 0); //Infiniti
// alert(-1 / 0); //-Infiniti

// alert('2' * '3'); //6

// let a = '2';
// let b = '3';
// console.log(Number(a) + Number(b));

// let num1 = Number(prompt('Введите число 1'));
// let num2 = Number(prompt('Введите число 2'));
// console.log(`Вы ввели числа: ${num1} и ${num2}
// Сумма чисел равна: ${num1 + num2}
// Разность чисел равна: ${num1 - num2}
// Произведение чисел равно: ${num1 * num2}
// Частное чисел равно: ${num1 / num2}
// Остаток от деления чисел равен: ${num1 % num2}`);


// console.log(String(true)); //true

// console.log('a' + true); //atrue

// console.log(Number(true)); //1

// console.log(true + 1); //2

// console.log(true + true); //2

// console.log(true - true); //0

// console.log( String(true) + Number(true) ); //true1

// console.log(instanceof('Слово'));

// let num = Number(prompt('Введите число'));
// if (num === 5) {
//     console.log('Число равно 5');
// } else if (num > 5) {
//     console.log('Число больше 5');
// }    
// else {
//     console.log('Число меньше 5');
// }


// let num1 = Number(prompt('Введите число 1'));
// let num2 = Number(prompt('Введите число 2'));
// console.log(`Вы ввели числа: ${num1} и ${num2}`);
// console.log((num1 < num2) ? `Число ${num1} минимальное` : `Число ${num2} минимальное`);


// let test1 = prompt('Введите значение  1');
// let test2 = prompt('Введите значение 2');
// console.log(`Вы ввели переменные: ${test1} и ${test2}`);
// console.log((test1 == test2) ? `Значения переменных равны` : `Значения переменных не равны`);


let num = Number(prompt('Введите число'));
alert((num > 0 && num < 15) ? true : false);