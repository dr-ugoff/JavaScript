// ЗАДАНИЕ 1
// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”

// const weekDays = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье'
// };

// const daysName = Object.values(weekDays);
// const result = daysName.filter(value => value === 'Вторник');
// console.log(result);

// console.log(weekDays[2]);




// ЗАДАНИЕ 2
// Создайте объект user с ключами 'name', 'surname', ‘age’. 
// Выведите на экран фамилию, имя и возраст через дефис.

// const user = {
//     firstName: 'Андрей',
//     surName: 'Другов',
//     age: 45
// };

// console.log(user.surName + ' - ' + user.firstName + ' - ' + user.age);

// //Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// let userPatronymic = prompt('Введите Отчество');
// user.patronymic = userPatronymic;

// // Удалите свойство surname
// delete user.surName;
// console.log(user);



// ЗАДАНИЕ 3
// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// const weekDays = {};

// for (let i = 0; i < arr1.length; i++) {
//     weekDays[arr1[i]] = arr2[i];
// }

// console.log(weekDays);


// ЗАДАНИЕ 4
// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

// const obj = { x: 1, y: 2, z: 3 };
// console.log(obj);
// for (const key in obj) {
//     // obj[key] = obj[key] * obj[key]; // вариант 1
//     // obj[key] = obj[key] **2; // вариант 2
//     obj[key] *= obj[key]; // вариант 3
// }

// console.log(obj);


// ЗАДАНИЕ 5
// Найдите сумму элементов приведенного объекта.

// const obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }

// let sum = 0;
// for (const key in obj) {
//     for (const keyInside in obj[key]) {
//         sum += obj[key][keyInside];
//     }
// }

// console.log(sum);




// ЗАДАНИЕ 6
// Создайте объект riddles 
// Добавьте свойства question, answer
// создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
// Добавьте свойство hints (содержащее 2 подсказки)
// Если пользователь ответил неверно, ему даётся одна подсказка
// Если пользователь ответил второй раз неверно, даётся вторая подсказка
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”

const riddles = {
    question: 'Зимой и летом одним цветом',
    answer: 'елка',
    count: 0,
    hints: {
        hint1: 'Хвойная',
        hint2: 'Есть иголки'
    },
    askQuestion: function () {
        if (prompt(this.question) == this.answer) {
            alert('Молодец!')
        }
        else {
            if (this.count == 0) {
                alert('Неверный ответ, вот вам первая подсказка: ' + this.hints.hint1);
                this.count++;
            }
            else if (this.count == 1) {
                alert('Неверный ответ, вот вам вторая подсказка: ' + this.hints.hint2);
                this.count++;
            }
            else if (this.count == 2) {
                alert('Вы проиграли :( Правильный ответ: ' + this.answer);
                this.count = 0;
            }
        }
    }
};

do {
    riddles.askQuestion();
} while (riddles.count != 0);
