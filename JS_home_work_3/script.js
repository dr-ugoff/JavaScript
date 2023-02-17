// ЗАДАНИЕ 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени


function getNumberCubed(num) {
    return(num**3);
}
console.log(getNumberCubed(2) + getNumberCubed(3));



/*------ конец задания -----*/



// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"


// function salaryAfterTaxes(sum) {
//     console.log(`Размер заработной платы за вычетом налогов равен ${sum - sum * 0.13}`);
// }
// let userSalary = prompt('Введите размер вашей заработной платы');
// if (isNaN(userSalary)) {
//     console.log('Значение задано неверно');
// } else {
//     salaryAfterTaxes(userSalary);
// }



/*------ конец задания -----*/



// ЗАДАНИЕ 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел


// function maxNumber(a, b, c) {
//     if (a > b && a > c) {
//         console.log(`Наибольшее из них ${a}`);
//     } 
//     else if (b > a && b > c) {
//         console.log(`Наибольшее из них ${b}`);
//     }
//     else if (c > a && c > b) {
//         console.log(`Наибольшее из них ${c}`);
//     }
// }
// let num1 = prompt('Введите число 1');
// let num2 = prompt('Введите число 2');
// let num3 = prompt('Введите число 3');
// console.log(`Вы ввели числа: ${num1}, ${num2}, ${num3}`);
// maxNumber(num1, num2, num3);



/*------ конец задания -----*/



// ЗАДАНИЕ 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.


// function sumNumbers(a, b) {
//     let sum = a + b;
//     return sum;
// }

// function differenceNumbers(a, b) {
//     let diff;
//     if (a > b) {
//         diff = a - b;
//     } else if (a < b) {
//         diff = b - a;
//     } else {
//         diff = 0;
//     }
//     return diff;
// }

// function multiplicationNumbers(a, b) {
//     let multipl = a * b;
//     return multipl;
// }

// function divisionNumbers(a, b) {
//     div = a / b;
//     return div;
// }

// let num1 = Number(prompt('Введите число 1'));
// let num2 = Number(prompt('Введите число 2'));
// console.log(`Вы ввели числа: ${num1} и ${num2}`);

// sumNumbers(num1, num2);
// differenceNumbers(num1, num2);
// multiplicationNumbers(num1, num2);
// divisionNumbers(num1, num2);

// console.log(`Сумма чисел равна: ${sumNumbers(num1, num2)}
// Разность чисел равна: ${differenceNumbers(num1, num2)}
// Произведение чисел равно: ${multiplicationNumbers(num1, num2)}
// Частное чисел равно: ${divisionNumbers(num1, num2)}`);