const binarySearch = (value, list) => {
  let first = 0; // начальный индекс в массиве
  let last = list.length - 1; // конечный индекс
  let position = -1;
  let found = false;
  let middle;

  while (found === false && first <= last) {
    middle = Math.floor((first + last) / 2);

    if (list[middle] == value) {
      found = true;
      position = middle;
    } else if (list[middle] > value) {
      // значение в нижней части списка
      last = middle - 1;
    } else {
      // значение в верхней части списка
      first = middle + 1;
    }
  }

  return position;
}


const strings = ["aaa", "bbb", "ccc", "ddd", "eee", "fff"];
const find = (str) => {
    for (let i = 0; i < strings.length; i++) {
        if (strings[i] === str) {
            return i;
        }
    }
} // должна вернуть индекс слова