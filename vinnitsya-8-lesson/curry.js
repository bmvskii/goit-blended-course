// const sum = (a = 0) => (b = 0) => (d = 0) => (g = 0) => () => a + b + d + g;

// const res = sum(10)(20)(30)(6)();

// console.log(res);

const discount = (money, sale) => money - (money * sale);

const tenPercentDiscount = money => discount(money, .10);
const twentyPercentDiscount = money => discount(money, .20);

console.log(tenPercentDiscount(5000));
console.log(tenPercentDiscount(400));
console.log(tenPercentDiscount(600));
console.log(tenPercentDiscount(20000));