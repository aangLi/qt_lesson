function isCommonPrefix(strs, middle) {
    if (strs[0].length == 0) {
        return false;
    }
    /**
     * 通过循环的方式
     */
    const prefix = strs[0].substring(0, middle);
    for (let i = 1; i < strs.length; i++) {
        if (!strs[i].startsWith(prefix)) return false;
    }
    return true;
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    // 最短的一项
    let minLen = Number.MAX_VALUE;
    if (strs.length == 0)
        return '';
    for (let i = 0; i < strs.length; i++) {
        if (strs[i].length <= 0)
            return '';
        minLen = Math.min(minLen, strs[i].length);
    }

    let low = 0, high = minLen;
    // 查找中间值， 不停的查找。寻找到最大的公共前缀
    while (low <= high) {
        let mid = (low + high) >> 1;
        if (isCommonPrefix(strs, mid)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return strs[0].substring(0, (low + high) >> 1);
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));