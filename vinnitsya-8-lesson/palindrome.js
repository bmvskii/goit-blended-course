const isPalindrome = (str) => str === str.split('').reverse().join('');

const isPalindromeV2 = str => {
    const { length } = str;

    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - i - 1]) {
            return false;
        }
    }

    return true;
};

console.log(isPalindromeV2('tomato'));
console.log(isPalindromeV2('tomamot'));
console.log(isPalindromeV2('tomaamot'));
