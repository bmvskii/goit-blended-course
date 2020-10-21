const isAnagram = (str, str2) => {
    if (str.length !== str2.length) {
        return false;
    }

    const lowercasedStr = str.toLowerCase();
    const lowercasedStr2 = str2.toLowerCase();

    // ПРИМЕР 1

    // const strMap = new Map();
    // const str2Map = new Map();

    // for (const letter of lowercasedStr) {
    //     if (!strMap.has(letter)) {
    //         strMap.set(letter, 1);
    //     } else {
    //         let currNumber = strMap.get(letter);
    //         strMap.set(letter, ++currNumber);
    //     }
    // }

    // for (const letter of lowercasedStr2) {
    //     if (!str2Map.has(letter)) {
    //         str2Map.set(letter, 1);
    //     } else {
    //         let currNumber = str2Map.get(letter);
    //         str2Map.set(letter, ++currNumber);
    //     }
    // }

    // if (strMap.size !== str2Map.size) {
    //     return false;
    // }

    // for (const [letter, counter] of strMap) {
    //     if (!str2Map.has(letter)) {
    //         return false;
    //     }

    //     if (str2Map.get(letter) !== counter) {
    //         return false;
    //     }
    // }

    // console.log(strMap);
    // console.log(str2Map);

    // ПРИМЕР 2
    
    // for (const letter of new Set([...lowercasedStr])) {

    //     const letterNumberInStr = Array.from(lowercasedStr).filter(l => l === letter).length;
    //     const letterNumberInStr2 = Array.from(lowercasedStr2).filter(l => l === letter).length;
        
    //     if (letterNumberInStr !== letterNumberInStr2) {
    //         return false;
    //     }
    // }

    // ПРИМЕР 3
    
    // const f = str.toLowerCase().split('').sort().join('');
    // const s = str2.toLowerCase().split('').sort().join('');

    return true;
}

// console.log(isAnagram('friendiin', 'finderwin'));
// console.log(isAnagram('friend', 'finders'));
// console.log(isAnagram('friend', 'finder'));

// let visitedSet = new WeakSet();

// let john = { name: "John" };
// let pete = { name: "Pete" };
// let mary = { name: "Mary" };

// visitedSet.add(john); // John заходил к нам
// visitedSet.add(pete); // потом Pete
// visitedSet.add(john); // John снова

// // visitedSet сейчас содержит двух пользователей

// // проверим, заходил ли John?
// console.log(visitedSet.has(john)); // true

// // проверим, заходила ли Mary?
// console.log(visitedSet.has(mary)); // false

// john = null;