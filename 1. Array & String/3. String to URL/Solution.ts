/**
 * @param {string} S
 * @param {number} length
 * @return {string}
 */
var replaceSpaces = function (S: string, length: number) {
    // have a pointer to check from start to end
    var strArr = S.split('');
    var pointer: number = 0;
    while (pointer < length) {
        if (strArr[pointer] === ' ') {
            // *** needs more work here, a little wierd
            // not handling trailing spaces properly
            for (var i = length - 1; i > pointer + 3; i--) {
                strArr[i] = S[i - 2];
            }
            strArr[pointer] = '%';
            strArr[pointer + 1] = '2';
            strArr[pointer + 2] = '0';
        }
        pointer++;
    }
    // if character is a space, move remainder chars by two
    // replace following three chars with '%20'
    return strArr.join('');
};
