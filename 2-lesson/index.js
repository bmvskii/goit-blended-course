// const array = [
//     {
//         name: "Petr",
//         age: 12,
//         salary: 1000,
//     },
//     {
//         name: "Andrew",
//         age: 22,
//         salary: 2000,
//     },
//     {
//         name: "George",
//         age: 30,
//         salary: 3000,
//     },
// ];

// const response = JSON.parse({
//     "data": [{
//       "type": "articles",
//       "id": "1",
//       "attributes": {
//         "title": "JSON:API paints my bikeshed!",
//         "body": "The shortest article. Ever.",
//         "created": "2015-05-22T14:56:29.000Z",
//         "updated": "2015-05-22T14:56:28.000Z"
//       },
//       "relationships": {
//         "author": {
//           "data": {"id": "42", "type": "people"}
//         }
//       }
//     }],
//     "included": [
//       {
//         "type": "people",
//         "id": "42",
//         "attributes": {
//           "name": "John",
//           "age": 80,
//           "gender": "male"
//         }
//       }
//     ]
//   });


// let a = 10;
// let b = 20;
// let temp = b;

// b = a; 
// a = temp;

// a ^= b;
// b ^= a;
// a -= b;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);


// for (const { name, age, salary } of array) {
//     // const { name, age, salary } = someLongObjectName;

//     if (name) {
//         const total = age * salary;
//     }
// }

// for (const [key, value] of Object.entries(array)) {

// }

// const findBestEmployee = function(employees) {
//     let maxCompletedTasks = 0;
//     let bestEmployeeName = '';

//     for (const employeeName in employees) {
//         const employeeTasks = employees[employeeName];

//         if (employeeTasks > maxCompletedTasks) {
//             bestEmployeeName = employeeName;
//             maxCompletedTasks = employeeTasks;
//         }
//     }

//     return bestEmployeeName;
// };


//   /*
//    * Вызовы функции для проверки работоспособности твоей реализации.
//    */
//   console.log(
//     findBestEmployee({
//       ann: 29,
//       david: 35,
//       helen: 1,
//       lorence: 99,
//     }),
//   ); // lorence
  
//   console.log(
//     findBestEmployee({
//       poly: 12,
//       mango: 17,
//       ajax: 4,
//     }),
//   ); // mango
  
//   console.log(
//     findBestEmployee({
//       lux: 147,
//       david: 21,
//       kiwi: 19,
//       chelsy: 38,
//     }),
//   ); // lux

// const object = {
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38, 
// };

// console.log(object.lux);
// console.log(object["david"]);


// const createUser = (name, birthday) => {
//     let hasMessageBeenShown = false;

//     return (message, currentDate) => {
//         if (!hasMessageBeenShown && birthday === currentDate) {
//             console.log(`HAPPY BIRTHDAY! DEAR ${name}`);
//             hasMessageBeenShown = true;
//         }

//         console.log(`MESSAGE FROM USER: ${name}`);
//         console.log(`MESSAGE: ${message}`);
//     };
// };

// const messageFromUser1 = createUser("Vasya", "26/07/2020");

// messageFromUser1("Hello world!", "25/07/2020");
// messageFromUser1("It's me!", "25/07/2020");

// messageFromUser1("Message 1", "26/07/2020");
// messageFromUser1("Message 2", "26/07/2020");
// messageFromUser1("Message 3", "26/07/2020");

// function log(message, date) {
//     console.log(this);
//     console.log(message);
//     console.log(date);
// }

// log("Message1", "02/01/2010");

// const object = {
//     a: 1,
//     b: 2,
//     foo3: log,
// };

// const object2 = { 
//     c: 3,
//     d: 4
// }

// const object2Log = log.bind(object2);

// object.foo3("123123", "123123");

// log.call(object, "Message2", "01/12/20");
// log.apply(object2, ["Message3", "04/12/20"]);

// object2Log("Message 4", "12312");
// object2Log("Message 4", "12312");

// log("Message5", "02/01/2010");

