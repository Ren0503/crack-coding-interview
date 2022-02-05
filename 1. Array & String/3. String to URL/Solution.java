class Solution {
    public String replaceSpaces(String str, int length) {
        char[] chars = str.toCharArray();
        int j = chars.length;
        for (int i = length - 1; i >= 0; --i) {
            if (chars[i] == ' ') {
                chars[--j] = '0';
                chars[--j] = '2';
                chars[--j] = '%';
            } else {
                chars[--j] = chars[i];
            }
        }
        return new String(chars, j, chars.length - j);
    }
}