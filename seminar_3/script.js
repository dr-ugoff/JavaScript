// function userHello(firstName, lastName, age) {
//     console.log(`Привет ${firstName} ${lastName} с возрастом ${age}`);
// }
// const userHello = (firstName, lastName, age) => {
//     console.log(`Привет ${firstName} ${lastName} с возрастом ${age}`);
// }
// userHello('Андрей', 'Другов', '45');




// function numQuadro(num) {
// console.log(num**2);
// }
// numQuadro(userNumber);

// let userNumber = +prompt('Введите число');
// function positiveOrNegativeNum(num) {
//     if (num > 0) {
//         console.log('+++');
//     } if (num === 0) {
//         console.log('Число 0 неопределённое');
//     }
//     else {
//         console.log('---');
//     }
// }
// let userNumber = +prompt('Введите число');
// positiveOrNegativeNum(userNumber);



// function sumNumber(num1, num2, num3) {
//     console.log(num1 + num2 + num3);
// }
// let userNumber1 = +prompt('Введите первое число');
// let userNumber2 = +prompt('Введите второе число');
// let userNumber3 = +prompt('Введите третье число');
// sumNumber(userNumber1, userNumber2, userNumber3);



// Вариант 1
// function sumNum(a, b, c) {
//     console.log(a + b + c);
// }
// let param1 = 1; 
// let param2 = 2; 
// let param3 = 3;
// sumNum(param1, param2, param3);

// Вариант 2
// function sumNum(a, b, c) {
//     let sum = a + b + c;
//     return sum;
// }
// let param1 = 1;
// let param2 = 2; 
// let param3 = 3;
// console.log(sumNum(param1, param2, param3));



// function func(num = 5) {
//     console.log(num * num);
// }
// func(2); // 4
// func(3); // 9
// func(); // 25



// function getSquareRoot(num) {
//     return(Math.sqrt(num));
// }
// console.log(getSquareRoot(3) + getSquareRoot(4));



// function numberCompare(num1, num2) {
//     console.log(`Вы ввели числа ${num1} и ${num2}`);
//     console.log((num1 < num2) ? `Число ${num1} меньше числа ${num2}` : `Число ${num1} больше числа ${num2}`);
// }
// numberCompare(+prompt('Введите первое число'), +prompt('Введите второе число'))



// Вариант 1
// function getDay(num) {
//     if (num === 1) {
//         console.log(`День недели ${num} - это Понедельник`);
//     } else if (num === 2) {
//         console.log(`День недели ${num} - это Вторник`);
//     } else if (num === 3) {
//         console.log(`День недели ${num} - это Среда`);
//     } else if (num === 4) {
//         console.log(`День недели ${num} - это Четверг`);
//     } else if (num === 5) {
//         console.log(`День недели ${num} - это Пятница`);
//     } else if (num === 6) {
//         console.log(`День недели ${num} - это Суббота`);
//     } else {
//         console.log(`День недели ${num} - это Воскресенье`);
//     }
// }
// getDay(Math.round(Math.random() * 6) + 1);

// Вариант 2
// function getDay(num) {
//     switch (num) {
//         case 1:
//             console.log(`День недели ${num} - это Понедельник`);
//             break;
//         case 2:
//             console.log(`День недели ${num} - это Вторник`);
//             break;
//         case 3:
//             console.log(`День недели ${num} - это Среда`);
//             break;
//         case 4:
//             console.log(`День недели ${num} - это Четверг`);
//             break;
//         case 5:
//             console.log(`День недели ${num} - это Пятница`);
//             break;
//         case 6:
//             console.log(`День недели ${num} - это Суббота`);
//             break;
//         case 7:
//             console.log(`День недели ${num} - это Воскресенье`);
//             break;
//         default:
//             console.log(`Вы ввели ${num} - такого дня недели не существует`);
//             break;
//     }
// }
// getDay(+prompt('Введите день недели'));



// function greetingUserWithDayTime(firstName) {
//     let time = new Date();
//     let hour = time.getHours();
//     if (hour < 7) {
//         console.log(`Доброй ночи, ${firstName}!`);
//     } else if (hour < 13) {
//         console.log(`Доброе утро, ${firstName}!`);
//     } else if (hour < 18) {
//         console.log(`Добрый день, ${firstName}!`);
//     } else {
//         console.log(`Добрый вечер, ${firstName}!`);
//     }
// }
// greetingUserWithDayTime(prompt('Введите ваше имя'));



