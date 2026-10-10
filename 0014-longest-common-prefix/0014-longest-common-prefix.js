/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if (!strs || strs === 0) return "";

    for (i = 0; i < strs[0].length; i++) {
        const aa = strs[0][i];
        for (j = 1; j < strs.length; j++) {
            if (i === strs[j].length || strs[j][i] !== aa) {
                return strs[0].substring(0, i);
            }
        }
    }
    return strs[0];
};

const arr = ["flower", "flow", "flight"];
console.log(arr)

longestCommonPrefix()
