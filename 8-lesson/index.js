// const computeString = (str) => {
    // if (str === '') {
    //     return;
    // }

    // ...
    // ...
    // ...
    
    // return str;
// }

// const arrayOfStrs = ['', '123', 'asdas sadsa'];

// 1 итерация - '' <- пропуститься <- выход
// 2 итерация - 123 <- пропуститься
// 3 итерация - нормальная строка <- работа

// for (const str of arrayOfStrs) {
//     if (str === '' || str.length < 3) {
//         continue;
//     }

//     computeString(str);
// }

// О(малое) - лучший случай - O(N)
// О(больше) - худший случай - O(N^2)

// Тета - точное вычисление работы

let array = [1, 20, 3, 10, 40, 30, 40];
let iterations = 0;

for (let i = 0; i < array.length - 1; i++) {
    iterations++;

    for (let j = i + 1; j < array.length; j++) {
        console.log("COMPARE:", array[i] + ' vs ' + array[j]);
        iterations++;

        if (array[i] > array[j]) {
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

console.log(array);