// const calc = (a, b, action) => action(a, b);

// const multiply = (a, b) => a * b;
// const sum = (a,b) => a + b;
// const divide = (a,b) => a / b;
// const substract = (a,b) => a - b;

// console.log(calc(10, 20, sum));
// console.log(calc(2,2, multiply));
// console.log(calc(100, 10, divide));
// console.log(calc(7, 4, substract));

// 1. Количество параметров неограничено
// 2. Последним параметром идет колбек
// 3. Функцию фильтрации передаем во время вызова

// const customFilter = (...args) => {
//     const [callback] = args.splice(args.length - 1, 1);
//     const filteredArray = [];

//     if (typeof callback !== 'function') {
//         return args;
//     }   

//     for (const arg of args) {
//         if (callback(arg)) {
//             filteredArray.push(arg);
//         }
//     }

//     return filteredArray;
// }

// const stringFilter = (value) => typeof value === 'string';
// const positiveNumberFilter = (value) => !Number.isNaN(value) && typeof value === 'number' && value > 0;
// const nonEmptyArrayFilter = (value) => Array.isArray(value) && value.length > 0;

// console.log(customFilter(1, 2, 3, "4" ,5, undefined, "string"));
// console.log(customFilter(1, 2, 3, "4" ,5, undefined, "string", stringFilter)); // ["string", "4"]
// console.log(customFilter(1, 2, 3, "4" ,5, undefined, "string", positiveNumberFilter)); // [1, 2, 3, 5]
// console.log(customFilter(1, 2, "string", undefined, [1], [], [112, 1234], [], nonEmptyArrayFilter)); // [1, 2, 3, 5]

// counter
// let counter1 = counter();
// let counter2 = counter();

// counter1(); // 2
// counter1(); // 3

// counter2(); // 2

// const counter = (initial = 0) => {
//     let counter = initial;
//     return () => counter++;
// }

// const counter1 = counter();
// const counter2 = counter(10);

// console.log(counter1());
// console.log(counter1());

// console.log(counter2());
// console.log(counter2());

// sum(10)(2)(3) = 15

// const sum = (a) => (b) => (c) => a + b + c; 

// const sumFunc = function (a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// }

// const sum1 = sum(10)(20);

// console.log(sum1(20));
// console.log(sum1(10));
// console.log(sum(10)(2)(3));


// var config = {
//     namespace: "global",
//     fullname: "asdasdasd",
// }

// (function(namespace) {
//     var config = {
//         namespace,
//         fullname: "abcs",
//     }

//     console.log(namespace);
//     console.log(config);
// }("functional"));

// console.log(config);


// const object1 = {
//     a: 1,
//     b: 2,
// };

// const object2 = Object.create(object1);

// object2.c = 10;

// const object3 = Object.create(object2);

// object3.d = 20;

// const keys = Object.keys(object1);

// for (const prop of keys) {
//     console.log(prop);
// }

// Условие
// написать функцию calc
// которая принимает на вход 2 аргумента
// последним аргументов идет колбек

// calc(1, 2, действие1) 
// calc(1, 2, действие2)
// calc(1, 2, действие3)  

// const sum = (a, b) => a + b;
// const divide = (a, b) => a / b;
// const multiply = (a, b) => a * b;
// const substract = (a, b) => a - b;
// const callback = (a, b) => Math.sqrt((a * b) / ((a + b) ** 10));

// const calc = (a, b, action) => action(a, b);

// console.log(calc(10, 20, sum)); // 30
// console.log(calc(200, 4, divide)); // 50
// console.log(calc(10, 40, multiply)); // 400
// console.log(calc(15, 5, substract)); // 10
// console.log(calc(5, 10, callback)); 

// const isString = value => typeof value === 'string';
// const isNegativeNumber = value => typeof value === 'number' && value < 0;
// const isNonEmptyArray = value => Array.isArray(value) && value.length > 0;
// const isStringHasTwoWords = value => typeof value === 'string' && value.split(" ").length > 1;

