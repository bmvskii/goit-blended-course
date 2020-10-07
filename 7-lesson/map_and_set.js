// const map = new Map();
// const set = new Set();

// const array = [5, 4, 1, 2, 3, 4, 5, 6, 1, 2, 2, 3, 4, 5];
// const filteredData = new Set(array);

// const object = {
//     object1: {
//         object2: {
//             title: 123,
//         },
//         desc: 123,
//     },
//     array: [12312, 12312, 12321],
// };

// object.object1 = null;

let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
console.log(visitedSet.has(john)); // true

// проверим, заходила ли Mary?
console.log(visitedSet.has(mary)); // false

john = null;

// console.log(visitedSet.)

const response = {
    data: {
        user: {
            status: {
                info: {
                    label: "Success",
                }
            }
        }
    }
}

const uppercasedLabel = response?.data?.user?.status?.info?.label?.toUpperCase() ?? 'LABEL';


// map.set('key1', 'value1');
// map.set('key2', 'value2');
// map.set('key3', 1);
// map.set('key4', [1,2,3,4,5]);

// console.log(map.get('key4'));

// map.set('key4', { value: 123 });

// filteredData.delete(6);

// console.log(filteredData);
// console.log(map.get('key4'));

// set.add('some string 1');
// set.add('some string 2');
// set.add('some string 3');

// set.add('some string 2');
// set.add('some string 3');

// set.forEach(value => {
//     console.log(value);
// });