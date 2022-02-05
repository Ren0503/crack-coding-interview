class Solution {
public:
    void replaceSpaces(char *str, int length) {
        int numOfSpaces = 0;
        int i = 0, j = 0;
        for ( i = 0; i < length; ++i ) {
            if (str[i] == ' ') {
                ++numOfSpaces;
            }
        }
        
        int extendedLen  = length + 2 * numOfSpaces;
        i = extendedLen - 1;
        for( j = length - 1; j >= 0; --j ) {
            if ( str[j] != ' ' ) {
            str[i--] = str[j];
            } else {
                str[i--] = '0';
                str[i--] = '2';
                str[i--] = '%';
            }
        }
    }
};