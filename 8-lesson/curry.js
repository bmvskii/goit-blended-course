// function curry(fn, ...args) {
//   return (..._arg) => {
//     return fn(...args, ..._arg);
//   };
// }

// function curry(func) {
//   return function curried(...args) {
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function (...args2) {
//         return curried.apply(this, args.concat(args2));
//       };
//     }
//   };
// }

// function sum(a, b, c) {
  // return a + b + c;
// }

// let curriedSum = curry(sum);

// alert(curriedSum(1, 2, 3)); // 6, всё ещё можно вызывать нормально
// alert(curriedSum(1)(2, 3)); // 6, каррирование первого аргумента
// alert(curriedSum(1)(2)(3)); // 6, каррирование всех аргументов


// const sum = (a, b, c) => a + b + c;

// const mul = (a, b, ...args) => {
//   let total = 1;
//   for (const arg of args) {
//     total *= arg;
//   }
//   return a * b * total;
// };

// const tenMulTwenty = curry(mul, 10, 20);

// console.log(tenMulTwenty(10, 10, 10, 10, 0));


// const currySum = (a) => (b, c) => a + b + c;

// const baseTenSum = currySum(10);
// const baseTwentySum = currySum(20);

// console.log(baseTenSum(1, 2));

// const multiply = function(a) {
    
//     return function(b) {

//       return function (c) {

//         return function (d) {

//           return a * b * c * d;

//         } 
//       } 
//     } 
// } 
// // // 120
// const result1 = multiply(2);
// const result2 = result1(3);
// const result3 = result2(4);
// const result4 = result3(5);

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

// console.log(result);

// const discount = (money) => money - (money * 0.1);

// const tenPercentsDiscount = (money) => discount(money, 0.10);
// const twentyPercentsDiscount = (money) => discount(money, 0.20);
// const thirtyPercentsDiscount = (money) => discount(money, 0.30);

// console.log(tenPercentsDiscount(5000));
// console.log(tenPercentsDiscount(500));
// console.log(tenPercentsDiscount(200));

// console.log(twentyPercentsDiscount(5000));
// console.log(twentyPercentsDiscount(500));
// console.log(twentyPercentsDiscount(200));

// console.log(thirtyPercentsDiscount(5000));
// console.log(thirtyPercentsDiscount(500));
// console.log(thirtyPercentsDiscount(200));