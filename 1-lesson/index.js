

// let i; // undefined
// const message = '123123 12312 dsfds sale';
// const bannedWords = ['spam', 'sale', 'avoid'];

// const words = message.split(' ');

// for (const word of words) {
//     if (bannedWords.includes(word)) {

//     }
// }

// Math.round - 
// Math.ceil 
// Math.floor

// const from = 10;
// const to = 20;

// const randomNumber = Math.round(Math.random() * (to - from) + from);

// console.log(randomNumber);

// for (i = 0; i < 10; i++) {
//     // тело цикла
// }

// console.log(i); // 0, 9, undefined

// let counter = 5;

// // 1 - ++counter = 6
// // 2 - counter + counter // 12
// // 3 - counter++

// foo1();

// console.log(++counter + counter++); // 12
// console.log(counter); // 7

// function foo1() {
//     console.log("12312312");
// }

// const foo2 = function() {
//     console.log("ABC");
// };

// foo2();

// const sum3Numbers = function(a,b,c) {
//     if (a === 5) {
//         alert("12312");
//     }

//     return a + b + c;
// };

// const sum3NumbersArrow = (a, b, c) => {
//     if (a === 5) {
//         alert("12312");
//     }

//     return a + b + c;
// };

// const withoutArgs = function() {
//     console.log("123");
// }

// const withoutArgsArrow = () => console.log("123");

// let isMidnigth = false;


// const transformString = (string) => {
//     const words = string.split(" ");
//     let resultString = '';

//     for (let i = 0; i < words.length; i++) {
//         const word = words[i];

//         for (let j = 0; j < word.length; j++) {
//             const letter = word[j];

//             resultString += j % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
//         }

//         resultString += ' ';
//     }

//     return resultString;
// };

// console.log(transformString("Hello Kitty! TodaY Is a nice day"));

// showMessageFunction('12312312312');

// 1 вариант 
// Function Declaration (Объявление функции)
// function fooname() {
//     // делать 
//     // тут логика
// }

// // 2 вариант 
// // Function Expression (Функциональное выражение)
// const foo2name = function () {
//     // тут логика
// }

// // 3 вариант
// // Arrow function (Стрелочная функция)
// const arrowFunc = () => {
//        // тут логика
// }

// const filterNonStringValues = (values) => {
//     const resultArray = [];

//     for (const value of values) {
//         if (typeof value === 'string' && value !== '') {
//             resultArray.push(value);
//         }
//     }

//     return resultArray;
// }

// console.log(
//     filterNonStringValues(["Potato", 12312, "Banana", true, undefined, "", "Cake", 12312, Infinity])
// );


// 1. Вход - матрица, выход - массив из 3 чисел
// 2. Опредляем максимальный элемент
// 3. Опредляем минимальный элемент
// 4. Считаем сумму положительных чисел
// 5. Формируем массив с полученными результатами


// const computeMatrix = (matrix) => {
//     let minNumber = Math.min(...matrix[2]);
//     let maxNumber = Math.max(...matrix[0]); 
//     let positiveNumberSum = 0;

//     for (const number of matrix[1]) {
//         if (number > 0) {
//             positiveNumberSum += number;
//         }
//     }

//     return [maxNumber, minNumber, positiveNumberSum];
// };


// console.log(
//     computeMatrix([
//         [1, 10, 15, 20, "string"],
//         [20, 30, -5, 50],
//         [10, -10, 3, 150, [123, 12321]]
//     ])
// ); // [20, -10, 100]

// Function Declaration (Объявление функции)
// function foo1() {
//     // логику
// }

// Function expression (Функциональное выражение)
// const foo2 = function() {
//     // логика
// }

// Named Function Expression (Именованные функциональный выражение)
// const foo3 = function helloKitty(number) {
//     console.log(number);

//     if (number === 1000) {
//         return;
//     }

//     helloKitty(++number);
// }

// foo3(1);

// Arrow Functions (Стрелочные функции)
// const foo4 = function(a, b, c) {
//     if (a === b) {
//         console.log(c);
//     }

//     return a + b + c;
// }

// const foo5 = (a, b, c) => {
//     if (a === b) {
//         console.log(c);
//     }

//     return a + b + c;
// }

// const foo6 = function() {
//     console.log("123123");
// }

// const foo7 = () => console.log("123123");

// console.log(1 + 5);
// console.log(['123', '12312'].push(12312312));

// let counter = 5;

// // 1. прединкремент: counter = 6
// // 2. counter + counter++ = 6 + 6 = 12
// // 3. counter = 7

// console.log(++counter + counter++); // 11, 12
// console.log(counter); // 5, 5, 6, 7

// let notificationsNumber;

// let i;

// notificationsNumber++;

// for (i = 0; i <= 10; ++i) {
//     // действие
// }

// console.log(i); // 11, 10, 9

// let showFunction = true;
// const secondConditional = true;
// let counter = 0;
// const foo = () => console.log("Hooray");

// if (showFunction && secondConditional) {
//     foo();
// }

// if (showFunction && secondConditional) {
//     foo();
// }

// showFunction && counter++;
// secondConditional && counter++;

const calculateValuesByType = (...values) => {
    let undefinedCounter = 0;
    let arrayCounter = 0;

    typeof value === 'array' && arrayCounter++;
    typeof value === 'undefined' && undefinedCounter++;
};