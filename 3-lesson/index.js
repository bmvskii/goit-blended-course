// const transformArrayToObject = (array) => {
//     const object = {};

//     for (let i = 0; i < array.length; i++) {
//         object[i] = array[i];
//     }

//     return object;
// };

// const transformObjectToArray = (obj) => {
//    return Object.values(obj);  
// };

// console.log(transformArrayToObject(["cola", "pepsi", "fanta"]));
// console.log(transformObjectToArray({ 0: "cola", 1: "pepsi", 2: "fanta" }));


// const Car = function({ price = 10000, color = 'red' }) {
//     this.price = price;
//     this.color = color;
// }

// Car.prototype.getBaseInfo = function() {
//     console.log("PRICE:", this.price);
//     console.log("COLOR:", this.color);
// };

// const LightWeightCar = function({ price, color, model, brand }) {
//     Car.call(this, price, color);

//     this.model = model;
//     this.brand = brand;
// };

// LightWeightCar.prototype = Object.create(Car.prototype);
// LightWeightCar.prototype.constructor = Car;

// const car = new LightWeightCar({ price: 2000, color: "blue", model: "M3", brand: "BMW" });

// const object1 = {
//     a: 1,
//     b: 2,
// }

// const object2 = {
//     c: 3,
//     d: 4,
// }


// for (const key in object2) {
//     if (object2.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }

// const keys = Object.keys(object2);

// class Stack {
//     constructor(...args) {
//        this._array = args; 
//     }

//     push(elem) {
//         this._array.push(elem);
//     }

//     pop() {
//         this._array.pop();
//     }

//     insertAt(elem, index) {
//         // 1 - splice

//         this._array.splice(index, 0, elem);

        // this._array = [
        //     ...this._array.slice(0, index),
        //     elem,
        //     ...this._array.slice(index)
        // ];        
//     }

//     log() {
//         console.log(this._array);
//     }
    
//     deleteAt(index) {
//         // 1 - splice
//         // 2 - delete
//         // 3 - spread + slice

//         this._array.splice(index, 1);

//         // [1,2,3,4,5]
//         // index = 2

//         // от 0 до 2
//         // ...[1, 2]

//         // от 3 до конца
//         // ...[4, 5]

//         // this._array = [
//         //     ...this._array.slice(0, index),
//         //     ...this._array.slice(index + 1)
//         // ];
//     }

//     clear() {
//         this._array = [];
//     }

//     get length() {
//         return this._array.length;
//     }

//     has(elem) {
//         return this._array.includes(elem);
//     }
// }


// const stack = new Stack();
// stack.log(); // []

// const stack1 = new Stack(1, 2, 3);
// stack1.log(); // [1, 2, 3]

// stack1.push(10);
// stack1.push(20);
// stack1.log(); // [1, 2, 3, 10, 20]

// stack1.insertAt(30, 2);
// stack1.log(); // [1, 2, 30, 3, 10, 20];

// stack1.pop();
// stack1.log(); // [1, 2, 30, 3, 10];

// stack1.deleteAt(1);
// stack1.log(); // [1, 30, 3, 10]

// console.log(stack1.length); // 4
// console.log(stack1.has(300)); // false
// console.log(stack1.has(10)); // true

// stack1.clear();
// stack1.log(); // []

// const object = JSON.parse({
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

// const {
//     data: {
//         relationships: {
//             author: {
//                 data: authorData
//             }
//         },
//         attributes,
//     },
// } = object;

// if (authorData.type === 'people') {
//     object.data.attributes.title = authorData.id + authorData.type;
// }

// class Helper {
//     constructor(string) {}

//     static toDifferentCase(string) {}

//     static trim(string, amount) {}
// }

// const array = [
//     {
//         value: "AAAA",
//     },
//     {
//         value: "CCCC",
//     },
//     {
//         value: "BBBB",
//     },
//     {
//         value: 'aaaa',
//     }
// ];

// array.sort((value1, value2) => {
//     const fparam = value1.value.toUpperCase();
//     const sparam = value2.value.toUpperCase();

//     if (fparam > sparam) {
//         return -1;
//     } else if (fparam < sparam) {
//         return 1;
//     } else {
//         return 0;
//     }
// });

// console.log("AFTER:", array);


