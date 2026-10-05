function isPalindrome(x: number): boolean | string {
    // accept number and return boolian, okay then...
    // if (x < 0) return fasle

    const str: string = x.toString()
    const reverseStr = str.split('').reverse().join('');

    return str === reverseStr;
};

console.log(isPalindrome(121));