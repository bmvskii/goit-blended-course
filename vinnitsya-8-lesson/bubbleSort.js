const numbers = [1, 4, 3, 10, 5, 1000, 30, 200, 0, -123, 54];

// 1 vs 4
// 1 vs 3
// 1 vs 10
// 1 vs 0 -> 0 vs 1
// 0 vs -123 -> -123 vs 0

for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] > numbers[j]) {
            [numbers[i], numbers[j]] = [numbers[j], numbers[i]];

            // Swap c 3 переменной

            // let temp = numbers[i];
            // numbers[i] = numbers[j];
            // numbers[j] = temp;
        }
    }
}

console.log(numbers);