const getMaxUnicodeSumWord = (phrase) => {
    const words = phrase.split(' ');
    
    // let maxUnicodeSum = 0;
    // let maxUnicodeSumWord = '';

    // for (const word of words) {
    //     let total = 0;

    //     for (let i = 0; i < word.length; i++) {
    //         total += word.charCodeAt(i);
    //     }

    //     if (total > maxUnicodeSum) {
    //         maxUnicodeSum = total;
    //         maxUnicodeSumWord = word;
    //     }
    // }

    // return maxUnicodeSumWord;

    // const array = [{ value: 1 }, { value: 2}, { value: 3}];
    // const total = array.reduce((acc, { value }) => acc + value, 0);
    
    return words.reduce((acc, word) => {
        const sum = word.split('').reduce((acc, l, i) => acc + word.charCodeAt(i), 0);
        return acc.sum < sum ? { sum, word } : acc;
    }, { sum: 0, word: ''}).word;
};

console.log(getMaxUnicodeSumWord("Hello Victor! Today is a good day!")); // Victor!

// class Car {
//     constructor(initialProps) {
//         const { color, type, model, brand, weight } = initialProps;

//         this._color = color;
//         this._type = type;
//         this._model = model;
//         this._brand = brand;
//         this._weight = weight;
//     }

//     get color() {
//         return this._color;
//     }

//     set color(newColor) {
//         this._color = newColor;
//     }

//     set type(newType) {
//         this._type = newType; 
//     }

//     get type() {
//         return this._type;
//     }

//     showWeight() {
//         console.log("WEIGHT:", this._weight);
//     }

//     static getCarInfo(car) {
//         console.log("TYPE:", car.type);
//         console.log("COLOR:", car.color);

//         car.showWeight();
//     }

//     static hello() {
//         console.log("Heello!");
//     }
// }

// const car = new Car({ 
//     color: "red", 
//     type: "lightweight",
//     model: "truck", 
//     brand: "Range Rover",
//     weight: 2000
// });

// const car1 = new Car({ 
//     color: "blue", 
//     type: "heavyweight",
//     model: "truck", 
//     brand: "Range Rover",
//     weight: 2000
// });

// Car.getCarInfo(car);
// Car.getCarInfo(car1);

// const array = [1, 2, 3, 4];

// array.forEach(item => {
//     const elem = item * 2;
// });

// console.log(array);

// const array = [1, 2, 20, 30, 3, 4];
// array.sort((a, b) => b - a);

// const array = [
//     { product: 'MEAT', name: "Stake", amount: 10, },
//     { product: 'MEAT', name: "Pork", amount: 8,  },
//     { product: 'MEAT', name: "Chicken", amount: 4, },
//     { product: 'MEAT', name: "Chicken", amount: 20, },
//     { product: 'MILK', name: "Feta", amount: 20 },
//     { product: 'MILK', name: "Mozarella", amount: 30 },
//     { product: 'MILK', name: "Mozarella", amount: 3 },
//     { product: 'FRUIT', name: "Banana", amount: 8,  },
//     { product: 'FRUIT', name: "Apple", amount: 2,   },
//     { product: 'FRUIT', name: "Apple", amount: 15,   },
// ];

// const compare = (obj1, obj2, criteria) => {
//     if (obj1[criteria] > obj2[criteria]) {
//         return 1;
//     } else if (obj1[criteria] < obj2[criteria]) {
//         return -1;
//     }
//     return 0;
// }

// array.sort((obj1, obj2) => {
//     const cmp1 = compare(obj1, obj2, 'product');

//     if (!cmp1) {
//         const cmp2 = compare(obj1, obj2, 'name');
//         return !cmp2 ? compare(obj1, obj2, 'amount') : cmp2;
//     } else {
//         return cmp1;
//     }

//     if (obj1.product > obj2.product) {
//     } else if (obj1.product < obj2.product) {
//         return -1;
//     } else {
//         if (obj1.name > obj2.name) {
//             return 1;
//         } else if (obj1.name < obj2.name) {
//             return -1;
//         } else {
//             if (obj1.amount > obj2.amount) {
//                 return 1;
//             } else if (obj1.amount < obj2.amount) {
//                 return -1;
//             } else {
//                 return 0;
//             }
//         }
//     }
// });

// console.log(array); 