// const customFilter = (...args) => {
//     if (typeof args[args.length - 1] !== 'function') {
//         return args;
//     }

//     const [callback] = args.splice(args.length - 1, 1);
//     const filteredArray = [];

//     for (const arg of args) {
//         if (callback(arg)) {
//             filteredArray.push(arg);
//         }
//     }

//     return filteredArray;
// }

// console.log(customFilter(1, 2, 3, "4", 5, undefined, "string"));
// console.log(customFilter(1, 2, 3, "4", 5, undefined, "string", isString)); // ["string", "4"]
// console.log(customFilter(1, 2, 3, "4", 5, -5, undefined, "string", isNegativeNumber)); // [1, 2, 3, 5]
// console.log(customFilter(1, 2, "string", undefined, [1], [], [112, 1234], [], isNonEmptyArray)); // [[1], [112, 1234]]
// console.log(customFilter("string", "string word", "string word 1", 1232, [], isStringHasTwoWords));

// let a = 10;
// let b = 20;

// [b, a] = [a, b];

// console.log(a);
// console.log(b);

// const foo = (arr, action) => {
//     const resultArray = [];

//     for (const element of arr) {
//         const result = action(element);        
//         console.log("@@@TRANSFORMED:", result);
//         resultArray.push(result);
//     }

//     return resultArray;
// };

// console.log(foo([1,2,3,4,5], (value) => value * 2)); // 2, 4, 6, 8, 10

// somesite.com/product/page/1 - 10 товаров
// somesite.com/product/page/2 - 10 товаров

// function logMessage(message, date) {
//     console.log(message);
//     console.log(date);
//     console.log(this);
// }

// logMessage("Message", "01/02");

// const object1 = {
//     a: 1, 
//     b: 2,
// };

// const object2 = {
//     c: 3,
//     d: 4,
// }

// logMessage.call(object1, "Message 1", "date 1");
// logMessage.apply(object1, ["Message 2", "date 2"]);

// const object1LogMessage = logMessage.bind(object1);

// object1LogMessage("Message 1", "date 1");
// object1LogMessage("Message 2", "date 2");

// logMessage("12312", "Adas");

// counter

// let counter1 = counter();
// let counter2 = counter();

// counter1(); // 1
// counter1(); // 2

// counter2(); // 1
// counter2(); // 2

// const counter = (initial = 0) => {
//     let counter = initial; // free variable - свободные переменные

//     return () => counter++;
// } 

// const c1 = counter();
// const c2 = counter(100);
// const c3 = counter(1000);

// console.log(c1());
// console.log(c1());
// console.log(c1());

// console.log(c2());
// console.log(c2());

// console.log(c3());
// console.log(c3());

// const createUser = (username, password, birthday) => {
//     let hasMessageBeenShown = false;
//     let hasWelcomeMessageBeenShown = false;

//     const ADMIN_PASSWORD = 'admin';
//     const IS_ADMIN = ADMIN_PASSWORD === password;

//     return (message, date) => {
//         if (IS_ADMIN && !hasWelcomeMessageBeenShown) {
//             console.log(`HELLO DEAR ADMIN! NICE TO MEET YOU`);
//             hasWelcomeMessageBeenShown = true;
//         }

//         if (!hasMessageBeenShown && birthday === date) {
//             console.log(`HAPPY BIRTHDAY! DEAR ${username}`);
//             hasMessageBeenShown = true;
//         }

//         console.log(`MESSAGE FROM: ${username}`);
//         console.log(`MESSAGE: ${message}`);
//     }
// }

// const messageWithUser = createUser("Vasya", "123456", "01/01/2010");

// messageWithUser("Hello", "02/01/2010");

// messageWithUser("It's me", "01/01/2010");
// messageWithUser("I'm fine", "01/01/2010");
// messageWithUser("Some message", "01/01/2010");

// const messageWithUser2 = createUser("Petya", "admin", "01/02/2020");

// messageWithUser2("Hello", "01/02/2020");