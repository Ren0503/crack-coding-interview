function checkPermutation(str1: string, str2: string): boolean {
    if (str1.length === 0 || str1.length !== str2.length) {
        return false;
    }

    let chars = new Map();

    for (let i = 0; i < str1.length; ++i) {
        chars.set(str1[i], chars.get(str1[i]) + 1 || 1); // increment or set to 1
    }

    for (let i = 0; i < str2.length; ++i) {
        let count = chars.get(str2[i]);
        if (!count) {
            return false;
        }
        if (count === 1) {
            chars.delete(str2[i]);
        }
        else {
            chars.set(str2[i], count - 1);
        }
    }

    return chars.size === 0;
}