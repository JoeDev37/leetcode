/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) { 

// satisfy example 1
    // a = "10";
    // b = "0";
    // return a + b 

// satisfy example 2

    // a = "10";
    // b = "101";

    // return a + b

    let i = a.length - 1;
    let j = b.length - 1;
    let k = 0;
    let result = "";

    while (i >= 0 || j >= 0 || k) {
        let sum = k;

        if (i >= 0) {
            sum += a[i] - '0';
            i--;
        }

        if (j >= 0) {
            sum += b[j] - '0';
            j--;
        }

        result = (sum % 2) + result;
        k = Math.floor(sum / 2);
    }

    return result;
};